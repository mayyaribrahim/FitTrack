import { useLayoutEffect } from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import { MEALCATEGORIES, MEALS } from "../../../data/Data";
import MealItem from "../../../components/meals/MealItem";

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

    const mealItemProps = {
      id: item.id,
      categoryIds: item.categoryIds,
      title: item.title,
      affordability: item.affordability,
      complexity: item.complexity,
      imageUrl: item.imageUrl,
      duration: item.duration,
      ingredients: item.ingredients,
      steps: item.steps,
      calories: item.calories,
      protein: item.protein,
      carb: item.carb,
      fat: item.fat,
    }

    return  (
      <MealItem {...mealItemProps} />
    )
  }


  return (
    <View style={styles.container}>

      <FlatList 
      data={displayMeal}
      keyExtractor={(item) => item.id}
      renderItem={RenderExerciseItem}
      showsVerticalScrollIndicator={false}
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