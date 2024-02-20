import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import IntroScreen from './screens/IntroScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import SecondSignupScreen from './screens/SecondSignupScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar  style='dark' />
      
      <NavigationContainer>

        <Stack.Navigator>

          <Stack.Screen 
            name="Intro" component={IntroScreen} 
            options={{ 
              headerStyle: {backgroundColor: 'white',}, 
              headerTitleStyle: {color: 'white'},
              headerShadowVisible: false,
            }}
          />

          <Stack.Screen 
            name="Login" component={LoginScreen} 
            options={{ 
              headerStyle: {backgroundColor: 'white',}, 
              headerTitleStyle: {color: 'white'},
              headerShadowVisible: false,
              headerBackTitle: 'Back'
            }}
          />

          <Stack.Screen 
            name="Signup" component={SignupScreen} 
            options={{ 
              headerStyle: {backgroundColor: 'white',}, 
              headerTitleStyle: {color: 'white'},
              headerShadowVisible: false,
              headerBackTitle: 'Back'
            }}
          />

          <Stack.Screen 
            name="SecondSignup" component={SecondSignupScreen} 
            options={{ 
              headerStyle: {backgroundColor: 'white',}, 
              headerTitleStyle: {color: 'white'},
              headerShadowVisible: false,
              headerBackTitle: 'Back'
            }}
          />

        </Stack.Navigator>
        
      </NavigationContainer>
      
    </>

    

    
  );
}


