import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import IntroScreen from './screens/IntroScreen';
import LoginScreen from './screens/LoginScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar  style='dark' />
      
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name=" " component={IntroScreen} options={{ headerStyle: {backgroundColor: 'transparent',},}}/>
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerStyle: {backgroundColor: 'transparent',},}}/>
        </Stack.Navigator>
      </NavigationContainer>
      
    </>

    

    
  );
}


