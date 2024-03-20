import React, { useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const NextButton = ({ scrollTo, title }) => {
  const currentPage = useRef(0); // Track the current page

  
  return (

    <View style={styles.container}>

      <TouchableOpacity onPress={scrollTo} style={styles.buttonInnerContainer}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>

    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    height: 42,
    width: 314,
    borderRadius: 25,
    elevation: 2,
    marginBottom: 150,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#272D34",
    overflow: "hidden",
  },
  buttonInnerContainer: {
    elevation: 2,
    height: 42,
    justifyContent: "center",
    alignItems: "center",
    width: 364,
  },
  text: {
    fontFamily: 'poppins',
    fontSize: 16,
    color: "#ffffff",
  },
});

export default NextButton;