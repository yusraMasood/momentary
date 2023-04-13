import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MainNavigator from '../MainNavigator';
import AuthNavigator from '../AuthNavigator';
import { useToken } from '../../state/auth';
import { useSelector } from 'react-redux';

const ParentStack = createStackNavigator();

const ParentNavigator = () => {
  // const token=useSelector(state=> state?.auth?.token)
  const token =useToken()
  return (
    <ParentStack.Navigator screenOptions={{headerShown: false}}>
      {token?
    <ParentStack.Screen name="MainNavigator" component={MainNavigator} />
    :
    <ParentStack.Screen name="AuthNavigator" component={AuthNavigator} />

    }
      {/* {token?
    :
    

    } */}
    </ParentStack.Navigator>
  );
};

export default ParentNavigator;
