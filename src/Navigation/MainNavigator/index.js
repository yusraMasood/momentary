import React,{useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NavigationOptions from '../NavigationOptions';
import HomeScreen from '../../screens/Drawer/Home/HomeScreen';
import TabNavigator from '../TabNavigator';
import NotificationScreen from '../../screens/Drawer/NotificationScreen';

const Stack = createStackNavigator();

const MainNavigator = () => {
  useEffect(() => {
  }, []);
  return (
    <Stack.Navigator screenOptions={NavigationOptions}>
      <Stack.Screen name={"TabNavigator"} component={TabNavigator}
      options={{headerShown: false}}
      />
       <Stack.Screen name={"NotificationScreen"} component={NotificationScreen}
      />
  
    </Stack.Navigator>
  );
};

export default MainNavigator;