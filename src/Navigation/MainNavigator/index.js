import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NavigationOptions from '../NavigationOptions';
import TabNavigator from '../TabNavigator';
import NotificationScreen from '../../screens/Drawer/NotificationScreen';
import SettingNavigator from '../SettingNavigator';
import MyProfile from '../../screens/Drawer/Profile/MyProfile';
import EditProfile from '../../screens/Drawer/Profile/EditProfile';
import ChangePassword from '../../screens/Drawer/Profile/ChangePassword';
import FriendRequest from '../../screens/Drawer/FriendNetwork/FriendRequest';
import PostByLocation from '../../screens/Drawer/GlobalNetwork/PostByLocation';
import { setFont } from '../../state/auth';
import { useDispatch } from 'react-redux';

const Stack = createStackNavigator();

const MainNavigator = () => {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(setFont( {
      fontName:"Damion",
      style:` @font-face {
          font-family: 'Damion';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/damion/v14/hv-XlzJ3KEUe_YZkamw2.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
      }`
    })) 
  },[])
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
