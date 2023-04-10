import React, {useEffect} from 'react';
import {StatusBar, View} from 'react-native';
import Navigation from './src/Navigation';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import AnimatedSplash from 'react-native-animated-splash';
import { persistor, store } from './src/state';

const App = () => {
  useEffect(() => {
    AnimatedSplash.hide();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
    <View style={{flex: 1}}>
      <StatusBar
        barStyle="dark-content"
        translucent={true}
        backgroundColor="transparent"
      />
      <Navigation />
    </View> 
    </PersistGate>
    </Provider>
  );
};
export default App;
