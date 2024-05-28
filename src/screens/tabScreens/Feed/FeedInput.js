import React, { useState, useEffect } from 'react';
import { collection, addDoc, doc, onSnapshot, getDocs } from 'firebase/firestore';
import { View, TextInput, StyleSheet, Modal, Text, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { getAuth } from 'firebase/auth';
import { FIRESTORE_DB } from '../../../../FirebaseConfig';

function FeedInput(props) {
  const [enteredTweetText, setEnteredTweetText] = useState('');
  const [userName, setUserName] = useState("");
  const [profileImage, setProfileImage] = useState(null);

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

  const addTweetHandler = async () => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      const uid = user.uid;
      const tweetsRef = collection(FIRESTORE_DB, 'tweets');
      try {
        await addDoc(tweetsRef, {
          userName: userName,
          text: enteredTweetText,
          userId: uid,
        });

        async function fetchTweets() {
          try {
            const tweetsCollectionRef = collection(FIRESTORE_DB, "tweets");
            const querySnapshot = await getDocs(tweetsCollectionRef);
            const tweetsData = [];
            querySnapshot.forEach((doc) => {
              tweetsData.push({ id: doc.id, ...doc.data() });
            });

            props.setTweets(tweetsData);
          } catch (error) {
            console.error("Error fetching tweets:", error);
          }
        }
        fetchTweets();
        props.onAddTweet(enteredTweetText);
        setEnteredTweetText('');
      } catch (error) {
        console.error('Error adding tweet to Firestore: ', error);
      }
    }
  };

  const tweetInputHandler = (enteredText) => {
    setEnteredTweetText(enteredText);
  };

  return (
    <Modal style={styles.ModalContanier} visible={props.visible} animationType="slide">
      <SafeAreaView style={styles.inputContainer}>
        <View style={styles.userContainer}>
          <Image
            style={styles.userImage}
            source={profileImage ? { uri: profileImage } : require("../../../assets/images/user.png")}
          />
          <Text style={styles.userName}>{userName}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.cancelButton} onPress={props.onCancel}>
            <Text style={styles.cancel}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={addTweetHandler}>
            <Text style={styles.post}>Post</Text>
          </TouchableOpacity>
        </View>
        <TextInput
          style={styles.textInput}
          placeholder='write something'
          onChangeText={tweetInputHandler}
          value={enteredTweetText}
          multiline={true}
        />
      </SafeAreaView>
    </Modal>
  );
}

export default FeedInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'flex start',
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
    marginTop: 50,
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
    textAlign: 'left',
    textAlignVertical: 'top',
    backgroundColor: '#E9E9E9',
    color: 'black',
    borderRadius: 30,
    width: '90%',
    paddingBottom: 200,
    paddingTop: 20,
    paddingHorizontal: 20,
    borderColor: 'black',
    borderWidth: 1,
    textAlign: 'justify',
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
});
