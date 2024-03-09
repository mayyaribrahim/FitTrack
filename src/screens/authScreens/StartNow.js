import React, { useState } from "react";
import { View, StyleSheet,Image, } from "react-native";
import PrimaryButton from "../../components/PrimaryButton";
import InputField from "../../components/InputFeild";
import { FontAwesome6 } from '@expo/vector-icons';


function StartNow ({ navigation }) {
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  
  const handleAge = (enteredAge) => {
    setAge(enteredAge);
  };

  const handleHeight = (enteredHeight) => {
    setHeight(enteredHeight);
  };

  const handleWeight = (enteredWeight) => {
    setWeight(enteredWeight);
  };


  console.log(age, height, weight);

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/images/logo.png")}
      />

      <View style={styles.inputContainer}>

        <InputField
          secondIconName={"calendar"}
          placeholder={"Age"}
          value={age}
          onChange={handleAge}
          type="age"
          // label={"Age"}
        />

        <InputField
          secondIconName={"ruler"}
          placeholder={"Height"}
          value={height}
          onChange={handleHeight}
          type="Height"
          // label={"Height"}
        />

        
        <InputField
          secondIconName={"weight-scale"}
          placeholder={"Weight"}
          value={weight}
          onChange={handleWeight}
          type="weight"
          // label={"Weight"}
        />
        
      </View>

      <View style={styles.buttonContainer}>
        <PrimaryButton onPress={() => navigation.navigate("OnboardingTutorial")}>Start Now!</PrimaryButton>
      </View>
    </View>
  );
};

export default StartNow;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 110,
  },

  image: {
    width: 145,
    height: 100,
    resizeMode: "contain",
  },

  inputContainer: {
    marginTop: 40,
  },

  label: {
    marginBottom: 5,
    fontSize: 18,
  },

  textInput: {
    paddingVertical: 14,
    paddingHorizontal: 10,
  },

  forgotPasswordButtonText: {
    color: "black",
    fontSize: 12,
    marginTop: 14,
  },

  buttonContainer: {
    marginTop: 30,
  },
});


