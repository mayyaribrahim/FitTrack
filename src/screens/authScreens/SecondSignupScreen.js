import React, { useState } from "react";
import { View, StyleSheet, Image, KeyboardAvoidingView, Platform, } from "react-native";
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

    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.container}>

      <Image
        style={styles.image}
        source={require("../../assets/images/logo.png")}
      />

      <View style={styles.inputContainer}>
        <InputField
          iconName={"mail"}
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
      
    </KeyboardAvoidingView>
  )
}

export default SecondSignupScreen;

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
