import React from 'react';
import { Pressable, View, Text, StyleSheet, Platform, ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function AcCategoryGrid({ title, titleColor, buttonColor, iconContainer, iconColor, onPress, image }) {
  console.log('Image prop:', image); // Debugging log

  return (
    <View style={styles.gridItem}>
      <ImageBackground 
        source={image} 
        style={styles.imageBackground}
        imageStyle={{ borderRadius: 22 }} // To match the border radius of the button
      >
        <Pressable
          android_ripple={{ color: "#ccc" }}
          style={({ pressed }) => [
            styles.button,
            pressed ? styles.buttonPressed : null,
          ]}
          onPress={onPress}
        >
          {/* <View style={[styles.iconContainer, { backgroundColor: iconContainer }]}>
            <View style={styles.icons}>
              <Ionicons name="restaurant" size={20} color={iconColor} />
            </View>
          </View> */}
          
          <View style={styles.innerContainer}>
            <View style={styles.textContainer}>
              <Text style={[styles.title, { color: titleColor }]}>{title}</Text>
            </View>
          </View>
        </Pressable>
      </ImageBackground>
    </View>
  );
}

export default AcCategoryGrid;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 5,
    marginRight: 11,
    height: 150,
    width: 250,
    elevation: 4,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    shadowColor: "#000000",
    shadowOpacity: 0.10,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    borderRadius: 22,
  },
  imageBackground: {
    flex: 1,
    borderRadius: 22,
  },
  button: {
    flex: 1,
    borderRadius: 22,
    overflow: "hidden",
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Optional: Add an overlay for better text visibility
  },
  buttonPressed: {
    opacity: 0.5,
  },
  textContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "flex-end",
    alignItems: "flex-start",
    bottom: 10,
    left: 2,
  },
  innerContainer: {
    flex: 1,
  },
  iconContainer: {
    width: 47,
    height: 47,
    borderRadius: 30,
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    top: 16,
    right: 10,
  },
  title: {
    fontFamily: 'poppins-light',
    fontSize: 20,
  },
});
