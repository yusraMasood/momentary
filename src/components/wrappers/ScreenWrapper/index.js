import React from 'react';
import {View} from 'react-native';
import styles from './styles';

const ScreenWrapper = props => {
  return <View style={[styles.container, props.style]}>{props.children}</View>;
};

export default ScreenWrapper;
