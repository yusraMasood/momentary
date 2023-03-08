import React,{useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NavigationOptions from '../NavigationOptions';
import HomeScreen from '../../screens/Drawer/Home/HomeScreen';
import GlobalNetworkScreen from '../../screens/Drawer/GlobalNetwork/GlobalNetworkScreen';
import PostByLocation from '../../screens/Drawer/GlobalNetwork/PostByLocation';
// import FriendRequest from '../../screens/Drawer/FriendNetwork/FriendRequest';
const Stack = createStackNavigator();

const GlobalNavigator = () => {
  useEffect(() => {
  }, []);
  return (
    <Stack.Navigator screenOptions={NavigationOptions}>
      <Stack.Screen name={"GlobalNetworkScreen"} component={GlobalNetworkScreen}/>
      {/* <Stack.Screen name={"PostByLocation"} component={PostByLocation}/> */}
      {/* <Stack.Screen name={"FriendRequest"} component={FriendRequest}/> */}


  
    </Stack.Navigator>
  );
};

export default GlobalNavigator;