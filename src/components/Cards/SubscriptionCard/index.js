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
  {props.subscriptionArray.map((item,index)=>{
    return(
      <View>
      <RobotoMedium style={styles.silverText}>{item?.title}</RobotoMedium>
      {item.price ?  <DamionRegular style={styles.amountText}>{item.value}</DamionRegular>
    :
    <RobotoRegular style={styles.dateText}>{item?.value}</RobotoRegular>  
    }
    
    </View>

    )
  })}
{/*  
  <View>
    <RobotoMedium style={styles.silverText}>Plans Purchased</RobotoMedium>
    <RobotoRegular style={styles.dateText}>200</RobotoRegular>
  </View>
  <View>
    <RobotoMedium style={styles.silverText}>Silver</RobotoMedium>
    <DamionRegular style={styles.amountText}>$6.00</DamionRegular>
  </View> */}

</View>
  );
};

export default SubscriptionCard;
