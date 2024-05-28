import React, { useState, useEffect, useCallback } from "react";
import { Modal, View, TouchableOpacity, Text, StyleSheet, Pressable, Image, ActivityIndicator, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as ImageManipulator from "expo-image-manipulator";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome6 } from "@expo/vector-icons";
import { imageDb, FIRESTORE_DB } from '../../FirebaseConfig'; // Update the path accordingly
import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { getAuth } from 'firebase/auth';

const Avatar = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [image, setImage] = useState(null);
  const [imageModalVisible, setImageModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState(null);
  const [defaultImageUri, setDefaultImageUri] = useState(null);
  const [previousImageUri, setPreviousImageUri] = useState(null); // To store previous image URI

  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      setUserId(user.uid);
      loadUserImage(user.uid);
      loadDefaultImage();
    }
  }, []);

  const loadDefaultImage = async () => {
    try {
      const defaultImageRef = ref(imageDb, 'user.png'); // The path where you uploaded user.png
      const defaultImageUrl = await getDownloadURL(defaultImageRef);
      setDefaultImageUri(defaultImageUrl);
    } catch (error) {
      console.error("Error loading default image: ", error);
    }
  };

  const loadUserImage = async (uid) => {
    try {
      const userDocRef = doc(FIRESTORE_DB, 'users', uid);
      const userDoc = await getDoc(userDocRef);
      if (userDoc.exists()) {
        const userData = userDoc.data();
        if (userData.profileImage) {
          setImage(userData.profileImage);
          setPreviousImageUri(userData.profileImage); // Store the current image URI as previous
        }
      }
    } catch (error) {
      console.error("Error loading user image: ", error);
    }
  };

  const resizeImage = async (uri) => {
    try {
      console.log("Resizing image with URI:", uri);
      const manipResult = await ImageManipulator.manipulateAsync(
        uri,
        [{ resize: { width: 500 } }],
        { compress: 0.8, format: ImageManipulator.SaveFormat.JPEG }
      );
      console.log("Image resized successfully:", manipResult.uri);
      return manipResult.uri;
    } catch (error) {
      console.error("Error resizing image: ", error);
      return uri;
    }
  };

  const uploadImage = async () => {
    try {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission required', 'Camera permissions are required to upload an image.');
        return;
      }
      let result = await ImagePicker.launchCameraAsync({
        cameraType: ImagePicker.CameraType.front,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });
      if (!result.canceled) {
        setLoading(true);
        console.log("Image picker result:", result);
        const resizedUri = await resizeImage(result.assets[0].uri);
        await saveImage(resizedUri);
        setLoading(false);
      }
    } catch (error) {
      Alert.alert("Error", "Error uploading image: " + error.message);
      setLoading(false);
      setModalVisible(false);
    }
  };

  const saveImage = async (imageUri) => {
    try {
      if (previousImageUri) {
        // Delete the previous image if it exists
        const previousImageRef = ref(imageDb, previousImageUri);
        await deleteObject(previousImageRef);
      }

      console.log("Saving image with URI:", imageUri);
      const response = await fetch(imageUri);
      const blob = await response.blob();
      const storageRef = ref(imageDb, `profile_pics/${userId}/${Date.now()}`);
      await uploadBytes(storageRef, blob);

      const downloadURL = await getDownloadURL(storageRef);
      setImage(downloadURL);
      setPreviousImageUri(downloadURL); // Update the previous image URI

      // Save the URL in Firestore
      const userDocRef = doc(FIRESTORE_DB, 'users', userId);
      await setDoc(userDocRef, { profileImage: downloadURL }, { merge: true });

      setModalVisible(false);
    } catch (error) {
      Alert.alert("Error", "Error saving image: " + error.message);
      setLoading(false);
      setModalVisible(false);
    }
  };

  const handleRemovePress = async () => {
    try {
      if (image) {
        const imageRef = ref(imageDb, image);
        await deleteObject(imageRef);
      }
      setImage(null);
      setPreviousImageUri(null); // Clear the previous image URI
      const userDocRef = doc(FIRESTORE_DB, 'users', userId);
      await setDoc(userDocRef, { profileImage: "" }, { merge: true });
      setModalVisible(false);
    } catch (error) {
      Alert.alert("Error", "Error removing image: " + error.message);
      setModalVisible(false);
    }
  };

  const handleCancelPress = () => {
    setModalVisible(false);
  };

  const handlePickImage = async () => {
    try {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission required', 'Media library permissions are required to pick an image.');
        return;
      }
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        setLoading(true);
        console.log("Image picker result:", result);
        const resizedUri = await resizeImage(result.assets[0].uri);
        await saveImage(resizedUri);
        setLoading(false);
      }
    } catch (error) {
      Alert.alert("Error", "Error picking image: " + error.message);
      setLoading(false);
      setModalVisible(false);
    }
  };

  const handleOpenImage = useCallback(() => {
    if (image) {
      setImageModalVisible(true);
    }
  }, [image]);

  const handleImageModalClose = useCallback(() => {
    setImageModalVisible(false);
  }, []);

  return (
    <View>
      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={handleOpenImage}>
          {image ? (
            <Image source={{ uri: image }} style={styles.profileImage} />
          ) : (
            <Image
              source={{ uri: defaultImageUri }}
              style={styles.profileImage}
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={styles.imageIcon}
        >
          <MaterialCommunityIcons name="pencil" size={24} color="#b5b5b7" />
        </TouchableOpacity>
      </View>
      <Modal
        visible={modalVisible}
        animationType="fade"
        onRequestClose={() => setImageModalVisible(false)}
        transparent={true}
      >
        <Pressable onPress={handleCancelPress} style={styles.background}>
          {loading ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color="#000000" />
              <Text>Uploading...</Text>
            </View>
          ) : (
            <View style={styles.modalContainer}>
              <TouchableOpacity onPress={uploadImage} style={styles.icons}>
                <FontAwesome6 name='camera' color="#000000" size={30} />
                <Text>Camera</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handlePickImage} style={styles.icons}>
                <FontAwesome6 name='image' color="#000000" size={30} />
                <Text>Gallery</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleRemovePress} style={styles.icons}>
                <FontAwesome6 name='trash' color="#000000" size={30} />
                <Text>Remove</Text>
              </TouchableOpacity>
            </View>
          )}
        </Pressable>
      </Modal>
      <Modal
        visible={imageModalVisible}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
        transparent={true}
      >
        <Pressable onPress={handleImageModalClose} style={styles.background}>
          <Image source={{ uri: image }} style={styles.fullProfileImage} />
        </Pressable>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    flexDirection: "row",
    backgroundColor: "rgba(255, 255, 255, 1)",
    justifyContent: "center",
    gap: 40,
    alignItems: "center",
    width: 350,
    height: 150,
    borderRadius: 10,
  },
  icons: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  container: {
    marginBottom: 180,
    alignItems: "center",
    position: "relative",
  },
  imageIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#ffffff",
    padding: 5,
    borderRadius: 20,
  },
  imageContainer: {
    bottom: 70,
  },
  profileImage: {
    width: 140,
    height: 140,
    borderRadius: 70,
  },
  fullProfileImage: {
    width: "90%",
    height: 400,
    borderRadius: 10,
  },
  loadingContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
  },
});

export default Avatar;
