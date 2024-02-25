import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
    </Tab.Navigator>
  );
}


export default MyTabs;