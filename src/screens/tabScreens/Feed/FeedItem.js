import React, { useState, useEffect } from "react";
import { doc, deleteDoc, collection, getDocs, getDoc } from "firebase/firestore";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { getAuth } from "firebase/auth";
import { FIRESTORE_DB } from "../../../../FirebaseConfig";

function FeedItem(props) {
  const { userName, text, userId, id, setTweets } = props;
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

        async function fetchTweets() {
          try {
            const tweetsCollectionRef = collection(FIRESTORE_DB, "tweets");
            const querySnapshot = await getDocs(tweetsCollectionRef);
            const tweetsData = [];
            querySnapshot.forEach((doc) => {
              tweetsData.push({ id: doc.id, ...doc.data() });
            });

            setTweets(tweetsData);
          } catch (error) {
            console.error("Error fetching tweets:", error);
          }
        }
        fetchTweets();

        console.log('Tweet deleted successfully!');
      } catch (error) {
        console.error('Error deleting tweet:', error);
      }
    } else {
      console.log('You are not authorized to delete this tweet.');
    }
  };

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
    backgroundColor: '#E9E9E9',
    padding: 15,
  },
  pressedItem: {
    opacity: 0.5,
  },
  Text: {
    fontFamily: "poppins",
    color: 'black',
    padding: 8,
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
});
