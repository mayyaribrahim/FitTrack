import React, { useState, useEffect, useLayoutEffect } from "react";
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, ActivityIndicator } from "react-native";
import { doc, getDoc } from "firebase/firestore";
import { getStorage, getDownloadURL, ref } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { AntDesign } from "@expo/vector-icons";
import { FIRESTORE_DB } from "../../../../../FirebaseConfig";
import { fetchFavoriteMeals, addToFavorites, removeFromFavorites } from "../../../../context/favoritesService";
import MealDetail from "../../../../components/meals/MealDetail";
import MSubtitle from "../../../../components/meals/MSubtitle";
import MList from "../../../../components/meals/MList";

function MlDetailScreen({ route, navigation }) {
  const mealDocId = route.params.mealDocId;
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(true);

  const categoryIds = route.params.categoryIds;

  useEffect(() => {
    const fetchMeal = async () => {
      try {
        const mealDocRef = doc(FIRESTORE_DB, "Meals", mealDocId);
        const mealDocSnapshot = await getDoc(mealDocRef);
        setSelectedMeal({ id: mealDocSnapshot.id, ...mealDocSnapshot.data() });
      } catch (error) {
        console.error("Error fetching meal:", error);
      }
    };

    fetchMeal();
  }, [mealDocId]);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        if (selectedMeal && selectedMeal.imageUrl) {
          const storage = getStorage();
          const imageRef = ref(storage, selectedMeal.imageUrl);
          const url = await getDownloadURL(imageRef);
          setImageUrl(url);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching image:', error);
        setLoading(false);
      }
    };

    fetchImage();
  }, [selectedMeal]);

  const auth = getAuth();
  const user = auth.currentUser;
  const uid = user.uid;

  useEffect(() => {
    const checkFavoriteStatus = async () => {
      try {
        if (!user) return;
        const favoriteMeals = await fetchFavoriteMeals(uid);
        setIsFavorite(favoriteMeals.some(meal => meal.id === mealDocId));
      } catch (error) {
        console.error('Error checking favorite status:', error);
      }
    };
    checkFavoriteStatus();
  }, [mealDocId]);

  const toggleFavorite = async () => {
    if (isFavorite) {
      await removeFromFavorites(uid, mealDocId);
      setIsFavorite(false);
    } else {
      await addToFavorites(uid, mealDocId, categoryIds);
      setIsFavorite(true);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={toggleFavorite}>
          <AntDesign name="star" color={isFavorite ? "#ffb700" : "black"} size={24} />
        </TouchableOpacity>
      ),
    });
  }, [navigation, toggleFavorite]);

  return (
    <ScrollView style={styles.rootContainer} showsVerticalScrollIndicator={false}>
      <View style={styles.imageContainer}>
        {loading ? <ActivityIndicator size="small" color="#000000" style={styles.loadingOverlay} /> : <Image style={styles.image} source={{ uri: imageUrl }} />}
      </View>
      <Text style={styles.title}>{selectedMeal?.title || "Loading..."}</Text>
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <MSubtitle>Ingredients</MSubtitle>
          <MList data={selectedMeal?.ingredients || []} />
          <MSubtitle>Steps</MSubtitle>
          <MList data={selectedMeal?.steps || []} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: '#FFFFFF',
    marginBottom: 35,
  },
  imageContainer: {
    width: '100%',
    height: 350,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  loadingOverlay: {
    position: 'absolute',
    zIndex: 1,
  },
  title: {
    fontFamily: 'poppins-medium',
    fontSize: 22,
    margin: 8,
    textAlign: 'center',
    color: '#272D34',
  },
  listOuterContainer: {
    alignItems: 'center',
  },
  listContainer: {
    width: '80%',
  },
});

export default MlDetailScreen;
