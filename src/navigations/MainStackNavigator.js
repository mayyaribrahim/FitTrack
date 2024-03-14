import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MyTabs from './TabNav';

import IntroScreen from "../screens/authScreens/IntroScreen";
import LoginScreen from '../screens/authScreens/LoginScreen';
import SignupScreen from '../screens/authScreens/SignupScreen';
import SecondSignupScreen from '../screens/authScreens/SecondSignupScreen';
import StartNow from '../screens/authScreens/StartNow';
import OnboardingTutorial from '../screens/authScreens/OnboardingTutorial';

import HomeScreen from '../screens/tabScreens/Home/HomeScreen';
import ExercisesScreen from '../screens/tabScreens/Home/ExercisesScreen';
import MealsScreen from '../screens/tabScreens/Home/MealsScreen';

import ProfileScreen from '../screens/tabScreens/Profile/ProfileScreen';
import PersonalInfo from '../screens/tabScreens/Profile/PersonalInfo';
import Settings from '../screens/tabScreens/Profile/Settings';

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {

  return (
    
    <Stack.Navigator 
      screenOptions={{ 
      headerShadowVisible: false,
      headerBackTitle: 'Back',
      cardStyle: { backgroundColor: "#ffffffff" },
      }}>

      {/*Authentication Stacks*/}
      <Stack.Screen name="Intro" component={IntroScreen} options={{headerTitleStyle: {color: 'white'},}}/>
      <Stack.Screen name="Login" component={LoginScreen} options={{headerTitleStyle: {color: 'white'},}}/>
      <Stack.Screen name="Signup" component={SignupScreen} options={{headerTitleStyle: {color: 'white'},}}/>
      <Stack.Screen name="SecondSignup" component={SecondSignupScreen} options={{headerTitleStyle: {color: 'white'},}}/>
      <Stack.Screen name="StartNow" component={StartNow} options={{headerTitleStyle: {color: 'white'},}}/>
      <Stack.Screen name="OnboardingTutorial" component={OnboardingTutorial} 
      options={{headerBackVisible: false,//gestureEnabled: false,
      }}/>
      
      

      <Stack.Screen name="home" component={MyTabs}options={{gestureEnabled: false, headerShown: false}} />


      {/*Home Stacks*/}
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false,}} />
      <Stack.Screen name="ExercisesOverView" component={ExercisesScreen} />
      <Stack.Screen name="MealOverView" component={MealsScreen} />


      {/*Profile Stacks*/}
      <Stack.Screen name="ProfileStacks" component={ProfileScreen} options={{headerShown: false,}}/>
      <Stack.Screen name="Personal Information" component={PersonalInfo} />
      <Stack.Screen name="Settings" component={Settings} />
      


    </Stack.Navigator>
  );
};

export default MainStackNavigator;