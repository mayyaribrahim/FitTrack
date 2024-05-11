import { collection, getDocs, doc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Pressable, TouchableOpacity, SafeAreaView } from "react-native";
import TabScreenTitle from "../../../components/TabScreenTitle";
import { FIRESTORE_DB } from "../../../../FirebaseConfig";

import FeedItem from "./FeedItem";
import FeedInput from "./FeedInput";

// export
function FeedScreen() {
  const [modalVisible, setModalVisible]  = useState(false);
  const [courseTweets, setCourseTweets] = useState([]);
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    async function fetchTweets() {
      try {
        const tweetsCollectionRef = collection(FIRESTORE_DB, "tweets");
        
      const querySnapshot = await getDocs(tweetsCollectionRef);
      const tweetsData = [];
      querySnapshot.forEach((doc) => {
        tweetsData.push({ id: doc.id, ...doc.data() });
      });
    
      setTweets(tweetsData)
      } catch (error) {
        console.error("Error fetching tweets:", error);
      }
    }
    fetchTweets();
  }, []);
  console.log("tweets",tweets);
  

  function startAddTweetHandler() {
    setModalVisible(true);
  }

  function endAddTweetHandler() {
    setModalVisible(false);
  }

  function addTweetHandler(enteredTweetText) {
    
    endAddTweetHandler();
  };

  function deleteGoalHandler(id) {
    // setCourseTweets(currentCourseTweets => {
    //   return currentCourseTweets.filter((goal) => goal.id !== id);
    // });
  }


  return (
    
    <SafeAreaView style={styles.container}>

     <TabScreenTitle title={"Explore"} />

      <View style={styles.titleContainer}>
        
      </View>

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
            console.log("itemData",itemData);
            return (
              <FeedItem 
                 id={itemData.item.id} 
                 userId={itemData.item.userId} 
                 userName={itemData.item.userName} 
                 text={itemData.item.text} 
                 setTweets={setTweets}
                onDeleteItem={deleteGoalHandler} //inside the text is what should be rendered
              />
            ); 
          }}

          keyExtractor={(item, index) => item.userId + '_' + item.text}

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


  buttonContainer:{
    position: "absolute",
    right: 20,
    top: 50
  },

  button:{
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

  Text:{
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