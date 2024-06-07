import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { getAuth } from 'firebase/auth';
import { useIsFocused } from '@react-navigation/native';
import MealsList from '../../../../components/meals/MealsList';
import { fetchFavoriteMeals } from '../../../../context/favoritesService';
import LoadingOverlay from '../../../../components/LoadingOverlay';

function FavMealsScreen({ route }) {
  const [favoriteMeals, setFavoriteMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const isFocused = useIsFocused();

  const categoryIds = route.params?.categoryIds || [];

  const fetchMeals = async (categoryIds) => {
    try {
      const auth = getAuth();
      const user = auth.currentUser;
      if (user) {
        const userId = user.uid;
        const data = await fetchFavoriteMeals(userId, categoryIds);
        setFavoriteMeals(data);
        setLoading(false);
      }
    } catch (error) {
      console.error('Error fetching favorite meals:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isFocused) {
      fetchMeals(categoryIds);
    }
  }, [isFocused, categoryIds]);

  

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        {loading ? <ActivityIndicator size="small" color="#ffffff" style={styles.loadingOverlay} /> : <Text style={styles.text}>You have no favorite meals yet</Text>}
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MealsList items={favoriteMeals} />
    </View>
  );
}

export default FavMealsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#272D34'
  },
  text: {
    fontSize: 18,
    fontFamily: 'poppins',
    color: '#ffffff',
  },
  container: {
    flex: 1,
  },

  loadingOverlay: {
    position: 'absolute',
    zIndex: 1,
  },
});
