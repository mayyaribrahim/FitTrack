import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { FavoritesContext } from '../../../../context/Favorites-context';
import MealsList from '../../../../components/meals/MealsList';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { FIRESTORE_DB } from '../../../../../FirebaseConfig'; 
import { fetchFavoriteMeals, removeFromFavorites } from '../../../../context/favoritesService';
import { getAuth } from 'firebase/auth';
import { useIsFocused } from '@react-navigation/native';

function FavMealsScreen({ route }) {
  const [favoriteMeals, setFavoriteMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const isFocused = useIsFocused();

  const categoryIds = route.params.categoryIds;
  console.log(categoryIds)

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
    }
  };

  useEffect(() => {
    if (isFocused && route.params?.mealRemoved) {
     
      fetchMeals(route.params.categoryIds);
    }
  }, [isFocused, route.params?.mealRemoved]);

  useEffect(() => {
   
    fetchMeals(categoryIds);
  }, [categoryIds]);

  

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }


  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet</Text>
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
  },

  text: {
    fontSize: 18,
    fontFamily: 'poppins',
    color: 'black',
  },

  container: {
    flex: 1,
  },
});
