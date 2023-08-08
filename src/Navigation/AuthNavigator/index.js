import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../../screens/Auth/LoginScreen';
import SignupScreen from '../../screens/Auth/SignupScreen';
import NavigationOptions from '../NavigationOptions';
import ForgotPassword from '../../screens/Auth/ForgotPassword';
import ResetPassword from '../../screens/Auth/ResetPassword';
import VerificationCode from '../../screens/Auth/VerificationCode';

const AuthStack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="LoginScreen" component={LoginScreen}  />
      <AuthStack.Screen name="SignupScreen" component={SignupScreen}  />
      <AuthStack.Screen name="ForgotPassword" component={ForgotPassword}  />
      <AuthStack.Screen name="ResetPassword" component={ResetPassword}  />
      <AuthStack.Screen name="VerificationCode" component={VerificationCode}  />




    </AuthStack.Navigator>
  );
};

export default AuthNavigator;