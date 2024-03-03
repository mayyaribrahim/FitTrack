import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./HomeScreen";
import ExercisesScreen from './ExercisesScreen';

const Stack = createNativeStackNavigator();

function HStack() {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">

      <Stack.Screen 
        name="HomeScreen" 
        component={HomeScreen} 
        options=
        {{
          headerShown: false,
        }}
      />

      <Stack.Screen 
        name="ExercisesOverView" 
        component={ExercisesScreen} 
        options=
        {{
          headerStyle: {backgroundColor: 'white',}, 
          headerTitleStyle: {color: '#000000'}, 
          headerShadowVisible: false,
          headerBackTitle: 'Back'
        }}
      />

    </Stack.Navigator>
  )
}

export default HStack;