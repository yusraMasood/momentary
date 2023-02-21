import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SettingScreen from '../../screens/Drawer/Settings/SettingScreen';
import NavigationOptions from '../NavigationOptions';

const Stack = createStackNavigator();

const SettingNavigator = () => {
  return (
    <Stack.Navigator screenOptions={NavigationOptions}>
        <Stack.Screen name="SettingScreen" component={SettingScreen} />
    </Stack.Navigator>
  );
};

export default SettingNavigator;
