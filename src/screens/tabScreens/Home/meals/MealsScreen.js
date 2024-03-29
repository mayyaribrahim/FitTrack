import { useLayoutEffect } from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import { MEALCATEGORIES, MEALS } from "../../../../data/Data";
import MealsList from "../../../../components/meals/mealsList";

function MealsScreen({ route, navigation }) {
  
  const catId = route.params.mealCategoryId;

  const displayMeal = MEALS.filter((mealItem => {
    return mealItem.categoryIds[0] === catId
  }));
  //take the catId you got when pressing on a specific category and compare it to mealItem.categoryIds if they are = print the meals
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
  


  // return (
  //   <View style={styles.container}>

  //     <FlatList 
  //     data={displayMeal}
  //     keyExtractor={(item) => item.id}
  //     renderItem={({ item }) => (
  //       <MealItem
  //         id={item.id}
  //         title={item.title}
  //         calories={item.calories}
  //         protein={item.protein}
  //         carb={item.carb}
  //         fat={item.fat}
  //         categoryIds={item.categoryIds}
  //       />
  //     )}
  //     showsVerticalScrollIndicator={false}
  //     />

  //   </View>
  // )

}

export default MealsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
});