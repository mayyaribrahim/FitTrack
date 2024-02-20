import React, { useState } from "react";
import { View, StyleSheet,Image, } from "react-native";
import PrimaryButton from "../ui/PrimaryButton";
import InputField from "../ui/inputFeild";


function SignupScreen ({ navigation }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  
  const handleFirstName = (text) => {
    setFirstName(text);
  };

  const handleLastName = (text) => {
    setLastName(text);
  };


  // console.log(firstName, lastName);

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../assets/images/logo.png")}
      />

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
        <PrimaryButton onPress={() => navigation.navigate("SecondSignup")}>Next</PrimaryButton>
      </View>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 110,
  },

  image: {
    width: 95,
    height: 95,
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


