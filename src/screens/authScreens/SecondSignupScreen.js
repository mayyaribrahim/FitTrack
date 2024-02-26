import React, { useState } from "react";
import { View, StyleSheet, Image, } from "react-native";
import PrimaryButton from "../../components/PrimaryButton";
import InputField from "../../components/InputFeild";

function SecondSignupScreen ({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handleEmailChange = (enteredEmail) => {
    setEmail(enteredEmail);
  };

  const handlePasswordChange = (enteredPassword) => {
    setPassword(enteredPassword);
  };

  const handlePasswordConfirmation = (enteredPasswordConf) => {
    setPasswordConfirmation(enteredPasswordConf);
  };

  console.log(email, password, passwordConfirmation);

  return (

    <View style={styles.container}>

      <Image
        style={styles.image}
        source={require("../../assets/images/logo.png")}
      />

      <View style={styles.inputContainer}>
        <InputField
          iconName={"user"}
          placeholder={"Email"}
          value={email}
          onChange={handleEmailChange}
          type="email"
          // label={"Email"}
        />

        <InputField
          iconName={"lock"}
          placeholder={"Password"}
          value={password}
          onChange={handlePasswordChange}
          type="password"
          // label={"Password"}
          secureTextEntry={true}
        />

        <InputField
          iconName={"lock"}
          placeholder={"Password Confirmation"}
          value={passwordConfirmation}
          onChange={handlePasswordConfirmation}
          type="password"
          // label={"PasswordConfirmation"}
          secureTextEntry={true}
        />
      </View>

      <View style={styles.buttonContainer}>
        <PrimaryButton onPress={() => navigation.navigate("StartNow")}>Sign Up</PrimaryButton>
      </View>
      
    </View>
  )
}

export default SecondSignupScreen;

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
