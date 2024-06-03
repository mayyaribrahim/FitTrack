import React from "react";
import { View, Text, Pressable, Image, StyleSheet, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealDetail from "./MealDetail";
import { imageDb } from "../../../FirebaseConfig";
import { useState, useEffect } from "react";
import { getStorage, getDownloadURL } from "firebase/storage";
import { ref } from "firebase/storage";
import LoadingOverlay from "../LoadingOverlay";

function MealItem({ meal }) {
  const navigation = useNavigation();
  const [imageUrl, setImageUrl] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const storage = getStorage(); // Initialize Firebase Storage
        const imageRef = ref(storage, meal.imageUrl); // Reference to your image in Firebase Storage
        const url = await getDownloadURL(imageRef); // Get the download URL of the image
        setImageUrl(url); // Set the download URL as the image URL
        setLoading(false); // Set loading state to false
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fetchImage(); // Call the fetchImage function when the component mounts
  }, []);


  const selectMealItemHandler = () => {
    navigation.navigate("MealDetail", {
      mealDocId: meal.id,
      categoryIds: meal.categoryIds,
    });
  };

  

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [pressed ? styles.buttonPressed : null]}
        onPress={selectMealItemHandler}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image
              source={{ uri: imageUrl }}
              style={styles.image}
            />
            <Text style={styles.title}>{meal.title}</Text>
          </View>
          <MealDetail meal={meal} />
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: "white",
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
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontFamily: "poppins",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
});

export default MealItem;
