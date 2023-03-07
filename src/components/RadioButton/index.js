import React, {useState} from 'react';
import {View, Image} from 'react-native';
import {icons} from '../../assets/images';
import RobotoRegular from '../Texts/RobotoRegular';
import {styles} from './styles';

const RadioButton = props => {
  return (
    <View>

    <View style={[styles.container, props.style]}>
      {props.title &&
      <View style={styles.titleContainer}>
        {props.image&&
        <Image
          source={props.image}
          style={[styles.icon,props.iconStyle]}
        />
        
        }
        <RobotoRegular style={styles.title}>{props.title}</RobotoRegular>
      </View>
      }
      <View style={styles.radioOuter}>
        <View style={props.focus && styles.radioInner} />
      </View>
      
    </View>
    {props.desc &&
    
    <RobotoRegular style={styles.descText}>{props.desc}</RobotoRegular>
    }

    </View>
  );
};
export default RadioButton;

// onPress={()=> props.setRadio(!props.radio)}/
