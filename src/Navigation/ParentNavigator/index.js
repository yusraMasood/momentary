import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MainNavigator from '../MainNavigator';
import AuthNavigator from '../AuthNavigator';

const ParentStack = createStackNavigator();

const ParentNavigator = () => {
  return (
    <ParentStack.Navigator initialRouteName='MainNavigator' screenOptions={{headerShown: false}}>
        <ParentStack.Screen name="AuthNavigator" component={AuthNavigator} />
        <ParentStack.Screen name="MainNavigator" component={MainNavigator} />
    </ParentStack.Navigator>
  );
};

export default ParentNavigator;
