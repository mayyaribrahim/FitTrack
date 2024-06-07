import React, { useState, useEffect } from 'react';
import { collection, addDoc, doc, onSnapshot, getDocs, serverTimestamp } from 'firebase/firestore';
import { View, TextInput, StyleSheet, Modal, Text, TouchableOpacity, Image, SafeAreaView, Alert, ActivityIndicator } from 'react-native';
import { getAuth } from 'firebase/auth';
import { FIRESTORE_DB } from '../../../../FirebaseConfig';
import * as ImagePicker from 'expo-image-picker';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { Ionicons } from '@expo/vector-icons'; 

function FeedInput(props) {
  const [enteredTweetText, setEnteredTweetText] = useState('');
  const [userName, setUserName] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      const uid = user.uid;
      const userDocRef = doc(FIRESTORE_DB, 'users', uid);
      const unsubscribe = onSnapshot(userDocRef, (doc) => {
        if (doc.exists()) {
          const userData = doc.data();
          setUserName(userData.firstName + ' ' + userData.lastName);
          setProfileImage(userData.profileImage);
        } else {
          console.log("User document does not exist.");
        }
      });

      return () => unsubscribe();
    } else {
      console.log("No user is currently signed in.");
    }
  }, []);

  const pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 0.5, // Reduce quality to reduce size
      });

      if (!result.canceled) {
        console.log('Image picked:', result.assets[0].uri);
        setSelectedImage(result.assets[0].uri);
      } else {
        console.log('Image picking canceled');
      }
    } catch (error) {
      console.error('Error picking image:', error);
      Alert.alert('Error', 'There was an error picking the image. Please try again.');
    }
  };

  const uploadImage = async (uri) => {
    try {
      console.log('Uploading image...');
      const response = await fetch(uri);
      const blob = await response.blob();
      const storage = getStorage();
      const storageRef = ref(storage, `images/${Date.now()}`);
      await uploadBytes(storageRef, blob);
      blob.close(); // Release the memory
      const downloadURL = await getDownloadURL(storageRef);
      console.log('Image uploaded, URL:', downloadURL);
      return downloadURL;
    } catch (error) {
      console.error('Error uploading image:', error);
      throw error;
    }
  };

  const addTweetHandler = async () => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      setIsLoading(true);
      const uid = user.uid;
      const tweetsRef = collection(FIRESTORE_DB, 'tweets');
      let imageUrl = null;

      try {
        if (selectedImage) {
          imageUrl = await uploadImage(selectedImage);
        }

        console.log('Adding tweet to Firestore...');
        await addDoc(tweetsRef, {
          userName: userName,
          text: enteredTweetText,
          userId: uid,
          image: imageUrl,
          createdAt: serverTimestamp(),
        });

        props.onAddTweet(enteredTweetText);
        setEnteredTweetText('');
        setSelectedImage(null);
        setIsLoading(false);
        console.log('Tweet added successfully!');
      } catch (error) {
        console.error('Error adding tweet to Firestore:', error);
        Alert.alert("Error", "There was an error posting your tweet. Please try again.");
        setIsLoading(false);
      }
    }
  };

  const tweetInputHandler = (enteredText) => {
    setEnteredTweetText(enteredText);
  };

  const cancelHandler = () => {
    setEnteredTweetText('');
    setSelectedImage(null);
    props.onCancel();
  };

  const removeImageHandler = () => {
    setSelectedImage(null);
  };

  const isButtonDisabled = !enteredTweetText;

  return (
    <Modal style={styles.ModalContanier} visible={props.visible} animationType="slide">
      <SafeAreaView style={styles.inputContainer}>

        <View style={styles.userContainer}>
          <Image
            style={styles.userImage}
            source={profileImage ? { uri: profileImage } : require("../../../assets/images/user.png")}
          />
          <Text style={styles.userName}>{userName}</Text>
          <TouchableOpacity style={styles.imagePickerButton} onPress={pickImage} disabled={isLoading}>
            <Ionicons name="image-outline" size={24} color="#272D34" />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.cancelButton} onPress={cancelHandler} disabled={isLoading}>
            <Text style={styles.cancel}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.button, isButtonDisabled && styles.disabledButton]} 
            onPress={addTweetHandler} 
            disabled={isButtonDisabled || isLoading}
          >
            <Text style={styles.post}>{isLoading ? <ActivityIndicator size="small" color="#ffffff" /> : 'Post'}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.textInputCon}>
          <TextInput
            style={styles.textInput}
            placeholder='What are you thinking about?'
            placeholderTextColor='#858585'
            onChangeText={tweetInputHandler}
            value={enteredTweetText}
            multiline={true}
          />

          {selectedImage && (
            <View style={styles.imageContainer}>
              <Image source={{ uri: selectedImage }} style={styles.selectedImage} />
              <TouchableOpacity style={styles.removeImageButton} onPress={removeImageHandler}>
                <Ionicons name="close-circle" size={26} color="#171717bd" />
              </TouchableOpacity>
            </View>
          )}
        </View>
      </SafeAreaView>
    </Modal>
  );
}

export default FeedInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingBottom: 30,
    backgroundColor: 'white',
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginTop: 63,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  userName: {
    fontFamily: "poppins",
    marginLeft: 10,
  },
  textInputCon: {
    justifyContent: 'flex-start',
  },
  textInput: {
    fontFamily: "poppins",
    marginTop: 10,
    textAlign: 'left',
    textAlignVertical: 'top',
    backgroundColor: '#EFEFEF',
    borderRadius: 30,
    paddingVertical: 7,
    paddingHorizontal: 20,
    textAlign: 'justify',
    fontSize: 14,
  },
  textInputCon: {
    backgroundColor: '#EFEFEF',
    borderRadius: 30,
    width: '90%',
    height: 285,
    paddingVertical: 8,
  },
  buttonContainer: {
    width: '45%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    position: "absolute",
    right: 20,
    top: 50,
  },
  button: {
    width: 80,
    height: 40,
    borderRadius: 100,
    backgroundColor: "#272D34",
    alignItems: "center",
    justifyContent: "center",
  },
  disabledButton: {
    backgroundColor: "#A9A9A9",
  },
  cancelButton: {
    width: 80,
    height: 40,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  post: {
    fontFamily: "poppins",
    color: "white",
    fontSize: 14,
  },
  cancel: {
    fontFamily: "poppins",
    color: "#272D34",
    fontSize: 16,
  },
  imagePickerButton: {
    marginLeft: 120,
    backgroundColor: "#E1F0F4",
    borderRadius: 10,
    padding: 8,
  },
  imagePickerText: {
    fontFamily: "poppins",
    color: "#272D34",
    fontSize: 14,
  },
  imageContainer: {
    position: 'relative',
    alignItems: 'center',
    marginTop: 10,
  },
  selectedImage: {
    width: 300,
    height: 200,
    borderRadius: 10,
  },
  removeImageButton: {
    position: 'absolute',
    top: -10,
    right: 10,
    backgroundColor: '#ffffff',
    borderRadius: 15,
  },
});
