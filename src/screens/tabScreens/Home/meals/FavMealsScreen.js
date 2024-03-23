import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import MealItem from '../../../../components/meals/MealItem';
function FavMealsScreen({ route }) {
  const [favoriteMeals, setFavoriteMeals] = useState([]);

  useEffect(() => {
    if (route.params && route.params.meal) {
      // Add selected meal to favorites
      setFavoriteMeals(prevMeals => [...prevMeals, route.params.meal]);
    }
  }, [route.params]);

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
        data={favoriteMeals}
        renderItem={RenderExerciseItem}
        keyExtractor={(item) => item.id}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
});

export default FavMealsScreen;
