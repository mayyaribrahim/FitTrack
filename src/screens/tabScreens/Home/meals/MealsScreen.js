import { useLayoutEffect } from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import { MEALCATEGORIES, MEALS } from "../../../../data/Data";
import MealsList from "../../../../components/meals/MealsList";

function MealsScreen({ route, navigation }) {
  
  const catId = route.params.mealCategoryId;

  const displayMeal = MEALS.filter((mealItem => {
    return mealItem.categoryIds[0] === catId;
  })); //take the catId you got when pressing on a specific category and compare it to mealItem.categoryIds if they are = print the meals
  //this function prints meals on their own categories
 
  
  useLayoutEffect(()  => { 
    const mealCategoryTitle = MEALCATEGORIES.find((mealCategory) => mealCategory.id === catId).title;

    navigation.setOptions({
      title: mealCategoryTitle
    }); 
  }, [catId, navigation])


    return  (
      <MealsList items={displayMeal} />
    )
  
}

export default MealsScreen;
