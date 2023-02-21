import React,{useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NavigationOptions from '../NavigationOptions';
import StoreScreen from '../../screens/Drawer/Store/StoreScreen';
import Typography from '../../screens/Drawer/Store/Typography';
import BookPrinting from '../../screens/Drawer/Store/BookPrinting';
import PagesDesign from '../../screens/Drawer/Store/PagesDesign';
import JournalCovers from '../../screens/Drawer/Store/JournalCovers';
import Subscription from '../../screens/Drawer/Store/Subscription';
const Stack = createStackNavigator();

const StoreNavigator = () => {
  useEffect(() => {
  }, []);
  return (
    <Stack.Navigator screenOptions={NavigationOptions}>
      <Stack.Screen name={"StoreScreen"} component={StoreScreen}/>
      <Stack.Screen name={"Typography"} component={Typography}/>
      <Stack.Screen name={"BookPrinting"} component={BookPrinting}/>
      <Stack.Screen name={"PagesDesign"} component={PagesDesign}/>
      <Stack.Screen name={"JournalCovers"} component={JournalCovers}/>
      <Stack.Screen name={"Subscription"} component={Subscription}/>


  
    </Stack.Navigator>
  );
};

export default StoreNavigator;