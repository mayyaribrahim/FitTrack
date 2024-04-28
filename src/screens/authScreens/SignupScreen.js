import React, {useContext, useState} from "react";
import AuthContent from "../../components/auth/AuthContent";
import { createUser } from "../../util/auth";
import LoadingOverlay from "../../components/LoadingOverlay";
import { Alert } from "react-native";
import { AuthContext } from "../../context/auth-context";

function SecondSignupScreen ({navigation}) {
  const [isAuthenticating, setIsAuthenticating ] = useState(false);

  const authCtx = useContext(AuthContext);

  async function signupHandelr({email, password}) {
    setIsAuthenticating(true);
    try {
      const token = await createUser(email, password);
      authCtx.authenticate(token);
      navigation.navigate("SecondSignup")
    } catch (error) {
      Alert.alert('Authentication failed', 'Could not create user. Please check your input and try again later')
      setIsAuthenticating(false);
      
    }
   
   
  }

  if(isAuthenticating) {
    return <LoadingOverlay message="Creating user..." />;
  }

  return <AuthContent onAuthenticate={signupHandelr}/>
}

export default SecondSignupScreen;




