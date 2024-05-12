import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { collection, query, where, getDocs, snapshotEqual } from "firebase/firestore";
import { FIRESTORE_DB } from "../../../../../FirebaseConfig"; 
import MealsList from "../../../../components/meals/MealsList";

function MealsScreen({ route, navigation }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetchMeals(route.params.mealCategoryId);
  }, [route.params.mealCategoryId]);

  const fetchMeals = async (categoryId) => {
    try {
      const mealsCollectionRef = collection(FIRESTORE_DB, "Meals");
      const q = query(mealsCollectionRef, where("categoryIds", "array-contains", categoryId));
      const querySnapshot = await getDocs(q);
      const mealsData = [];
      querySnapshot.forEach((doc) => {
        mealsData.push({ id: doc.id, ...doc.data() });
        
      });

      setMeals(mealsData);
      
    } catch (error) {
      console.error("Error fetching meals:", error);
    }
  };console.log(meals[0])

  return (
    <View style={styles.container}>
      <MealsList items={meals} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MealsScreen;
