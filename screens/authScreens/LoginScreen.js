import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, } from "react-native";
import PrimaryButton from "../../components/PrimaryButton";
import InputField from "../../components/inputFeild";

function LoginScreen ({navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (enteredEmail) => {
    setEmail(enteredEmail);
  };

  const handlePasswordChange = (enteredPassword) => {
    setPassword(enteredPassword);
  };

  console.log(email, password);

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
          name={"password"}
          value={password}
          onChange={handlePasswordChange}
          type="password"
          // label={"Password"}
          secureTextEntry={true}
        />
      </View>

      <TouchableOpacity>
        <Text style={styles.forgotPasswordButtonText}>Forgot Password?</Text>
      </TouchableOpacity>

      <View style={styles.buttonContainer}>
        <PrimaryButton onPress={() => navigation.navigate('home')}>Login</PrimaryButton>
      </View>
    </View>
  );
};

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

export default LoginScreen;
