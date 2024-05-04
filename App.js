import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";
import { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import MainStackNavigator from './src/navigations/MainStackNavigator';
import AuthContextProvider from './src/context/auth-context';
import { AuthContext } from './src/context/auth-context';
import { useFonts } from 'expo-font';
import React, { useState } from 'react';
import { View, ActivityIndicator } from 'react-native';



export default function App() {
  const [loading, setLoading] = useState(true);

  const [Loaded] = useFonts({
    'poppins': require('./src/assets/fonts/Poppins-Regular.ttf'),

    'poppins-semibold': require('./src/assets/fonts/Poppins-SemiBold.ttf'),
    'poppins-bold': require('./src/assets/fonts/Poppins-Bold.ttf'),
    'poppins-extrabold': require('./src/assets/fonts/Poppins-ExtraBold.ttf'),

    'poppins-light': require('./src/assets/fonts/Poppins-Light.ttf'),
    'poppins-extralight': require('./src/assets/fonts/Poppins-ExtraLight.ttf'),
    
    'poppins-thin': require('./src/assets/fonts/Poppins-Thin.ttf'),
    'poppins-medium': require('./src/assets/fonts/Poppins-Medium.ttf'),
  });

  if (!Loaded) {
    return null;
  }

  
 // const authCtx = useContext(AuthContext);

 

  return (

    <>
      <StatusBar style='dark'/>
      <NavigationContainer>
    
        <AuthContextProvider>

          <MainStackNavigator />

        </AuthContextProvider>
      
      </NavigationContainer>
    </>
    
  );



// function Navigation() {
//     const authCtx = useContext(AuthContext);
  
//     return (
      
//       <NavigationContainer>
    
//         <AuthContextProvider>

//           <MainStackNavigator />

//         </AuthContextProvider>
      
//       </NavigationContainer>
      
//     );
//   }

}


