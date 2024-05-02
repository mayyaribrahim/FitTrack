import React, {useContext, useState} from "react";
import AuthContent from "../../components/auth/AuthContent";
import LoadingOverlay from "../../components/LoadingOverlay";
import { login } from "../../util/auth";
import { View, Text, ActivityIndicator, Alert } from "react-native";
import { AuthContext } from "../../context/auth-context";
import { FIREBASE_AUTH } from "../../../FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

function LoginScreen ({navigation}) {
  const [loading, setLoading] = useState(false);

  const auth = FIREBASE_AUTH;

  async function signIn({email, password}) {
    setLoading(true);
    try{
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
      navigation.navigate('home');
    } catch (error) {
    Alert.alert('Authentication failed', 'Could not log you in. Please check your credentials or try again later')
  } finally {
    setLoading(false);
  }

  }

  

  

  // const [isAuthenticating, setIsAuthenticating ] = useState(false);

  // const authCtx = useContext(AuthContext)

  // async function loginHandler({email, password}) {
  //   setIsAuthenticating(true);
  //   try{
  //     const token = await login(email, password);
  //     authCtx.authenticate(token);
  //     navigation.navigate('home');
  //   } catch (error) {
  //     Alert.alert('Authentication failed', 'Could not log you in. Please check your credentials or try again later')
  //     setIsAuthenticating(false);
  //   }
    
  // }

   if(loading) {
     return <LoadingOverlay message="Logging you in..." />;
   }

   return <AuthContent isLogin onAuthenticate={signIn}/>
};

export default LoginScreen;
