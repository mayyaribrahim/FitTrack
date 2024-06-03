import React, { useRef } from 'react';
import { StyleSheet, View, TouchableOpacity, Animated, Dimensions, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { DrawerNavigator } from './DrawerNavigator';
import ProfileScreen from '../screens/tabScreens/Profile/ProfileScreen';
import FeedScreen from '../screens/tabScreens/Feed/FeedScreen';
import ToolsScreen from '../screens/tabScreens/ToolsScreen/ToolsScreen';
import TrackScreen from '../screens/tabScreens/Track/TrackScreen';

const Tab = createBottomTabNavigator();
const { width } = Dimensions.get('window');

const CustomTabBar = ({ state, descriptors, navigation }) => {
  const offset = useRef(new Animated.Value(0)).current;
  const tabWidth = width * 0.93 / state.routes.length;  // Adjusted for new width

  const handleTabPress = (index) => {
    Animated.spring(offset, {
      toValue: index * tabWidth,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.indicator,
          {
            width: tabWidth,
            transform: [{ translateX: offset }],
          },
        ]}
      />
      <View style={styles.tabBar}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;
          const iconName = getIconName(route.name);

          const onPress = () => {
            handleTabPress(index);
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <TouchableOpacity
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              style={styles.tabBarItem}
            >
              <Ionicons name={iconName} color={isFocused ? '#272D34' : 'grey'} size={30} />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const getIconName = (routeName) => {
  switch (routeName) {
    case 'Home':
      return 'home';
    case 'Feed':
      return 'newspaper';
    case 'macros':
      return 'calculator';
    case 'track':
      return 'bar-chart';
    case 'profile':
      return 'person';
    default:
      return 'circle';
  }
};

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.container,
        tabBarActiveTintColor: '#E1F0F4',
        tabBarInactiveTintColor: 'grey',
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen
        name="Home"
        component={DrawerNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Feed"
        component={FeedScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="newspaper" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="macros"
        component={ToolsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calculator" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="track"
        component={TrackScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="bar-chart" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '93%',  // Adjusted to be longer
    left: '3.5%',  // Adjusted to center the tab navigator
    bottom: 22,
    height: 65,
    elevation: 0,
    borderRadius: 25,
    backgroundColor: '#272D34',
    borderTopWidth: 0,
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  tabBar: {
    flexDirection: 'row',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    alignContent: 'center'
  },
  tabBarItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicator: {
    position: 'absolute',
    height: 65,
    top: 0,
    borderRadius: 25,
    backgroundColor: '#E1F0F4',
  },
});
