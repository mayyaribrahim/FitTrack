import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ExercisesList from '../../../../components/exercises/ExercisesList';
import { getAuth } from 'firebase/auth';
import { fetchFavoriteExercises } from '../../../../context/ExerciseFavoriteService';
import LoadingOverlay from '../../../../components/LoadingOverlay';
import { useIsFocused } from '@react-navigation/native';

function FavExercisesScreen({ route }) {
  const [favoriteExercises, setFavoriteExercises] = useState([]);
  const [loading, setLoading] = useState(true);
  const isFocused = useIsFocused();
  const auth = getAuth();
  const user = auth.currentUser;
  const userId = user.uid;
  const categoryId = route.params.exerciseCategoryId;

  const fetchFavorites = async (categoryId) => {
    try {
      const favorites = await fetchFavoriteExercises(userId);
      const filteredFavorites = favorites.filter(exercise => 
        exercise.categoryIds && exercise.categoryIds.includes(categoryId)
      );
      setFavoriteExercises(filteredFavorites);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching favorite exercises:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isFocused && route.params?.exerciseRemoved) {
      fetchFavorites(categoryId);
    }
  }, [isFocused, route.params?.exerciseRemoved]);

  useEffect(() => {
    fetchFavorites(categoryId);
  }, [categoryId]);

  if (loading) {
    return <LoadingOverlay message="Loading..." />;
  }

  if (favoriteExercises.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite exercises yet</Text>
      </View>
    );
  }

  return <ExercisesList items={favoriteExercises} />;
}

export default FavExercisesScreen;

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
