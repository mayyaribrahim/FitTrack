import React, {useContext } from 'react';
import { View,Text, StyleSheet } from 'react-native';
import { MEALS } from '../../../../data/Data';
import MealsList from '../../../../components/meals/mealsList';
import { FavoritesContext } from '../../../../context/Favorites-context';

function FavMealsScreen({ route }) { 
  const favoriteMealsCtx = useContext(FavoritesContext);

  const catId = route.params.mealCategoryId;
  const favoriteMeals = MEALS.filter((meal) => {
    return (
      favoriteMealsCtx.ids.includes(meal.id) && 
      meal.categoryIds.includes(catId) 
    );
  });


  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet</Text>
      </View>
    );
  }


  return (

    <MealsList items={favoriteMeals}/>
  );
}

export default FavMealsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
});