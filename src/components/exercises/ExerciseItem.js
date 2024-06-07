import { View, Text, Pressable, Image, StyleSheet, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import { fetchFavoriteExercises, addToFavorites, removeFromFavorites } from "../../context/ExerciseFavoriteService";
import { getStorage, getDownloadURL } from "firebase/storage";
import { ref } from "firebase/storage";

function ExerciseItem({ exercise }) {
  const navigation = useNavigation();
  const [isFavorite, setIsFavorite] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const storage = getStorage(); // Initialize Firebase Storage
        const imageRef = ref(storage, exercise.imageUrl); // Reference to your image in Firebase Storage
        const url = await getDownloadURL(imageRef); // Get the download URL of the image
        setImageUrl(url); // Set the download URL as the image URL
        setLoading(false); // Set loading state to false
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fetchImage(); // Call the fetchImage function when the component mounts
  }, []);

  useEffect(() => {
    const checkFavoriteStatus = async () => {
      try {
        const favoriteExercises = await fetchFavoriteExercises();
        setIsFavorite(favoriteExercises.some((favExercise) => favExercise.id === exercise.id));
      } catch (error) {
        console.error('Error checking favorite status:', error);
      }
    };
    checkFavoriteStatus();
  }, [exercise.id]);

  const toggleFavorite = async () => {
    if (isFavorite) {
      await removeFromFavorites(exercise.id);
      setIsFavorite(false);
      navigation.navigate('FavExercisesScreen', { exerciseRemoved: true });
    } else {
      await addToFavorites(exercise.id, exercise);
      setIsFavorite(true);
    }
  };

  const selectExerciseItemHandler = () => {
    navigation.navigate('ExerciseDetail', {
      exerciseDocId: exercise.id
    });
  };

  return (
    <View style={styles.exerciseItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [pressed ? styles.buttonPressed : null]}
        onPress={selectExerciseItemHandler}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{exercise.name}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

export default ExerciseItem;

const styles = StyleSheet.create({
  exerciseItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: '#ffffff',
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 8,
  },
  buttonPressed: {
    opacity: 0.7,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontFamily: 'poppins',
    textAlign: 'center',
    color: '#000000',
    fontSize: 20,
    margin: 12,
    
  },
});
