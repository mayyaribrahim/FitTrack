import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SplashScreen from 'expo-splash-screen';
import { createContext, useEffect, useState } from "react";
import { useNavigation } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';

export const AuthContext = createContext({
  token: '',
  isAuthenticated: false,
  authenticate: (token) => {},
  logout: () => {},
});

function AuthContextProvider({children}) {
  const [authToken, setAuthToken] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    async function fetchToken () {
     const storedToken = await AsyncStorage.getItem('token');
     
      if (storedToken) {
        setAuthToken(storedToken);
        console.log('true');
        
      }
      setIsLoading(false);
    }
    fetchToken();
  }, []);



  useEffect(() => {
    if (!isLoading && authToken) {
      navigation.navigate('home');
    }
  }, [isLoading, authToken, navigation]);

  useEffect(() => {
    SplashScreen.hideAsync(); // Hide the splash screen when initialization is complete
  }, []);



  function authenticate(token) {
    setAuthToken(token);
    AsyncStorage.setItem('token', token);
  }

  function logout() {
    setAuthToken(null);
    AsyncStorage.removeItem('token');
  }

  const value = {
    token: authToken,
    isAuthenticated: !!authToken,
    authenticate: authenticate,
    logout: logout,
  }

  if (isLoading) {
    return null;
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}


export default AuthContextProvider;