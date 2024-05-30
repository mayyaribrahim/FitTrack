import { collection, query, where, getDocs } from "firebase/firestore";
import { FIRESTORE_DB } from "../../../../../FirebaseConfig"; 
import { useLayoutEffect, useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import ExercisesList from "../../../../components/exercises/ExercisesList";

function ExercisesScreen({ route, navigation }) {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    fetchExercises(route.params.exerciseCategoryId);
  }, [route.params.exerciseCategoryId]);

  const fetchExercises = async (categoryId) => {
    try {
      const exercisesCollectionRef = collection(FIRESTORE_DB, "Exercises");
      const q = query(exercisesCollectionRef, where("categoryIds", "array-contains", categoryId));
      const querySnapshot = await getDocs(q);
      const exercisesData = [];
      querySnapshot.forEach((doc) => {
        exercisesData.push({ id: doc.id, ...doc.data() });
      });

      setExercises(exercisesData);
    } catch (error) {
      console.error("Error fetching exercises:", error);
    }
  };

  return <ExercisesList items={exercises} />;
}

export default ExercisesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
});
