import { StyleSheet, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HStack from '../screens/tabScreens/Home/HStack';
import FeedScreen from '../screens/tabScreens/FeedScreen';
import ToolsScreen from '../screens/tabScreens/ToolsScreen';
import ProfileScreen from '../screens/tabScreens/ProfileScreen';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerShown: false, 
      tabBarShowLabel: false,
      tabBarStyle:styles.container,
      tabBarActiveTintColor: '#272D34',
      tabBarInactiveTintColor: 'grey',
    }}
    safeAreaInsets={{bottom: 0}}
    >

      <Tab.Screen 
        name="Home" 
        component={HStack} 
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name='home' color={color} size={30}/>
          )
        }}
      />

      <Tab.Screen 
        name="Feed" 
        component={FeedScreen} 
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name='newspaper' color={color} size={30}/>
          )
        }}
      />

      <Tab.Screen 
        name="macros" 
        component={ToolsScreen} 
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name='calculator' color={color} size={30}/>
          )
        }}
      />
      
      <Tab.Screen 
        name="profile" 
        component={ProfileScreen} 
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name='person' color={color} size={30}/>
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
    bottom: 30,
    height: 70,
    elevation: 0,
    borderRadius: 22,
    backgroundColor: '#ffffff',
    borderTopWidth: 0,
    shadowColor: "black",
    shadowOpacity: 0.30,
    shadowOffset: { width: 0, height: 3 }, 
    elevation: 4,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
})