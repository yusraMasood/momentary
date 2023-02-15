import React,{useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NavigationOptions from '../NavigationOptions';
import HomeScreen from '../../screens/Drawer/Home/HomeScreen';
import NewEntry from '../../screens/Drawer/Home/NewEntry';
import MyEntries from '../../screens/Drawer/Home/MyEntries';
const Stack = createStackNavigator();

const HomeNavigator = () => {
  useEffect(() => {
  }, []);
  return (
    <Stack.Navigator screenOptions={NavigationOptions}>
      <Stack.Screen name={"HomeScreen"} component={HomeScreen}/>
      <Stack.Screen name={"NewEntry"} component={NewEntry}/>

      <Stack.Screen name={"MyEntries"} component={MyEntries}/>

  
    </Stack.Navigator>
  );
};

export default HomeNavigator;