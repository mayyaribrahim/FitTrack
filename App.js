import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainStackNavigator from './src/navigations/MainStackNavigator';
import { useFonts } from 'expo-font';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();



export default function App() {


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

  return (
    <>
      <StatusBar style='dark'/>
      
      <NavigationContainer>

        <MainStackNavigator />

      </NavigationContainer>

    </>
    
  );
}


