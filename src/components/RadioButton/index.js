import React, { useState } from 'react';
import { View,Image } from 'react-native';
import { icons } from '../../assets/images';
import RecoletaDemoRegular from '../Texts/RobotoMedium';
import RippleHOC from '../wrappers/Ripple';
import { styles } from './styles';

const RadioButton = (props) => {

    return (
        <View style={styles.outerContainer}>
        <View style={[styles.container, props.style]}>
            <RippleHOC  style={styles.radioOuter}>
                {/* <View style={props.radio && styles.radioInner} /> */}
            </RippleHOC>
            <RecoletaDemoRegular style={styles.title}>{props.item}</RecoletaDemoRegular>

        </View>
        <Image source={icons.creditCard} style={styles.cardStyle}/>
        </View>
    )
}
export default RadioButton

// onPress={()=> props.setRadio(!props.radio)}/