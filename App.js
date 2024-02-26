import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainStackNavigator from './src/navigations/MainStackNavigator';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='dark'/>
      
      <NavigationContainer>

        <MainStackNavigator />

      </NavigationContainer>

    </>
    
  );
}


