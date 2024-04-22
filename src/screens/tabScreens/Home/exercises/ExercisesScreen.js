import { useLayoutEffect } from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import { EXERCISESCATEGORIES, EXERCISES } from "../../../../data/Data";
import ExerciseItem from "../../../../components/exercises/ExerciseItem";
import ExercisesList from "../../../../components/exercises/ExercisesList";

function ExercisesScreen({ route, navigation }) {

  const catId = route.params.exerciseCategoryId;

  const displayExercises = EXERCISES.filter((exerciseItem => {
    return exerciseItem.categoryIds[0] === catId;
  }));

  useLayoutEffect(()  => {
    const exerciseCategoryTitle = EXERCISESCATEGORIES.find((exerciseCategory) => exerciseCategory.id === catId).title;

    navigation.setOptions({
      title: exerciseCategoryTitle
    }); 
  }, [catId, navigation])
  

  return  (
    <ExercisesList items={displayExercises} />
  )


}

export default ExercisesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
});