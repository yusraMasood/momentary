import React, { useState } from 'react';

import styles from './styles';
import Ripple from '../../wrappers/Ripple'
import { Image,View } from 'react-native';
import PragmaticaRegular from '../../Texts/RobotoSemiBold';

const CustomButton = (props) => {
  const handleOnPress = () => {
    if (props.onPress) {
      props.onPress();
    }
  };
  return (
    <View style={[styles.alignContent, props.alignStyle]}>

    <Ripple style={[styles.container, props.style]} onPress={handleOnPress}>
      <Image source={props.img} style={styles.iconStyle}/>
        <PragmaticaRegular style={[styles.text, props.textStyle]}>{props.text}</PragmaticaRegular>
    </Ripple>
    </View>
  );
};

export default CustomButton;