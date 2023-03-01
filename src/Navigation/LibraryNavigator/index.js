import React,{useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NavigationOptions from '../NavigationOptions';
import LibraryScreen from '../../screens/Drawer/Library/LibraryScreen';
import AddNewJournal from '../../screens/Drawer/Library/AddNewJournal';
import LibraryCollection from '../../screens/Drawer/Library/LibraryCollection';
const Stack = createStackNavigator();

const LibraryNavigator = () => {
  useEffect(() => {
  }, []);
  return (
    <Stack.Navigator screenOptions={NavigationOptions}>
      <Stack.Screen name={"LibraryScreen"} component={LibraryScreen}/>
      <Stack.Screen name={"AddNewJournal"} component={AddNewJournal}/>
      <Stack.Screen name={"LibraryCollection"} component={LibraryCollection}/>


  
    </Stack.Navigator>
  );
};

export default LibraryNavigator;