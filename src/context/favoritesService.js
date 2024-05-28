import { FIRESTORE_DB } from "../../FirebaseConfig";
import { doc, setDoc, deleteDoc, getDocs, collection, getDoc } from "firebase/firestore";

export const addToFavorites = async (userId, mealId, categoryIds) => {
  try {
    // Reference to the favoriteMeals subcollection in Firestore
    const favoriteMealRef = doc(FIRESTORE_DB, 'users', userId, 'favoriteMeals', mealId);

    // Add the meal ID to the favoriteMeals subcollection
    await setDoc(favoriteMealRef, { mealId, categoryIds });

    console.log('Meal added to favorites successfully');
  } catch (error) {
    console.error('Error adding meal to favorites:', error);
  }
};

// Function to remove a meal from favorites
export const removeFromFavorites = async (userId, mealId) => {
  try {
    // Reference to the favoriteMeals subcollection in Firestore
    const favoriteMealRef = doc(FIRESTORE_DB, 'users', userId, 'favoriteMeals', mealId);

    // Delete the meal ID from the favoriteMeals subcollection
    await deleteDoc(favoriteMealRef);

    console.log('Meal removed from favorites successfully');
  } catch (error) {
    console.error('Error removing meal from favorites:', error);
  }
};

export const fetchFavoriteMeals = async (userId, categoryIds) => {
  try {
    // Reference to the favoriteMeals subcollection in Firestore
    const favoriteMealsRef = collection(FIRESTORE_DB, 'users', userId, 'favoriteMeals');
    const querySnapshot = await getDocs(favoriteMealsRef);
    const favoriteMeals = [];

    // Loop through each favorite meal document and fetch its details
    for (const docSnap of querySnapshot.docs) {
      const mealId = docSnap.id;
      const mealRef = doc(FIRESTORE_DB, 'Meals', mealId);
      const mealDoc = await getDoc(mealRef);

      // Check if the meal exists and add it to the list
      if (mealDoc.exists()) {
        const mealData = mealDoc.data();
        if (categoryIds && categoryIds.length > 0) { // If categoryIds is provided, filter by category
          if (mealData.categoryIds && mealData.categoryIds.some(id => categoryIds.includes(id))) {
            favoriteMeals.push({ id: mealId, ...mealData });
          }
        } else { // If no categoryIds provided, fetch all favorite meals
          favoriteMeals.push({ id: mealId, ...mealData });
        }
      } else {
        console.warn(`Meal with ID ${mealId} not found`);
      }
    }

    return favoriteMeals;
  } catch (error) {
    console.error('Error fetching favorite meals:', error);
    return [];
  }
};