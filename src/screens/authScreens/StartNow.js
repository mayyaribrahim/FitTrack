import React, { useState } from "react";
import { View, StyleSheet,Image, KeyboardAvoidingView, Platform, } from "react-native";
import PrimaryButton from "../../components/PrimaryButton";
import InputField from "../../components/InputFeild";



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

    <KeyboardAvoidingView 
    behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.container}>

      <Image style={styles.image} source={require("../../assets/images/logo.png")}/>

      <View style={styles.inputContainer}>

        <InputField
          secondIconName={"calendar"}
          placeholder={"Age"}
          value={age}
          onChange={handleAge}
          type="age"
          keyboardType="numeric"
          // label={"Age"}
        />

        <InputField
          secondIconName={"ruler"}
          placeholder={"Height"}
          value={height}
          onChange={handleHeight}
          type="Height"
          keyboardType="numeric"
          // label={"Height"}
        />

        
        <InputField
          secondIconName={"weight-scale"}
          placeholder={"Weight"}
          value={weight}
          onChange={handleWeight}
          type="weight"
          keyboardType="numeric"
          // label={"Weight"}
        />
        
      </View>

      <View style={styles.buttonContainer}>
        <PrimaryButton onPress={() => navigation.navigate("OnboardingTutorial")}>Start Now!</PrimaryButton>
      </View>

    </KeyboardAvoidingView>
  );
};

export default StartNow;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: 'center',
  },

  image: {
    width: 145,
    height: 100,
    bottom: 70,
    resizeMode: "contain",
  },

  inputContainer: {
    marginTop: 40,
    bottom: 50,
  },

  label: {
    marginBottom: 5,
    fontSize: 18,
  },

  buttonContainer: {
    marginTop: 30,
    bottom: 60,
  },
});


