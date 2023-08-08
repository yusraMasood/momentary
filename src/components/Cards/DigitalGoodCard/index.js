import React from 'react';
import {Image, View} from 'react-native';
import {icons} from '../../../assets/images';
import DamionRegular from '../../Texts/DamionRegular';
import RobotoMedium from '../../Texts/RobotoMedium';
import RobotoRegular from '../../Texts/RobotoRegular';
import RippleHOC from '../../wrappers/Ripple';
import styles from './styles';

const DigitalGoodCard = props => {
  return (
    <View style={styles.container}>
<View  style={styles.innerContainer}>
  <View style={styles.goodsContainer}>
    <RobotoMedium style={styles.silverText}>Date</RobotoMedium>
    <RobotoRegular style={styles.dateText}>Sept 24, 2021</RobotoRegular>
  </View>
  <View style={styles.goodsContainer}>
    <RobotoMedium style={styles.silverText}>Digital Goods</RobotoMedium>
    <RobotoRegular style={styles.dateText}>Page Design</RobotoRegular>
  </View>
  <View style={styles.goodsContainer}>
    <RobotoMedium style={styles.silverText}>Amount</RobotoMedium>
    <DamionRegular style={styles.amountText}>$6.00</DamionRegular>
  </View>

</View>
<View  style={styles.innerContainer}>
  <View style={styles.goodsContainer}>
    <RobotoMedium style={styles.silverText}>Variations</RobotoMedium>
    <RobotoRegular style={styles.dateText}>Blackboard</RobotoRegular>
  </View>
  <View style={styles.goodsContainer}>
    <RobotoMedium style={styles.silverText}>Variation Types</RobotoMedium>
    <RobotoRegular style={styles.dateText}>Dotted</RobotoRegular>
  </View>
  <View style={styles.goodsContainer}>
    <RobotoMedium style={styles.silverText}> Purchases</RobotoMedium>
    <RobotoRegular style={styles.dateText}>200</RobotoRegular>
  </View>

</View>

</View>
  );
};

export default DigitalGoodCard;
