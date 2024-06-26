import { collection, addDoc, doc, setDoc, updateDoc } from 'firebase/firestore'; 
import React, { useState, useEffect, useContext } from "react";
import { View, StyleSheet,Image, KeyboardAvoidingView, Platform, } from "react-native";
import PrimaryButton from "../../components/PrimaryButton";
import InputField from "../../components/InputFeild";
import { FIRESTORE_DB } from "../../../FirebaseConfig";
import { getAuth } from 'firebase/auth';



function SignupScreen ({ navigation }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  
  
  const handleFirstName = (enteredFirstName) => {
    setFirstName(enteredFirstName);
  };

  const handleLastName = (enteredLastName) => {
    setLastName(enteredLastName);
  };


  const saveUserData = async () => {
    try {
      const auth = getAuth(); // Get the auth instance
      const user = auth.currentUser; // Get the current user
      
      if (user) {
        const uid = user.uid;

        // Add first name and last name to the user document
        const userDocRef = doc(collection(FIRESTORE_DB, 'users'), uid);
        await setDoc(userDocRef, {
          firstName: firstName,
          lastName: lastName,
        });
        
        console.log("User data saved successfully for UID: ", uid);
        navigation.navigate("StartNow");
      } else {
        console.error("No user is currently signed in.");
      }
    } catch (error) {
      console.error("Error saving user data: ", error);
    }
  };
  

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
        <PrimaryButton onPress={saveUserData}>Next</PrimaryButton>
      </View>
      {/* () => navigation.navigate("StartNow") */}
      
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