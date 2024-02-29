import { StyleSheet } from 'react-native';
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
      tabBarActiveTintColor: 'white',
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
    bottom: 25,
    height: 70,
    elevation: 0,
    borderRadius: 45,
    backgroundColor: '#272D34',
  },
})