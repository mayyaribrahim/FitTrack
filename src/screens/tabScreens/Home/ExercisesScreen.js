import { useLayoutEffect } from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import { EXERCISESCATEGORIES, EXERCISES } from "../../../data/ExercisesData";

function ExercisesScreen({ route, navigation }) {

  const catId = route.params.exerciseCategoryId;

  const displayExercises = EXERCISES.filter((exerciseItem => {
    return exerciseItem.categoryIds.indexOf(catId) >= 0;
  }));

  useLayoutEffect(()  => {
    const exerciseCategoryTitle = EXERCISESCATEGORIES.find((exerciseCategory) => exerciseCategory.id === catId).title;

    navigation.setOptions({
      title: exerciseCategoryTitle
    }); 
  }, [catId, navigation])

  function RenderExerciseItem(itemData) {
    const item = itemData.item;

    return  (
      <Text>{item.name}</Text>
    )
  }


  return (
    <View style={styles.container}>

      <FlatList 
      data={displayExercises}
      keyExtractor={(item) => item.id}
      renderItem={RenderExerciseItem}
      />

    </View>
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