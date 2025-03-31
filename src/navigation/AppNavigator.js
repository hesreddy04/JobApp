import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import JobsScreen from '../screens/JobsScreen';
import JobDetailsScreen from '../screens/JobDetailsScreen';
import BookmarksScreen from '../screens/BookmarksScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const JobsStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="JobsList" component={JobsScreen} options={{ headerShown: false }} />
    <Stack.Screen name="JobDetails" component={JobDetailsScreen} options={{ title: 'Job Details' }} />
  </Stack.Navigator>
);

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            const icons = {
              Jobs: 'work',
              Bookmarks: 'bookmark',
            };
            return <Icon name={icons[route.name]} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Jobs" component={JobsStack} />
        <Tab.Screen name="Bookmarks" component={BookmarksScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}