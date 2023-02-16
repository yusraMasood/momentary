import React,{useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NavigationOptions from '../NavigationOptions';
import LibraryScreen from '../../screens/Drawer/Library/LibraryScreen';
import AddNewJournal from '../../screens/Drawer/Library/AddNewJournal';
const Stack = createStackNavigator();

const LibraryNavigator = () => {
  useEffect(() => {
  }, []);
  return (
    <Stack.Navigator screenOptions={NavigationOptions}>
      <Stack.Screen name={"LibraryScreen"} component={LibraryScreen}/>
      <Stack.Screen name={"AddNewJournal"} component={AddNewJournal}/>

  
    </Stack.Navigator>
  );
};

export default LibraryNavigator;