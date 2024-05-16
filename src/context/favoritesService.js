import { FIRESTORE_DB } from "../../FirebaseConfig";
import { doc, setDoc, deleteDoc, getDocs, collection,getDoc, query, where } from "firebase/firestore";



export const addToFavorites = async (userId, mealId) => {
  try {
    // Reference to the user document in Firestore
    const userRef = doc(FIRESTORE_DB, 'users', userId);

    // Add the meal ID to the favoriteMeals subcollection
    await setDoc(doc(userRef, 'favoriteMeals', mealId), { mealId });

    console.log('Meal added to favorites successfully');
  } catch (error) {
    console.error('Error adding meal to favorites:', error);
  }
};

// Function to remove a meal from favorites
export const removeFromFavorites = async (userId, mealId) => {
  try {
    // Reference to the user document in Firestore
    const userRef = doc(FIRESTORE_DB, 'users', userId);

    // Delete the meal ID from the favoriteMeals subcollection
    await deleteDoc(doc(userRef, 'favoriteMeals', mealId));

    console.log('Meal removed from favorites successfully');
  } catch (error) {
    console.error('Error removing meal from favorites:', error);
  }
};

export const fetchFavoriteMeals = async (userId) => {
  try {
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
        favoriteMeals.push({ id: mealId, ...mealDoc.data() });
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
