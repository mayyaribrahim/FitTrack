import React, {useContext } from 'react';
import { View,Text, StyleSheet } from 'react-native';
import { MEALS, EXERCISES } from '../../../../data/Data';
import ExercisesList from '../../../../components/exercises/ExercisesList';
import { FavoritesContext } from '../../../../context/Favorites-context';

function FavMealsScreen({ route }) { 
  const favoriteExercisesCtx = useContext(FavoritesContext);

  const catId = route.params.exerciseCategoryId;
  const favoriteExercises = EXERCISES.filter((exercise) => {
    return (
      favoriteExercisesCtx.ids.includes(exercise.id) && 
      exercise.categoryIds.includes(catId) 
    );
  });


  if (favoriteExercises.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet</Text>
      </View>
    );
  }


  return (

    <ExercisesList items={favoriteExercises}/>
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
    fontFamily: 'poppins',
    color: 'black',
  },
});