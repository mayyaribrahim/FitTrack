import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ProfileScreen from './ProfileScreen';
import PersonalInfo from './PersonalInfo';

const Stack = createNativeStackNavigator();

function PStack() {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">

      <Stack.Screen 
        name="HomeScreen" 
        component={ProfileScreen} 
        options=
        {{
          headerShown: false,
        }}
      />

      <Stack.Screen 
        name="ExercisesOverView" 
        component={PersonalInfo} 
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

export default PStack;