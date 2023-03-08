import React,{useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NavigationOptions from '../NavigationOptions';
import LibraryScreen from '../../screens/Drawer/Library/LibraryScreen';
import AddNewJournal from '../../screens/Drawer/Library/AddNewJournal';
import LibraryCollection from '../../screens/Drawer/Library/LibraryCollection';
import MyJournals from '../../screens/Drawer/Library/MyJournals';
import ViewAllEntries from '../../screens/Drawer/Library/ViewAllEntries';
import AddEntryInJournal from '../../screens/Drawer/Library/AddEntryInJournal';
import LibraryFavouriteContent from '../../screens/Drawer/Library/LibraryFavouriteContent';
import LibraryFavouritePost from '../../screens/Drawer/Library/LibraryFavouritePost';
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
      <Stack.Screen name={"LibraryFavouriteContent"} component={LibraryFavouriteContent}/>
      <Stack.Screen name={"LibraryFavouritePost"} component={LibraryFavouritePost}/>
    </Stack.Navigator>
  );
};

export default LibraryNavigator;