import React,{useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NavigationOptions from '../NavigationOptions';
import HomeScreen from '../../screens/Drawer/Home/HomeScreen';
import NewEntry from '../../screens/Drawer/Home/NewEntry';
import MyEntries from '../../screens/Drawer/Home/MyEntries';
import SaveLocation from '../../screens/Drawer/Home/SaveLocation';
import Visiblity from '../../screens/Drawer/Home/Visiblity';
import ViewEntry from '../../screens/Drawer/Home/ViewEntry';
import EditEntry from '../../screens/Drawer/Home/EditEntry';
const Stack = createStackNavigator();

const HomeNavigator = () => {
  useEffect(() => {
  }, []);
  return (
    <Stack.Navigator screenOptions={NavigationOptions}>
      <Stack.Screen name={"HomeScreen"} component={HomeScreen}/>
      <Stack.Screen name={"NewEntry"} component={NewEntry}/>
      <Stack.Screen name={"MyEntries"} component={MyEntries}/>
      <Stack.Screen name={"SaveLocation"} component={SaveLocation}/>
      <Stack.Screen name={"Visiblity"} component={Visiblity}/>
      <Stack.Screen name={"ViewEntry"} component={ViewEntry}/>
      

    </Stack.Navigator>
  );
};

export default HomeNavigator;