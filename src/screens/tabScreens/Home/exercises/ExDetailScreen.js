import { doc, getDoc } from "firebase/firestore";
import { FIRESTORE_DB } from "../../../../../FirebaseConfig";
import { useLayoutEffect, useState, useEffect } from "react";
import { Text, Image, View, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator } from "react-native";
import MSubtitle from '../../../../components/meals/MSubtitle';
import { AntDesign } from '@expo/vector-icons';
import { getAuth } from "firebase/auth";
import { fetchFavoriteExercises, addToFavorites, removeFromFavorites } from "../../../../context/ExerciseFavoriteService";
import { getStorage, getDownloadURL } from "firebase/storage";
import { ref } from "firebase/storage";

function ExDetailScreen({ route, navigation }) {
  const exerciseDocId = route.params.exerciseDocId;
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const fetchExercise = async () => {
      try {
        const exerciseDocRef = doc(FIRESTORE_DB, "Exercises", exerciseDocId);
        const exerciseDocSnapshot = await getDoc(exerciseDocRef);
        setSelectedExercise({ id: exerciseDocSnapshot.id, ...exerciseDocSnapshot.data() });
      } catch (error) {
        console.error("Error fetching Exercise:", error);
      }
    };
    fetchExercise();
  }, [exerciseDocId]);

  useEffect(() => {
    const checkFavoriteStatus = async () => {
      try {
        const favoriteExercises = await fetchFavoriteExercises();
        setIsFavorite(favoriteExercises.some((favExercise) => favExercise.id === exerciseDocId));
      } catch (error) {
        console.error('Error checking favorite status:', error);
      }
    };
    checkFavoriteStatus();
  }, [exerciseDocId]);

  const toggleFavorite = async () => {
    if (isFavorite) {
      await removeFromFavorites(exerciseDocId);
      setIsFavorite(false);
    } else {
      await addToFavorites(exerciseDocId, selectedExercise);
      setIsFavorite(true);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={toggleFavorite}>
          <AntDesign name='star' color={isFavorite ? '#ffb700' : 'black'} size={24} />
        </TouchableOpacity>
      )
    });
  }, [navigation, toggleFavorite]);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        if (selectedExercise && selectedExercise.imageUrl) {
          const storage = getStorage(); // Initialize Firebase Storage
          const imageRef = ref(storage, selectedExercise.imageUrl); // Reference to your image in Firebase Storage
          const url = await getDownloadURL(imageRef); // Get the download URL of the image
          setImageUrl(url); // Set the download URL as the image URL
        }
      } catch (error) {
        console.error('Error fetching image:', error);
      } finally {
        setLoading(false); // Set loading state to false
      }
    };

    fetchImage(); // Call the fetchImage function when the component mounts
  }, [selectedExercise]);

  return (
    <ScrollView style={styles.rootContainer}>
      <View style={styles.imageContainer}>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" style={styles.loadingOverlay} />
        ) : (
          <Image style={styles.image} source={{ uri: imageUrl }} />
        )}
      </View>
      <Text style={styles.title}>{selectedExercise?.name || "loading"}</Text>
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <MSubtitle>Sets and Reps</MSubtitle>
          <View style={styles.listItem}>
            <Text style={styles.itemText}>{selectedExercise?.setsAndReps || "loading"}</Text>
          </View>
          <MSubtitle>Equipment</MSubtitle>
          <View style={styles.listItem}>
            <Text style={styles.itemText}>{selectedExercise?.equipment || "loading"}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export default ExDetailScreen;

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
    backgroundColor: '#f0f0f0', // Background color while loading
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
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 10,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: '#E1F0F4',
  },
  itemText: {
    fontFamily: 'poppins',
    color: '#272D34',
    textAlign: 'center',
  }
});
