import { doc, setDoc, deleteDoc, getDocs, collection, getDoc } from "firebase/firestore";
import { FIRESTORE_DB } from "../../FirebaseConfig";
import { getAuth } from "firebase/auth";

export const addToFavorites = async (exerciseId, exerciseData) => {
  try {
    const auth = getAuth();
    const user = auth.currentUser;
    if (!user) throw new Error("User not authenticated");

    const favoriteExerciseRef = doc(FIRESTORE_DB, 'users', user.uid, 'favoriteExercises', exerciseId);
    await setDoc(favoriteExerciseRef, { exerciseId, ...exerciseData });
    console.log('Exercise added to favorites successfully');
  } catch (error) {
    console.error('Error adding exercise to favorites:', error);
  }
};

export const removeFromFavorites = async (exerciseId) => {
  try {
    const auth = getAuth();
    const user = auth.currentUser;
    if (!user) throw new Error("User not authenticated");

    const favoriteExerciseRef = doc(FIRESTORE_DB, 'users', user.uid, 'favoriteExercises', exerciseId);
    await deleteDoc(favoriteExerciseRef);
    console.log('Exercise removed from favorites successfully');
  } catch (error) {
    console.error('Error removing exercise from favorites:', error);
  }
};

export const fetchFavoriteExercises = async () => {
  try {
    const auth = getAuth();
    const user = auth.currentUser;
    if (!user) throw new Error("User not authenticated");

    const favoriteExercisesRef = collection(FIRESTORE_DB, 'users', user.uid, 'favoriteExercises');
    const querySnapshot = await getDocs(favoriteExercisesRef);
    const favoriteExercises = [];
    querySnapshot.forEach((docSnap) => {
      favoriteExercises.push({ id: docSnap.id, ...docSnap.data() });
    });
    return favoriteExercises;
  } catch (error) {
    console.error('Error fetching favorite exercises:', error);
    return [];
  }
};
