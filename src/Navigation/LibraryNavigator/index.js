import React,{useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NavigationOptions from '../NavigationOptions';
import LibraryScreen from '../../screens/Drawer/Library/LibraryScreen';
const Stack = createStackNavigator();

const LibraryNavigator = () => {
  useEffect(() => {
  }, []);
  return (
    <Stack.Navigator screenOptions={NavigationOptions}>
      <Stack.Screen name={"LibraryScreen"} component={LibraryScreen}/>
  
    </Stack.Navigator>
  );
};

export default LibraryNavigator;