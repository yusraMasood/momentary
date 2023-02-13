import React,{useRef,useEffect,useCallback} from 'react';
import {useDrawerProgress} from '@react-navigation/drawer';
import {StyleSheet,View} from 'react-native';
import Animated from 'react-native-reanimated';
import styles from './styles';
import { vh, vw } from '../../../utils/dimensions';

const DrawerScreenWrapper = props => {
  const ref = useRef();

  // useEffect(() => {
  //   // on mount
  //   ref.current.capture().then(uri => {
  //     console.log("do something with ", uri);
  //   });
  // }, [props.navigation]);

  const progress = useDrawerProgress();

  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 0.8],
    outputRange: [1, 0.85],
  });
  const translateX = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, -8 * vw],
  });
  const translateY = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 8.5 * vh],
  });
  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 0 * vw],
  });

  const animatedStyles = {
    borderRadius: borderRadius,
    transform: [{scale}, {translateX},{translateY}],
  };

  return (
    <View style={{flex:1}}>
      <View style={styles.outerContainer}/>
      <Animated.View style={[styles.stack, animatedStyles]}>
        {props.children}
      </Animated.View>
      </View>
  );
};
export default DrawerScreenWrapper;