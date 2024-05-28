import { StyleSheet, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { DrawerNavigator } from './DrawerNavigator';

import ProfileScreen from '../screens/tabScreens/Profile/ProfileScreen';
import FeedScreen from '../screens/tabScreens/Feed/FeedScreen';
import ToolsScreen from '../screens/tabScreens/ToolsScreen/ToolsScreen';
import TrackScreen from '../screens/tabScreens/Track/TrackScreen';

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
        component={DrawerNavigator} 
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
        name="track" 
        component={TrackScreen} 
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name='bar-chart' color={color} size={30}/>
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
    bottom: 29,
    height: 65,
    elevation: 0,
    borderRadius: 22,
    backgroundColor: 'white',
    borderTopWidth: 0,
    shadowColor: "black",
    shadowOpacity: 0.30,
    shadowOffset: { width: 0, height: 2 }, 
    elevation: 4,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    
  },
})
//585353