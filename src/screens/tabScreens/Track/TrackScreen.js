import React, { useState, useEffect } from 'react';
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, SafeAreaView, ActivityIndicator } from "react-native";
import TabScreenTitle from "../../../components/TabScreenTitle";
import { FIRESTORE_DB } from "../../../../FirebaseConfig";
import TrackItem from "./TrackItem";
import TrackInput from "./TrackInput";
import LoadingOverlay from '../../../components/LoadingOverlay';

function TrackScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [progress, setProgress] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      const uid = user.uid;
      const progressCollectionRef = collection(FIRESTORE_DB, `users/${uid}/progress`);
      const q = query(progressCollectionRef, orderBy("createdAt", "desc")); // Order by createdAt in descending order

      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const progressData = [];
        querySnapshot.forEach((doc) => {
          progressData.push({ id: doc.id, ...doc.data() });
        });
        setProgress(progressData);
        setLoading(false); // Set loading to false after data is fetched
      });

      return () => unsubscribe();
    }
  }, []);

  function startAddExerciseHandler() {
    setModalVisible(true);
  }

  function endAddExerciseHandler() {
    setModalVisible(false);
  }

  function addExerciseHandler(newExercise) {
    // No need to update state manually, onSnapshot will handle it
    endAddExerciseHandler();
  }

  return (
    <SafeAreaView style={styles.container}>
      <TabScreenTitle title="Tracking" />
      <View style={styles.titleContainer}></View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={startAddExerciseHandler}>
          <Text style={styles.plus}>Add</Text>
        </TouchableOpacity>
      </View>
      <TrackInput visible={modalVisible} onAddExercise={addExerciseHandler} onCancel={endAddExerciseHandler} />
      <View style={styles.progressContainer}>
        {loading ? (
          <LoadingOverlay size="large" color="#272D34" />
        ) : progress.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>Start documenting your exercises!</Text>
          </View>
        ) : (
          <FlatList
            style={styles.progress}
            data={progress}
            renderItem={({ item }) => (
              <TrackItem
                id={item.id}
                name={item.name}
                reps={item.reps}
                weight={item.weight}
              />
            )}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            alwaysBounceVertical={false}
          />
        )}
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
    fontFamily: 'poppins',
  },
  progressContainer: {
    marginTop: 15,
    flex: 1,
  },
  progress: {
    marginBottom: 10,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    fontFamily: 'poppins',
    color: '#272D34',
  },
});
