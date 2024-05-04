import React, {useContext, useState} from "react";
import AuthContent from "../../components/auth/AuthContent";
import { createUser } from "../../util/auth";
import LoadingOverlay from "../../components/LoadingOverlay";
import { Alert } from "react-native";
import { AuthContext } from "../../context/auth-context";
import { FIREBASE_AUTH } from "../../../FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
function SecondSignupScreen ({navigation}) {
  const [isAuthenticating, setIsAuthenticating ] = useState(false);
  const [loading, setLoading] = useState('');

  const auth = FIREBASE_AUTH;

  async function signUp({email, password}) {
    setLoading(true);
    try{
      const response = await createUserWithEmailAndPassword(auth, email, password);
      console.log(response);
      navigation.replace("SecondSignup");
    } catch (error) {
      Alert.alert('Authentication failed', 'Could not create user. Please check your input and try again later')
  } finally {
    setLoading(false);
  }
    
  }

  // const authCtx = useContext(AuthContext);

  // async function signupHandelr({email, password}) {
  //   setIsAuthenticating(true);
  //   try {
  //     const token = await createUser(email, password);
  //     authCtx.authenticate(token);
  //     navigation.replace("SecondSignup")
  //   } catch (error) {
  //     Alert.alert('Authentication failed', 'Could not create user. Please check your input and try again later')
  //     setIsAuthenticating(false);
      
  //   }
   
  // }

  if(loading) {
    return <LoadingOverlay message="Creating user..." />;
  }

  return <AuthContent onAuthenticate={signUp}/>
}

export default SecondSignupScreen;




