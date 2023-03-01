import React from 'react';
import {Image, View} from 'react-native';
import {icons} from '../../../assets/images';
import DamionRegular from '../../Texts/DamionRegular';
import RobotoMedium from '../../Texts/RobotoMedium';
import RobotoRegular from '../../Texts/RobotoRegular';
import RippleHOC from '../../wrappers/Ripple';
import styles from './styles';

const AuditCard = props => {
  return (
<View style={styles.container}>

     <RobotoMedium style={styles.deviceName}>Device Name Here</RobotoMedium>
     <View style={styles.dateContainer}>
        <RobotoRegular style={styles.dateText}>mm/dd/yyyy</RobotoRegular>
        <RobotoRegular style={styles.dateText}>HH:MM:SS</RobotoRegular>
     </View>
</View>
  );
};

export default AuditCard;
