import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
// import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import styles from './styles';
import HomeNavigator from '../HomeNavigator';
import {tabIcons} from '../../assets/images';
import RippleHOC from '../../components/wrappers/Ripple';
import {colors} from '../../utils/appTheme';
import FriendNavigator from '../FriendNavigator';
import GlobalNavigator from '../GlobalNavigator';
import LibraryNavigator from '../LibraryNavigator';
import StoreNavigator from '../StoreNavigator';
import {vh} from '../../utils/dimensions';

const Tab = createMaterialTopTabNavigator();

const TabNavigator = props => {
  return (
    <Tab.Navigator
      tabBarPosition="bottom"
      initialRouteName="HomeNavigator"
      screenOptions={{
        tabBarIndicatorStyle: {opacity: 0},
        swipeEnabled: false,
        headerShown: false,
        tabBarShowLabel: false,

        // tabBarIndicator:false,
        tabBarStyle: {backgroundColor: colors.general.black, height: vh * 7},
      }}
      style={{backgroundColor: colors.general.black}}>
      <Tab.Screen
        name="HomeNavigator"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={tabIcons.home}
                style={[styles.icon, focused && styles.focusIcon]}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="FriendNavigator"
        component={FriendNavigator}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={tabIcons.friend}
                style={[styles.iconLibrary, focused && styles.focusIcon]}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="GlobalNavigator"
        component={GlobalNavigator}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={tabIcons.global}
                style={[styles.iconLibrary, focused && styles.focusIcon]}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="LibraryNavigator"
        component={LibraryNavigator}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={tabIcons.library}
                style={[styles.iconLibrary, focused && styles.focusIcon]}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="StoreNavigator"
        component={StoreNavigator}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={tabIcons.store}
                style={[styles.iconLibrary, focused && styles.focusIcon]}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
