import { createNativeStackNavigator } from "@react-navigation/native-stack";

import IntroScreen from "../screens/authScreens/IntroScreen";
import LoginScreen from '../screens/authScreens/LoginScreen';
import SignupScreen from '../screens/authScreens/SignupScreen';
import SecondSignupScreen from '../screens/authScreens/SecondSignupScreen';
import StartNow from '../screens/authScreens/StartNow';
import OnboardingTutorial from '../screens/authScreens/OnboardingTutorial';

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    
    <Stack.Navigator 
      initialRouteName="Intro" 
      screenOptions=
      {{
        headerStyle: {backgroundColor: 'white',}, 
        headerTitleStyle: {color: 'white'}, 
        headerShadowVisible: false,
        headerBackTitle: 'Back'
      }}
    >

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
        name="OnboardingTutorial" component={OnboardingTutorial}
        options={{headerBackVisible: false,//gestureEnabled: false,
      }}/>

    </Stack.Navigator>
    
  );
}

export default AuthStack;