import { useState } from "react";
import { View, Text, StyleSheet, FlatList, Pressable, TouchableOpacity, SafeAreaView } from "react-native";
import TabScreenTitle from "../../../components/TabScreenTitle";

import FeedItem from "./FeedItem";
import FeedInput from "./FeedInput";

function FeedScreen() {
  const [modalVisible, setModalVisible]  = useState(false);
  const [courseTweets, setCourseTweets] = useState([]);

  function startAddTweetHandler() {
    setModalVisible(true);
  }

  function endAddTweetHandler() {
    setModalVisible(false);
  }

  function addTweetHandler(enteredTweetText) {
    setCourseTweets(currentCourseTweets => [
      ...currentCourseTweets, 
      { text: enteredTweetText, id: Math.random().toString() },
    ]);
    endAddTweetHandler();
  };

  function deleteGoalHandler(id) {
    setCourseTweets(currentCourseTweets => {
      return currentCourseTweets.filter((goal) => goal.id !== id);
    });
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

      <FeedInput visible={modalVisible} onAddTweet={addTweetHandler} onCancel={endAddTweetHandler}/>

      <View style={styles.tweetsContainer}>

        <FlatList 
          style={styles.tweets}
          data={courseTweets}
          renderItem={(itemData) => {
            return (
              <FeedItem 
                text={itemData.item.text} 
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandler} //inside the text is what should be rendered
              />
            ); 
          }}

          keyExtractor={(item, index) => { //gives a key for each item in the object
            return item.id;
          }}

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
  }
})