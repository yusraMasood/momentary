import React,{useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NavigationOptions from '../NavigationOptions';
import HomeScreen from '../../screens/Drawer/Home/HomeScreen';
import FriendNetworkScreen from '../../screens/Drawer/FriendNetwork/FriendNetworkScreen';
import FriendRequest from '../../screens/Drawer/FriendNetwork/FriendRequest';
import FriendDetails from '../../screens/Drawer/FriendNetwork/FriendDetails';
const Stack = createStackNavigator();

const FriendNavigator = () => {
  useEffect(() => {
  }, []);
  return (
    <Stack.Navigator screenOptions={NavigationOptions}>
      <Stack.Screen name={"FriendNetworkScreen"} component={FriendNetworkScreen}/>
      <Stack.Screen name={"FriendRequest"} component={FriendRequest}/>
      <Stack.Screen name={"FriendDetails"} component={FriendDetails}/>



  
    </Stack.Navigator>
  );
};

export default FriendNavigator;