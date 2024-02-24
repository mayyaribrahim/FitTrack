import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createSwitchNavigator } from "@react-navigation/core";

import IntroScreen from './screens/IntroScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import SecondSignupScreen from './screens/SecondSignupScreen';
import StartNow from './screens/StartNow';
import OnboardingTutorial from './screens/OnboardingTutorial';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar  style='dark' />
      
      <NavigationContainer>

      <Stack.Navigator 
        initialRouteName="Intro" 
        screenOptions={{headerStyle: {backgroundColor: 'white',}, 
        headerTitleStyle: {color: 'white'}, 
        headerShadowVisible: false,
        headerBackTitle: 'Back'
      }}>

          <Stack.Screen 
            name="Intro" component={IntroScreen} 
          />

          <Stack.Screen 
            name="Login" component={LoginScreen} 
          />

          <Stack.Screen 
            name="Signup" component={SignupScreen} 
          />

          <Stack.Screen 
            name="SecondSignup" component={SecondSignupScreen} 
          />

          <Stack.Screen 
            name="StartNow" component={StartNow} 
          />

          <Stack.Screen
            name="OnboardingTutorial"
            component={OnboardingTutorial}
            options={{
              headerStyle: { backgroundColor: "#ffffffff" },
              headerTitleStyle: { color: "#ffffff00" },
              headerShadowVisible: false,
              headerBackVisible: false,
              //gestureEnabled: false,
            }}
          />

        </Stack.Navigator>
        
      </NavigationContainer>
      
    </>
    
  );
}


