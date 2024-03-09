import { useLayoutEffect } from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import { MEALCATEGORIES, MEALS } from "../../../data/ExercisesData";

function MealsScreen({ route, navigation }) {

  const catId = route.params.mealCategoryId;

  const displayMeal = MEALS.filter((mealItem => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  }));

  useLayoutEffect(()  => {
    const mealCategoryTitle = MEALCATEGORIES.find((mealCategory) => mealCategory.id === catId).title;

    navigation.setOptions({
      title: mealCategoryTitle
    }); 
  }, [catId, navigation])

  function RenderExerciseItem(itemData) {
    const item = itemData.item;

    return  (
      <Text>{item.title}</Text>
    )
  }


  return (
    <View style={styles.container}>

      <FlatList 
      data={displayMeal}
      keyExtractor={(item) => item.id}
      renderItem={RenderExerciseItem}
      />

    </View>
  )

}

export default MealsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
});