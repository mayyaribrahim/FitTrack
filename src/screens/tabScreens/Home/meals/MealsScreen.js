import { useLayoutEffect } from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import { MEALCATEGORIES, MEALS } from "../../../../data/Data";
import MealsList from "../../../../components/meals/mealsList";


function MealsScreen({ route, navigation }) {
  
  const catId = route.params.mealCategoryId;

  const displayMeal = MEALS.filter((mealItem => { //malek
    return mealItem.categoryIds[0] === catId
  }));
  // const displayMeal = MEALS.filter((mealItem => { 
  //   return mealItem.categoryIds.indexOf(catId) >= 0;
  // }));
  useLayoutEffect(()  => { 
    const mealCategoryTitle = MEALCATEGORIES.find((mealCategory) => mealCategory.id === catId).title;

    navigation.setOptions({
      title: mealCategoryTitle
    }); 
  }, [catId, navigation])

  // function RenderMealItem(itemData) { //malek
  //   const item = itemData.item;

  //   const mealItemProps = {
  //     id: item.id,
  //     categoryIds: item.categoryIds,
  //     title: item.title,
  //     affordability: item.affordability,
  //     complexity: item.complexity,
  //     imageUrl: item.imageUrl,
  //     duration: item.duration,
  //     ingredients: item.ingredients,
  //     steps: item.steps,
  //     calories: item.calories,
  //     protein: item.protein,
  //     carb: item.carb,
  //     fat: item.fat,
  //   }

  //   return  (
  //     <MealsList items={displayMeal}/>
  //   )
  // }


  return (
    <View style={styles.container}>

      <FlatList 
      data={displayMeal}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <MealsList items={[item]} />}
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