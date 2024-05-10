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
function MlDetailScreen({route, navigation}) {
  const mealDocId = route.params.mealDocId;
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  
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
  

  const toggleFavorite = async () => {
    if (isFavorite) {
      // Remove from favorites
      setIsFavorite(false);
      // Implement removeFromFavorites if needed
    } else {
      // Add to favorites
      setIsFavorite(true);
      await addToFavorites(uid, mealDocId, selectedMeal);
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

      <Image style={styles.image} source={require("../../../../assets/images/default.jpg")} />

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