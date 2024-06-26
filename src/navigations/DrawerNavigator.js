import React from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/tabScreens/Home/HomeScreen';
import FavExerciseScreen from '../screens/tabScreens/Home/exercises/FavExerciseScreen'
import FavMlHome from '../screens/tabScreens/Home/meals/FavMlHome';
import FavExHome from '../screens/tabScreens/Home/exercises/FavExHome';
import TimerScreen from '../screens/tabScreens/Home/TimerScreen';
import CustomDrawerContent from '../components/CustomDrawerContent';

const Drawer = createDrawerNavigator();

export function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />} // Use custom drawer content
      screenOptions={{
        headerStyle: { backgroundColor: '#ffffff' },
        headerTintColor: '#000000',
        sceneContainerStyle: { backgroundColor: '#ffffff' },
        drawerContentStyle: { backgroundColor: '#272D34' },
        drawerInactiveTintColor: 'white',
        drawerActiveTintColor: '#ffffff',
        drawerActiveBackgroundColor: '#303740',
        headerBackTitle: 'Back',
        headerShadowVisible: false,
      }}
    >
      <Drawer.Screen name="HomeScreen" component={HomeScreen} 
        options={{ headerTitleStyle: {color: 'white'}, title: 'Home', drawerIcon: ({color, size}) => (<Ionicons name="list" color={color} size={size} />)}}
      />
      <Drawer.Screen name="FavoriteExerciseCategories" component={FavExHome} 
        options={{ title: 'Favorite Exercises', drawerIcon: ({color, size}) => (<Ionicons name="star" color={color} size={size} />)}}
      />
      <Drawer.Screen name="FavoriteMealCategories" component={FavMlHome}
        options={{ title: 'Favorite Meals', drawerIcon: ({color, size}) => (<Ionicons name="star" color={color} size={size} /> )}}
      />
      <Drawer.Screen name="TimerScreen" component={TimerScreen}
        options={{ title: 'Timer', drawerIcon: ({color, size}) => (<Ionicons name="timer" color={color} size={size} /> )}}
      />
    </Drawer.Navigator>
  );
}
