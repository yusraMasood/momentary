import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
// import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import styles from './styles';
import HomeNavigator from '../HomeNavigator';
import {tabIcons} from '../../assets/images';
import RippleHOC from '../../components/wrappers/Ripple';
import ChatNavigator from '../ChatNavigator';
import ProfileNavigator from '../ProfileNavigator';
import NotificationNavigator from '../NotificationNavigator';
import CartNavigator from '../CartNavigator';

const Tab = createBottomTabNavigator();

const icons = {
  ChatNavigator: {icon: tabIcons.chat},
  FriendNavigator: {icon: tabIcons.users},
  HomeNavigator: {icon: tabIcons.menu},
  ProfileNavigator: {icon: tabIcons.person},
  NotificationNavigator: {icon: tabIcons.notification},

  // MealNavigator: {icon: tabIcons.planning},
  // MySessionNavigator: {icon: tabIcons.calendar},
};

const TabNavigator = props => {
  return (
    <Tab.Navigator
      tabBarPosition="bottom"
      initialRouteName="HomeNavigator"
      screenOptions={{swipeEnabled: false, headerShown: false, tabBarShowLabel:false}}
      // tabBar={tabProps => <MyTabBar {...tabProps} {...props} />}
    >
      <Tab.Screen
        name="ProfileNavigator"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={tabIcons.person}
                style={[styles.iconStyle, focused && styles.focusIcon]}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="ChatNavigator"
        component={ChatNavigator}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={tabIcons.chat}
                style={[styles.iconStyle, focused && styles.focusIcon]}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="HomeNavigator"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={styles.homeContainer}>
                <Image
                  source={tabIcons.menu}
                  style={[styles.homeIcon]}
                />
              </View>
            );
          },
        }}
      />
            <Tab.Screen
        name="CartNavigator"
        component={CartNavigator}
        options={{
          // tabBarBadge:2,
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={tabIcons.chat}
                style={[styles.iconStyle, focused && styles.focusIcon]}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="NotificationNavigator"
        component={NotificationNavigator}
        options={{
          // tabBarBadge:2,
          tabBarIcon: ({focused}) => {
            return (
              <View>
              <Image
                source={tabIcons.notification}
                style={[styles.iconStyle, focused && styles.focusIcon]}
              />
              <View style={styles.notificationBadge}/>
              </View>

            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const MyTabBar = ({state, navigation}) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;

        const onPress = () => {
          if (!isFocused) {
            navigation.navigate(route.name);
          }
        };
        return (
          <View key={index}>
            {route?.name == 'HomeNavigator' ? (
              <RippleHOC onPress={onPress} style={styles.homeContainer}>
                <Image
                  source={icons[route?.name]?.icon}
                  style={[styles.homeIcon]}
                  resizeMode="contain"
                />
              </RippleHOC>
            ) : (
              <RippleHOC onPress={onPress} style={[styles.tabItem]}>
                <Image
                  source={icons[route?.name]?.icon}
                  style={[styles.iconStyle, isFocused && styles.focusIcon]}
                  resizeMode="contain"
                />
              </RippleHOC>
            )}
          </View>
        );
      })}
    </View>
  );
};


export default TabNavigator;
