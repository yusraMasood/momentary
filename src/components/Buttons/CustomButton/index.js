import React, {useState} from 'react';

import styles from './styles';
import {ActivityIndicator, Image, Pressable, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import RippleHOC from '../../wrappers/Ripple';
import { colors, linearColors } from '../../../utils/appTheme';
import RobotoBold from '../../Texts/RobotoBold';

const CustomButton = props => {
  const handleOnPress = () => {
    if (props.onPress) {
      props.onPress();
    }
  };
  return (
    <View style={[styles.alignContent, props.alignStyle]}>
       <Pressable onPress={handleOnPress} disabled={props.disabled}
       style={({pressed})=>[pressed &&{backgroundColor: colors.text.grey}]}
      >
        <LinearGradient colors={props.colors?props.colors:linearColors.yellow} style={[styles.container, props.style]}>
       
          <RobotoBold style={[styles.text, props.textStyle]}>
            {props.text}
          </RobotoBold>
        
        </LinearGradient>
        </Pressable>
     
    </View>
  );
};

export default CustomButton;
