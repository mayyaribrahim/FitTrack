import React, { useState } from "react";
import AuthContent from "../../components/auth/AuthContent";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import LoadingOverlay from "../../components/LoadingOverlay";
import { Alert } from "react-native";
import { FIREBASE_AUTH } from "../../../FirebaseConfig";

function SecondSignupScreen({ navigation }) {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [loading, setLoading] = useState('');

  const auth = FIREBASE_AUTH;

  async function signUp({ email, password }) {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      await sendEmailVerification(response.user);  // Send verification email
      console.log('User created and verification email sent:', response);
      // Alert.alert('Signup Successful', 'A verification email has been sent to your email address. Please verify your email to continue.');
      navigation.replace("SecondSignup");
    } catch (error) {
      Alert.alert('Authentication failed', 'Could not create user. Please check your input and try again later');
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <LoadingOverlay message="Creating user..." />;
  }

  return <AuthContent onAuthenticate={signUp} />;
}

export default SecondSignupScreen;
