import React,{useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NavigationOptions from '../NavigationOptions';
import HomeScreen from '../../screens/Drawer/Home/HomeScreen';
const Stack = createStackNavigator();

const HomeNavigator = () => {
  useEffect(() => {
  }, []);
  return (
    <Stack.Navigator screenOptions={NavigationOptions}>
      <Stack.Screen name={"HomeScreen"} component={HomeScreen}/>
  
    </Stack.Navigator>
  );
};

export default HomeNavigator;