import { collection, getDocs } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, SafeAreaView } from "react-native";
import TabScreenTitle from "../../../components/TabScreenTitle";
import { FIRESTORE_DB } from "../../../../FirebaseConfig";

import TrackItem from "./TrackItem";
import TrackInput from "./TrackInput";

function TrackScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      const uid = user.uid;
      const progressCollectionRef = collection(FIRESTORE_DB, `users/${uid}/progress`);

      getDocs(progressCollectionRef)
        .then((querySnapshot) => {
          const loadedTweets = [];
          querySnapshot.forEach((doc) => {
            loadedTweets.push({ id: doc.id, ...doc.data() });
          });
          setTweets(loadedTweets);
        })
        .catch((error) => {
          console.error('Error fetching documents: ', error);
        });
    }
  }, []);

  function startAddTweetHandler() {
    setModalVisible(true);
  }

  function endAddTweetHandler() {
    setModalVisible(false);
  }

  function addTweetHandler(newTweet) {
    setTweets((currentTweets) => [...currentTweets, newTweet]);
    endAddTweetHandler();
  }

  return (
    <SafeAreaView style={styles.container}>
      <TabScreenTitle title="Tracking" />
      <View style={styles.titleContainer}></View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={startAddTweetHandler}>
          <Text style={styles.plus}>Add</Text>
        </TouchableOpacity>
      </View>
      <TrackInput visible={modalVisible} onAddTweet={addTweetHandler} onCancel={endAddTweetHandler} />
      <View style={styles.tweetsContainer}>
        <FlatList
          style={styles.tweets}
          data={tweets}
          renderItem={(itemData) => (
            <TrackItem
              id={itemData.item.id}
              name={itemData.item.name}
              reps={itemData.item.reps}
              weight={itemData.item.weight}
              setTweets={setTweets}  // Pass the setTweets function
            />
          )}
          keyExtractor={(item, index) => item.name + '_' + item.reps + '_' + item.weight}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          alwaysBounceVertical={false}
        />
      </View>
    </SafeAreaView>
  );
}

export default TrackScreen;

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
    width: 60,
    height: 40,
    borderRadius: 100,
    backgroundColor: "#272D34",
    alignItems: "center",
    justifyContent: "center",
  },
  plus: {
    color: "white",
    fontSize: 15,
  },
  tweetsContainer: {
    marginTop: 15,
  },
  tweets: {
    marginBottom: 120,
  },
});
