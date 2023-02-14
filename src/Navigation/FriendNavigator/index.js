import React,{useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NavigationOptions from '../NavigationOptions';
import HomeScreen from '../../screens/Drawer/Home/HomeScreen';
import FriendNetworkScreen from '../../screens/Drawer/FriendNetwork/FriendNetworkScreen';
const Stack = createStackNavigator();

const FriendNavigator = () => {
  useEffect(() => {
  }, []);
  return (
    <Stack.Navigator screenOptions={NavigationOptions}>
      <Stack.Screen name={"FriendNetworkScreen"} component={FriendNetworkScreen}/>
  
    </Stack.Navigator>
  );
};

export default FriendNavigator;