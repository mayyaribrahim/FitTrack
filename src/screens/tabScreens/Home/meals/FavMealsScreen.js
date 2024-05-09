import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FavoritesContext } from '../../../../context/Favorites-context';
import MealsList from '../../../../components/meals/MealsList';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { FIRESTORE_DB } from '../../../../../FirebaseConfig'; // Assuming you have configured your Firebase app
import { fetchFavoriteMeals } from '../../../../context/favoritesService';
function FavMealsScreen({ route }) {
  const favoriteMealsCtx = useContext(FavoritesContext);
  const [favoriteMeals, setFavoriteMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      const data = await fetchFavoriteMeals();
      setFavoriteMeals(data);
    };
    fetchMeals();
  }, []);


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
