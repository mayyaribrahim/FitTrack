import React, { useState, useEffect } from "react";
import { doc, deleteDoc, getDoc, collection, getDocs } from "firebase/firestore";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { getAuth } from "firebase/auth";
import { getStorage, ref, deleteObject } from "firebase/storage";
import { FIRESTORE_DB } from "../../../../FirebaseConfig";
import moment from 'moment'; // Import moment.js to format dates

function FeedItem(props) {
  const { userName, text, userId, id, image, setTweets, createdAt } = props;
  const [profileImage, setProfileImage] = useState(null);

  const auth = getAuth();
  const currentUser = auth.currentUser;

  useEffect(() => {
    const fetchUserProfileImage = async () => {
      const userDocRef = doc(FIRESTORE_DB, 'users', userId);
      const userDoc = await getDoc(userDocRef);
      if (userDoc.exists()) {
        const userData = userDoc.data();
        if (userData.profileImage) {
          setProfileImage(userData.profileImage);
        }
      }
    };
    fetchUserProfileImage();
  }, [userId]);

  const handleDelete = async () => {
    if (currentUser && currentUser.uid === userId) {
      try {
        const tweetDocRef = doc(FIRESTORE_DB, 'tweets', id);
        await deleteDoc(tweetDocRef);

        if (image) {
          const storage = getStorage();
          const imageRef = ref(storage, image);
          await deleteObject(imageRef);
          console.log('Image deleted successfully from storage');
        }

        setTweets((prevTweets) => {
          const updatedTweets = prevTweets.filter(tweet => tweet.id !== id);
          return updatedTweets.sort((a, b) => b.createdAt.toDate() - a.createdAt.toDate());
        });

        console.log('Tweet deleted successfully!');
      } catch (error) {
        console.error('Error deleting tweet:', error);
      }
    } else {
      console.log('You are not authorized to delete this tweet.');
    }
  };

  const formattedDate = createdAt ? moment(createdAt.toDate()).format('MMMM Do YYYY, h:mm:ss a') : '';

  return (
    <View style={styles.tweetItem}>
      <View style={styles.userContainer}>
        <Image
          style={styles.userImage}
          source={profileImage ? { uri: profileImage } : require("../../../assets/images/user.png")}
        />
        <Text style={styles.userName}>{userName}</Text>

        {currentUser && currentUser.uid === userId && (
          <View style={styles.deleteButton}>
            <Pressable
              android_ripple={{ color: '#555555' }}
              onPress={handleDelete}
              style={({ pressed }) => pressed && styles.pressedItem}
            >
              <Ionicons name='trash' color='#BEBEBE' size={27} />
            </Pressable>
          </View>
        )}
      </View>
      <Text style={styles.Text}>{text}</Text>
      {image && <Image source={{ uri: image }} style={styles.tweetImage} />}
      <Text style={styles.dateText}>{formattedDate}</Text>
    </View>
  );
}

export default FeedItem;

const styles = StyleSheet.create({
  tweetItem: {
    alignSelf: 'center',
    width: '89%',
    margin: 8,
    padding: 8,
    borderRadius: 15,
    backgroundColor: '#efefef',
    padding: 15,
  },
  pressedItem: {
    opacity: 0.5,
  },
  Text: {
    fontFamily: "poppins",
    color: 'black',
    paddingVertical: 8,
    paddingLeft: 4,
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
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
  deleteButton: {
    flex: 1,
    alignItems: 'flex-end',
  },
  tweetImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginTop: 3,
  },
  dateText: {
    fontFamily: "poppins",
    color: 'gray',
    fontSize: 12,
    marginTop: 10,
    textAlign: 'right',
  },
});
