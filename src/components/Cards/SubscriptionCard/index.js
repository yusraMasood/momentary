import React from 'react';
import {Image, View} from 'react-native';
import {icons} from '../../../assets/images';
import DamionRegular from '../../Texts/DamionRegular';
import RobotoMedium from '../../Texts/RobotoMedium';
import RobotoRegular from '../../Texts/RobotoRegular';
import RippleHOC from '../../wrappers/Ripple';
import styles from './styles';

const SubscriptionCard = props => {
  return (
<View style={styles.container}>
  <View>
    <RobotoMedium style={styles.silverText}>Silver</RobotoMedium>
    <RobotoRegular style={styles.dateText}>Sept 24, 2021</RobotoRegular>
  </View>
  <View>
    <RobotoMedium style={styles.silverText}>Plans Purchased</RobotoMedium>
    <RobotoRegular style={styles.dateText}>200</RobotoRegular>
  </View>
  <View>
    <RobotoMedium style={styles.silverText}>Silver</RobotoMedium>
    <DamionRegular style={styles.amountText}>$6.00</DamionRegular>
  </View>

</View>
  );
};

export default SubscriptionCard;
