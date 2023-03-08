import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NavigationOptions from '../NavigationOptions';
import HomeScreen from '../../screens/Drawer/Home/HomeScreen';
import TabNavigator from '../TabNavigator';
import NotificationScreen from '../../screens/Drawer/NotificationScreen';
import SettingNavigator from '../SettingNavigator';
import MyProfile from '../../screens/Drawer/Profile/MyProfile';
import EditProfile from '../../screens/Drawer/Profile/EditProfile';
import ChangePassword from '../../screens/Drawer/Profile/ChangePassword';
import FriendRequest from '../../screens/Drawer/FriendNetwork/FriendRequest';
import PostByLocation from '../../screens/Drawer/GlobalNetwork/PostByLocation';

const Stack = createStackNavigator();

const MainNavigator = () => {
  useEffect(() => {}, []);
  return (
    <Stack.Navigator screenOptions={NavigationOptions}>
      <Stack.Screen
        name={'TabNavigator'}
        component={TabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'NotificationScreen'}
        component={NotificationScreen}
      />
      <Stack.Screen
        name={'SettingNavigator'}
        component={SettingNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen name={'MyProfile'} component={MyProfile} />
      <Stack.Screen name={'EditProfile'} component={EditProfile} />
      <Stack.Screen name={'ChangePassword'} component={ChangePassword} />
      <Stack.Screen name={'FriendRequest'} component={FriendRequest} />
      <Stack.Screen name={'PostByLocation'} component={PostByLocation} />

    </Stack.Navigator>
  );
};

export default MainNavigator;
