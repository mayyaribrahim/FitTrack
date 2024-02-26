import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/tabScreens/HomeScreen';
import FeedScreen from '../screens/tabScreens/FeedScreen';
import CalCulationScreen from '../screens/tabScreens/CalculationScreen';
import ProfileScreen from '../screens/tabScreens/ProfileScreen';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (

    <Tab.Navigator
    screenOptions={{
      headerShown: false, 
      tabBarShowLabel: false,
      tabBarStyle:styles.container,
      tabBarActiveTintColor: 'white',
      tabBarInactiveTintColor: 'grey',
    }}
    safeAreaInsets={{bottom: 0,}}
    >
      <Tab.Screen 
        name="Feed" 
        component={FeedScreen} 
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name='newspaper' color={color} size={size}/>
          )
        }}
      />

      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name='home' color={color} size={size}/>
          )
        }}
      />

      <Tab.Screen 
        name="macros" 
        component={CalCulationScreen} 
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name='calculator' color={color} size={size}/>
          )
        }}
      />
      
      <Tab.Screen 
        name="profile" 
        component={ProfileScreen} 
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name='person' color={color} size={size}/>
          )
        }}
        />

    </Tab.Navigator>
  );
}

export default MyTabs;

const styles = StyleSheet.create({ 
  container: {
    position: 'absolute',
    width: '90%',
    left: '5%',
    bottom: 25,
    height: 70,
    elevation: 0,
    borderRadius: 45,
    backgroundColor: '#292929',
  },
})