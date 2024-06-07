import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
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
    if (isFocused) {
      fetchFavorites(categoryId);
    }
  }, [isFocused, categoryId]);

  

  if (favoriteExercises.length === 0) {
    return (
      <View style={styles.rootContainer}>
         {loading ? <ActivityIndicator size="small" color="#ffffff" style={styles.loadingOverlay} /> : <Text style={styles.text}>You have no favorite exercises yet</Text>}
        
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
    backgroundColor: '#272D34',
  },
  text: {
    fontSize: 18,
    fontFamily: 'poppins',
    color: '#ffffff',
  },
});
