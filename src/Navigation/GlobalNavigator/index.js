import React,{useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NavigationOptions from '../NavigationOptions';
import HomeScreen from '../../screens/Drawer/Home/HomeScreen';
import GlobalNetworkScreen from '../../screens/Drawer/GlobalNetwork/GlobalNetworkScreen';
const Stack = createStackNavigator();

const GlobalNavigator = () => {
  useEffect(() => {
  }, []);
  return (
    <Stack.Navigator screenOptions={NavigationOptions}>
      <Stack.Screen name={"GlobalNetworkScreen"} component={GlobalNetworkScreen}/>
  
    </Stack.Navigator>
  );
};

export default GlobalNavigator;