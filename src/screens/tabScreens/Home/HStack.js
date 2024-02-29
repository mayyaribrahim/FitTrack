import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./HomeScreen";
import ExercisesScreen from './ExercisesScreen';

const Stack = createNativeStackNavigator();

function HStack() {
  return (
    <Stack.Navigator 
      initialRouteName="Home Screen"
      screenOptions=
      {{
        headerStyle: {backgroundColor: 'white',}, 
        headerTitleStyle: {color: 'white'}, 
        headerShadowVisible: false,
        headerBackTitle: 'Back'
      }}
    >

      <Stack.Screen 
        name="Home Screen" 
        component={HomeScreen} 
        options=
        {{
          title: 'All Categories',
          headerShown: false,
        }}
      />

      <Stack.Screen 
        name="ExercisesOverView" 
        component={ExercisesScreen} 
        options=
        {{
          headerStyle: {backgroundColor: 'white',}, 
        headerTitleStyle: {color: 'white'}, 
        headerShadowVisible: false,
        headerBackTitle: 'Back'
        }}
      />

    </Stack.Navigator>
  )
}

export default HStack;