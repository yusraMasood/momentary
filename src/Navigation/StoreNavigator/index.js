import React,{useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NavigationOptions from '../NavigationOptions';
import StoreScreen from '../../screens/Drawer/Store/StoreScreen';
const Stack = createStackNavigator();

const StoreNavigator = () => {
  useEffect(() => {
  }, []);
  return (
    <Stack.Navigator screenOptions={NavigationOptions}>
      <Stack.Screen name={"StoreScreen"} component={StoreScreen}/>
  
    </Stack.Navigator>
  );
};

export default StoreNavigator;