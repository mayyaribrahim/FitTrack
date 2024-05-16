import { doc, getDoc } from "firebase/firestore";
import { FIRESTORE_DB } from "../../../../../FirebaseConfig";
import { useLayoutEffect, useContext, useState, useEffect } from "react";
import { Text, Image, View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import MealDetail from "../../../../components/meals/MealDetail";
import { MEALS } from "../../../../data/Data";
import MSubtitle from '../../../../components/meals/MSubtitle';
import MList from '../../../../components/meals/MList';
import { AntDesign } from '@expo/vector-icons';
import { FavoritesContext } from "../../../../context/Favorites-context";
import { addToFavorites, removeFromFavorites } from "../../../../context/favoritesService";
import { getStorage, getDownloadURL } from "firebase/storage";
import { ref } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { fetchFavoriteMeals } from "../../../../context/favoritesService";
function MlDetailScreen({route, navigation}) {
  const mealDocId = route.params.mealDocId;
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(true);

  const categoryIds = route.params.categoryIds;
  console.log(categoryIds);

  useEffect(() => {
    const fetchMeal = async () => {
      try {
      const mealDocRef = doc(FIRESTORE_DB, "Meals", mealDocId);
      const mealDocSnapshot = await getDoc(mealDocRef);
      setSelectedMeal({ id: mealDocSnapshot.data.id, ...mealDocSnapshot.data() });

      } catch (error) {
        console.error("Error fetching meal:", error);
      }
    };

    fetchMeal();
  }, [mealDocId]);
  
  console.log(selectedMeal);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        if (selectedMeal && selectedMeal.imageUrl) {
          const storage = getStorage(); // Initialize Firebase Storage
          const imageRef = ref(storage, selectedMeal.imageUrl); // Reference to your image in Firebase Storage
          const url = await getDownloadURL(imageRef); // Get the download URL of the image
          setImageUrl(url); // Set the download URL as the image URL
          setLoading(false); // Set loading state to false
        } else {
          setLoading(false); // If imageUrl is not present, set loading state to false
        }
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };
  
    fetchImage(); // Call the fetchImage function when the component mounts
  }, [selectedMeal]);

  const auth = getAuth();
  const user = auth.currentUser;
  const uid = user.uid;

  useEffect(() => {
    const checkFavoriteStatus = async () => {
      try { 
        if (!user) return;
        const favoriteMeals = await fetchFavoriteMeals(uid);
        setIsFavorite(favoriteMeals.some(meal => meal.id === mealDocId)); // Check if meal is in favorite meals
      } catch (error) {
        console.error('Error checking favorite status:', error);
      }
    };
    checkFavoriteStatus();
  }, [mealDocId]);


  
  const toggleFavorite = async () => {
    if (isFavorite) {
      // Remove from favorites
      await removeFromFavorites(uid, mealDocId);
      setIsFavorite(false);
      navigation.navigate('FavMealsScreen', { categoryIds, mealRemoved: true });
      
    } else {
      // Add to favorites
      await addToFavorites(uid, mealDocId, categoryIds);
      setIsFavorite(true);
    }
  };


  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <TouchableOpacity onPress={toggleFavorite}>
            <AntDesign name='star' color={isFavorite ? '#ffb700': 'black'} size={24}  />
          </TouchableOpacity>
          
        )
      }
    })
  }, [navigation, toggleFavorite]);

  return (
    <ScrollView style={styles.rootContainer}>

      <Image style={styles.image} source={{ uri: imageUrl }} />

      <Text style={styles.title}>{selectedMeal?.title || "no title"}</Text>

     
        <MealDetail 
        meal={selectedMeal ?? {}} 
        textStyle={styles.detailText}
      />

      <View style={styles.listOuterContainer}>

        <View style={styles.listContainer}>
          <MSubtitle>Ingrediants</MSubtitle>
          <MList data={selectedMeal?.ingredients ||[]}/>
          <MSubtitle>Steps</MSubtitle>
          <MList data={selectedMeal?.steps ||[]}/>
        </View>

      </View>  
      

    </ScrollView>
  )
}

export default MlDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: '#FFFFFF', 
    marginBottom: 35,
  },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontFamily: 'poppins-medium',
    fontSize: 22,
    margin: 8,
    textAlign: 'center',
    color: '#272D34',
  }, 
  detailText: {
    color: '#272D34',
    fontFamily: 'poppins',
    fontSize: 14,
    textAlign: 'center',
  },
  listOuterContainer: {
    alignItems: 'center',
  },
  listContainer: {
    width: '80%',
  },
})