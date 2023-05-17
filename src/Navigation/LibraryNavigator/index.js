import React,{useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NavigationOptions from '../NavigationOptions';
import LibraryScreen from '../../screens/Drawer/Library/LibraryScreen';
import AddNewJournal from '../../screens/Drawer/Library/AddNewJournal';
import LibraryCollection from '../../screens/Drawer/Library/LibraryCollection';
import MyJournals from '../../screens/Drawer/Library/MyJournals';
import ViewAllEntries from '../../screens/Drawer/Library/ViewAllEntries';
import AddEntryInJournal from '../../screens/Drawer/Library/AddEntryInJournal';
import LibraryConnectContent from '../../screens/Drawer/Library/LibraryConnectContent';
import LibraryGlobalContent from '../../screens/Drawer/Library/LibraryGlobalContent';
const Stack = createStackNavigator();

const LibraryNavigator = () => {
  useEffect(() => {
  }, []);
  return (
    <Stack.Navigator screenOptions={NavigationOptions}>
      <Stack.Screen name={"LibraryScreen"} component={LibraryScreen}/>
      <Stack.Screen name={"AddNewJournal"} component={AddNewJournal}/>
      <Stack.Screen name={"LibraryCollection"} component={LibraryCollection}/>
      <Stack.Screen name={"MyJournals"} component={MyJournals}/>
      <Stack.Screen name={"ViewAllEntries"} component={ViewAllEntries}/>
      <Stack.Screen name={"AddEntryInJournal"} component={AddEntryInJournal}/>
      <Stack.Screen name={"LibraryConnectContent"} component={LibraryConnectContent}/>
      <Stack.Screen name={"LibraryGlobalContent"} component={LibraryGlobalContent}/>
    </Stack.Navigator>
  );
};

export default LibraryNavigator;