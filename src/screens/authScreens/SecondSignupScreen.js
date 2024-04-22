import React, { useState } from "react";
import { View, StyleSheet,Image, KeyboardAvoidingView, Platform, } from "react-native";
import PrimaryButton from "../../components/PrimaryButton";
import InputField from "../../components/InputFeild";


function SignupScreen ({ navigation }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  
  const handleFirstName = (enteredFirstName) => {
    setFirstName(enteredFirstName);
  };

  const handleLastName = (enteredLastName) => {
    setLastName(enteredLastName);
  };


  console.log(firstName, lastName);

  return (

    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.container}>

      <View>    
        <Image style={styles.image} source={require("../../assets/images/logo.png")}/> 
      </View>

      <View style={styles.inputContainer}>

        <InputField
          iconName={"user"}
          placeholder={"First Name"}
          value={firstName}
          onChange={handleFirstName}
          type="firstName"
          // label={"firstName"}
        />

        <InputField
          iconName={"user"}
          placeholder={"Last Name"}
          value={lastName}
          onChange={handleLastName}
          type="LastName"
          // label={"lastName"}
        />

      </View>

      <View style={styles.buttonContainer}>
        <PrimaryButton onPress={() => navigation.navigate("StartNow")}>Next</PrimaryButton>
      </View>
      
    </KeyboardAvoidingView>
  );
};

export default SignupScreen;

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
    marginTop: 20,
    bottom: 50,
  },

  label: {
    fontFamily: 'poppins',
    marginBottom: 5,
    fontSize: 18,
  },

  buttonContainer: {
    marginTop: 30,
    bottom: 60,
  },
});