import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SettingScreen from '../../screens/Drawer/Settings/SettingScreen';
import NavigationOptions from '../NavigationOptions';
import Account from '../../screens/Drawer/Settings/Account';
import AppUI from '../../screens/Drawer/Settings/AppUI';
import Legacy from '../../screens/Drawer/Settings/Legacy';
import Notification from '../../screens/Drawer/Settings/Notification';
import Privacy from '../../screens/Drawer/Settings/Privacy';
import Support from '../../screens/Drawer/Settings/Support';
import SupportDetails from '../../screens/Drawer/Settings/SupportDetails';
import ContactUs from '../../screens/Drawer/Settings/ContactUs';
import FrequentlyAskedQuestions from '../../screens/Drawer/Settings/FrequentlyAskedQuestions';
import SubscriptionLogs from '../../screens/Drawer/Settings/SubscriptionLogs';
import PaymentLogs from '../../screens/Drawer/Settings/PaymentLogs';
import PaymentLogDetail from '../../screens/Drawer/Settings/PaymentLogDetail';
import AuditLogs from '../../screens/Drawer/Settings/AuditLogs';
import HomeFeature from '../../screens/Drawer/Settings/HomeFeature';
import SyncModes from '../../screens/Drawer/Settings/SyncModes';
import AppLock from '../../screens/Drawer/Settings/AppLock';
import LegacyDetermination from '../../screens/Drawer/Settings/LegacyDetermination';
import LegacyContact from '../../screens/Drawer/Settings/LegacyContact';
import ViewLegacyContact from '../../screens/Drawer/Settings/ViewLegacyContact';

const Stack = createStackNavigator();

const SettingNavigator = () => {
  return (
    <Stack.Navigator screenOptions={NavigationOptions}>
        <Stack.Screen name="SettingScreen" component={SettingScreen} />
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="AppUI" component={AppUI} />
        <Stack.Screen name="Legacy" component={Legacy} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="Privacy" component={Privacy} />
        <Stack.Screen name="Support" component={Support} />
        <Stack.Screen name="SupportDetails" component={SupportDetails} />
        <Stack.Screen name="ContactUs" component={ContactUs} />
        <Stack.Screen name="FrequentlyAskedQuestions" component={FrequentlyAskedQuestions} />
        <Stack.Screen name="SubscriptionLogs" component={SubscriptionLogs} />
        <Stack.Screen name="PaymentLogs" component={PaymentLogs} />
        <Stack.Screen name="PaymentLogDetail" component={PaymentLogDetail} />
        <Stack.Screen name="AuditLogs" component={AuditLogs} />
        <Stack.Screen name="HomeFeature" component={HomeFeature} />
        <Stack.Screen name="SyncModes" component={SyncModes} />
        <Stack.Screen name="AppLock" component={AppLock} />
        <Stack.Screen name="LegacyDetermination" component={LegacyDetermination} />
        <Stack.Screen name="LegacyContact" component={LegacyContact} />
        <Stack.Screen name="ViewLegacyContact" component={ViewLegacyContact} />
    </Stack.Navigator>
  );
};

export default SettingNavigator;
