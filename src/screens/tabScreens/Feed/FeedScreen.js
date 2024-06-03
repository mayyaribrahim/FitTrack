import React, { useState, useEffect } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, SafeAreaView } from "react-native";
import TabScreenTitle from "../../../components/TabScreenTitle";
import { FIRESTORE_DB } from "../../../../FirebaseConfig";

import FeedItem from "./FeedItem";
import FeedInput from "./FeedInput";

function FeedScreen() {
  const [modalVisible, setModalVisible]  = useState(false);
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    fetchTweets();
  }, []);

  function startAddTweetHandler() {
    setModalVisible(true);
  }

  function endAddTweetHandler() {
    setModalVisible(false);
  }

  function addTweetHandler() {
    endAddTweetHandler();
    fetchTweets(); // Fetch tweets after adding a new tweet to update the list
  };

  async function fetchTweets() {
    try {
      const tweetsCollectionRef = collection(FIRESTORE_DB, "tweets");
      const q = query(tweetsCollectionRef, orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(q);
      const tweetsData = [];
      querySnapshot.forEach((doc) => {
        tweetsData.push({ id: doc.id, ...doc.data() });
      });
    
      setTweets(tweetsData);
    } catch (error) {
      console.error("Error fetching tweets:", error);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <TabScreenTitle title={"Explore"} />

      <View style={styles.titleContainer}></View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={startAddTweetHandler}>
          <Text style={styles.plus}>+</Text>
        </TouchableOpacity>
      </View>

      <FeedInput visible={modalVisible} onAddTweet={addTweetHandler} onCancel={endAddTweetHandler} setTweets={setTweets}/>

      <View style={styles.tweetsContainer}>
        <FlatList 
          style={styles.tweets}
          data={tweets}
          renderItem={(itemData) => {
            return (
              <FeedItem 
                id={itemData.item.id} 
                userId={itemData.item.userId} 
                userName={itemData.item.userName} 
                text={itemData.item.text} 
                image={itemData.item.image} // Pass the image prop
                setTweets={setTweets}
                createdAt={itemData.item.createdAt} // Pass the createdAt prop
              />
            ); 
          }}
          keyExtractor={(item, index) => item.id}
          alwaysBounceVertical={false} 
        />
      </View>
    </SafeAreaView>
  )
}

export default FeedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    position: "relative",
  },

  titleContainer: {
    right: 16,
  },

  buttonContainer: {
    position: "absolute",
    right: 20,
    top: 50,
  },

  button: {
    width: 40,
    height: 40,
    borderRadius: 100,
    backgroundColor: "#272D34",
    alignItems: "center",
    justifyContent: "center",
  },

  plus: {
    color: "white",
    fontSize: 25,
  },

  tweetsContainer: {
    marginTop: 15,
  },

  tweets: {
    marginBottom: 120,
  },

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
    opacity: 0.5
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
  },

  userName: {
    fontFamily: "poppins",
    marginLeft: 10,
  },

  deleteButton: {
    flex: 1,
    alignItems: 'flex-end',
  },
})
