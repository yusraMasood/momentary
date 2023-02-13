import React,{useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NavigationOptions from '../NavigationOptions';

const Stack = createStackNavigator();

const MainNavigator = () => {
  useEffect(() => {
  }, []);
  return (
    <Stack.Navigator screenOptions={NavigationOptions}>
  
    </Stack.Navigator>
  );
};

export default MainNavigator;