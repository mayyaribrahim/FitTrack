import { View, Text, Pressable, Image, StyleSheet, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import { fetchFavoriteExercises, addToFavorites, removeFromFavorites } from "../../context/ExerciseFavoriteService";

function ExerciseItem({ exercise }) {
  const navigation = useNavigation();
  const [isFavorite, setIsFavorite] = useState(false);

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
            <Image source={require("../../assets/images/default.jpg")} style={styles.image} />
            <Text style={styles.title}>{exercise.name}</Text>
          </View>
          <Pressable onPress={toggleFavorite}>
            <Text style={{ color: isFavorite ? 'gold' : 'gray' }}>★</Text>
          </Pressable>
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
    backgroundColor: 'white',
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
    fontSize: 18,
    margin: 8,
  },
});
