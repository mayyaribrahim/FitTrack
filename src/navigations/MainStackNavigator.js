import React, {useEffect, useContext} from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FavoritesContextProvider from '../context/Favorites-context';
import MyTabs from './TabNav';
import IntroScreen from "../screens/authScreens/IntroScreen";
import LoginScreen from '../screens/authScreens/LoginScreen';
import SignupScreen from '../screens/authScreens/SignupScreen';
import SecondSignupScreen from '../screens/authScreens/SecondSignupScreen';
import StartNow from '../screens/authScreens/StartNow';
import OnboardingTutorial from '../screens/authScreens/OnboardingTutorial';
import ExercisesScreen from '../screens/tabScreens/Home/exercises/ExercisesScreen';
import FavExerciseScreen from '../screens/tabScreens/Home/exercises/FavExerciseScreen';
import ExDetailScreen from '../screens/tabScreens/Home/exercises/ExDetailScreen';
import MealsScreen from '../screens/tabScreens/Home/meals/MealsScreen';
import FavMealsScreen from '../screens/tabScreens/Home/meals/FavMealsScreen';
import MlDetailScreen from '../screens/tabScreens/Home/meals/MlDetailScreen';
import Calculator from '../screens/tabScreens/ToolsScreen/Calculator';
import ProfileScreen from '../screens/tabScreens/Profile/ProfileScreen';
import PersonalInfo from '../screens/tabScreens/Profile/PersonalInfo';
import Settings from '../screens/tabScreens/Profile/Settings';
import ChangePassword from '../screens/tabScreens/Profile/ChangePassword';
import About from '../screens/tabScreens/Profile/About';
import TermsAndCond from '../screens/tabScreens/Profile/TermsAndCond';





const Stack = createNativeStackNavigator();

 function MainStackNavigator() {
  // const authCtx = useContext(AuthContext);
  // console.log(authCtx.isAuthenticated);

  
  return (
    
    

    
    <FavoritesContextProvider>

      <Stack.Navigator 
        screenOptions={{ 
        headerShadowVisible: false,
        headerBackTitle: 'Back',
        contentStyle: {backgroundColor: '#ffffff'},
        }}>



        {/*Authentication Stacks*/}
        {/* {!authCtx.isAuthenticated ? () : ()} */}
        
        
        
        
        <Stack.Screen name="Intro" component={IntroScreen} options={{headerTitleStyle: {color: 'white'},}}/>

        <Stack.Screen name="Login" component={LoginScreen} options={{headerTitleStyle: {color: 'white'},}}/>
        <Stack.Screen name="Signup" component={SignupScreen} options={{headerTitleStyle: {color: 'white'},}}/>

        <Stack.Screen name="SecondSignup" component={SecondSignupScreen} options={{headerTitleStyle: {color: 'white'}, headerBackVisible: false, gestureEnabled: false,}}/>
        <Stack.Screen name="StartNow" component={StartNow} options={{headerTitleStyle: {color: 'white'}, headerBackVisible: false, gestureEnabled: false}}/>
        
        

        
         
        <Stack.Screen name="OnboardingTutorial" component={OnboardingTutorial} options={{headerBackVisible: false, gestureEnabled: false, headerTitleStyle: {color: 'white'}}}/>  
        <Stack.Screen name="home" component={MyTabs} options={{ gestureEnabled: false, headerShown: false }} />

        {/*exercise screens*/}
        <Stack.Screen name="ExercisesScreen" component={ExercisesScreen} />
        <Stack.Screen name="ExerciseDetail" component={ExDetailScreen} />
        <Stack.Screen name="FavExerciseScreen" component={FavExerciseScreen} options={{ title: 'Favorite Exercises'}}/>

        {/*meals screens*/}
        <Stack.Screen name="MealsScreen" component={MealsScreen} options={{ title: ' Meals' }}/>
        <Stack.Screen name="MealDetail" component={MlDetailScreen} options={{ title: 'Meal Detail' }}/>
        <Stack.Screen name="FavMealsScreen" component={FavMealsScreen} options={{ title: 'Favorite Meals'}} />
        

        {/*Tools Stacks*/}
        <Stack.Screen name="Macros Calculator" component={Calculator} />
    

        {/*Profile Stacks*/}
        <Stack.Screen name="ProfileStacks" component={ProfileScreen} options={{headerShown: false,}}/>
        <Stack.Screen name="Personal Information" component={PersonalInfo} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Change Password" component={ChangePassword} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Terms And Conditions" component={TermsAndCond} />
        
        
      </Stack.Navigator>

    </FavoritesContextProvider>
   

  );
};



export default MainStackNavigator;