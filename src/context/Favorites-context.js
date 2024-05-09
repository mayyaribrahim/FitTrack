import { createContext, useState, useEffect } from "react";
import { doc, getDoc, setDoc, arrayUnion, arrayRemove } from "firebase/firestore";
import { FIRESTORE_DB } from "../../FirebaseConfig";
import { getAuth } from "firebase/auth";


export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function FavoritesContextProvider({ children }) {
  const [favoriteMealsIds, setFavoriteMealsIds] = useState([]);

  // Fetch user's favorite meals from Firestore on component mount
  useEffect(() => {
    fetchFavoriteMeals();
  }, []);

  async function fetchFavoriteMeals() {
    try {
      const auth = getAuth();
      const user = auth.currentUser;
      if (user) {
        const uid = user.uid;
        const userFavoritesRef = doc(FIRESTORE_DB, "users", uid, "favoriteMeals");
        console.log("User Favorites Document Reference:", userFavoritesRef.path);

        const userFavoritesSnapshot = await getDoc(userFavoritesRef);
        if (userFavoritesSnapshot.exists()) {
          setFavoriteMealsIds(userFavoritesSnapshot.data().ids || []);
        }
      }
    } catch (error) {
      console.error("Error fetching favorite meals:", error);
    }
  }
  
  async function addFavorite(id) {
    try {
      const auth = getAuth();
      const user = auth.currentUser;
      const uid = user.uid;
      // Corrected document reference construction
      const userFavoritesRef = doc(FIRESTORE_DB, "users", uid, "favoriteMeals", uid);
      const userFavoritesSnapshot = await getDoc(userFavoritesRef);
      const existingIds = userFavoritesSnapshot.exists() ? userFavoritesSnapshot.data().ids || [] : [];
      const updatedIds = [...existingIds, id];
      await setDoc(userFavoritesRef, { ids: updatedIds });
      setFavoriteMealsIds(updatedIds);
    } catch (error) {
      console.error("Error adding favorite meal:", error);
    }
  }
  
  
  async function removeFavorite(id) {
    try {
      const auth = getAuth();
      const user = auth.currentUser;
      const uid = user.uid;

       const userFavoritesRef = doc(FIRESTORE_DB, "users", uid, "favoriteMeals", uid);
      const userFavoritesSnapshot = await getDoc(userFavoritesRef);
      const existingIds = userFavoritesSnapshot.exists() ? userFavoritesSnapshot.data().ids || [] : [];
      const updatedIds = existingIds.filter(itemId => itemId !== id);
      await setDoc(userFavoritesRef, { ids: updatedIds });
      setFavoriteMealsIds(updatedIds);
    } catch (error) {
      console.error("Error removing favorite meal:", error);
    }
  }

  const value = {
    ids: favoriteMealsIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
}

export default FavoritesContextProvider;