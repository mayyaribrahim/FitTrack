import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthStack from './AuthStack';
import MyTabs from './TabNav';

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    
    <Stack.Navigator 
      initialRouteName="Intro" 
      screenOptions={{
        headerStyle: {backgroundColor: 'white',}, 
        headerTitleStyle: {color: 'white'}, 
        headerShadowVisible: false,
        headerBackTitle: 'Back'
      }}
    >
      
      <Stack.Screen 
        name="Authentication" 
        component={AuthStack} 
        options={{headerShown: false}}
      />

      <Stack.Screen 
        name="home" 
        component={MyTabs}
        options={{gestureEnabled: false, headerShown: false}} 
      />
          
    </Stack.Navigator>
  );
};

export default MainStackNavigator;