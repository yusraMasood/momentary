import React, {useEffect} from 'react';
import {StatusBar, View} from 'react-native';
import Navigation from './src/Navigation';
// import AnimatedSplash from 'react-native-animated-splash';

const App = () => {
  // useEffect(() => {
  //   AnimatedSplash.hide();
  // }, []);

  return (
    <View style={{flex: 1}}>
      <StatusBar
        barStyle="dark-content"
        translucent={true}
        backgroundColor="transparent"
      />
      <Navigation />
    </View> 
  );
};
export default App;
