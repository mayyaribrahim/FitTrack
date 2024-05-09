// favoritesService.js
import { FIRESTORE_DB } from "../../FirebaseConfig";

export const addToFavorites = async (userId, meal) => {
  try {
    // Construct document reference
    const docRef = FIRESTORE_DB.collection('users').doc(userId).collection('favoriteMeals').doc(meal.id);
    // Add meal to favorites collection
    await docRef.set(meal);
  } catch (error) {
    console.error('Error adding to favorites:', error);
  }
};

export const removeFromFavorites = async (userId, mealId) => {
  try {
    // Construct document reference
    const docRef = FIRESTORE_DB.collection('users').doc(userId).collection('favoriteMeals').doc(mealId);
    
    // Remove meal from favorites collection
    await docRef.delete();
  } catch (error) {
    console.error('Error removing from favorites:', error);
  }
};

export const fetchFavoriteMeals = async (userId) => {
  try {
    // Construct collection reference
    const collectionRef = FIRESTORE_DB.collection('users').doc(userId).collection('favoriteMeals');
    
    // Fetch favorite meals from Firestore
    const querySnapshot = await collectionRef.get();
    const meals = querySnapshot.docs.map(doc => doc.data());
    return meals;
  } catch (error) {
    console.error('Error fetching favorite meals:', error);
    return [];
  }
};
