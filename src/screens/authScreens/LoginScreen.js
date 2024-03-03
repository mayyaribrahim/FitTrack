import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, KeyboardAvoidingView, Platform, } from "react-native";
import PrimaryButton from "../../components/PrimaryButton";
import InputField from "../../components/InputFeild";

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
    
    <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.container}>

      
      <View>    
        <Image style={styles.image} source={require("../../assets/images/logo.png")}/> 
      </View>
      
      <View style={styles.inputContainer}>
        <InputField
          iconName={"user"}
          placeholder={"Email"}
          value={email}
          onChange={handleEmailChange}
          type="email"
        />

        <InputField
          iconName={"lock"}
          placeholder={"Password"}
          name={"password"}
          value={password}
          onChange={handlePasswordChange}
          type="password"
          secureTextEntry={true}
        />
      </View>

      
        <TouchableOpacity>
        <Text style={styles.forgotPasswordButtonText}>Forgot Password?</Text>
      </TouchableOpacity>
      

      <View style={styles.buttonContainer}>
        <PrimaryButton onPress={() => navigation.navigate('home')}>Login</PrimaryButton>
      </View>
      
    </KeyboardAvoidingView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: 'center',
    bottom: 60,
  },

  image: {
    width: 95,
    height: 100,
    
    resizeMode: "contain",
  },

  inputContainer: {
    marginTop: 20,
    
  },

  forgotPasswordButtonText: {
    color: "black",
    fontSize: 12,
    
  },

  buttonContainer: {
    marginTop: 30,
    
  },
});

export default LoginScreen;
