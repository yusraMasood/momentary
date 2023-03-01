import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Image} from 'react-native';
import {icons} from '../../../assets/images';
import CustomButton from '../../Buttons/CustomButton';
import DamionRegular from '../../Texts/DamionRegular';
import RobotoMedium from '../../Texts/RobotoMedium';
import RobotoRegular from '../../Texts/RobotoRegular';
import styles from './styles';

const SubscriptionPlanCard = () => {
  const points = [1, 2, 3, 4, 5,6,7];
  const navigation =useNavigation()
  return (
    <View style={styles.container}>
 <View style={styles.headerContainer}>
    <View>
    <View style={styles.diamondTextContainer}>
        <Image source={icons.diamond} style={styles.imgStyle} />
     <View>
          <RobotoMedium style={styles.proText}>Pro </RobotoMedium>
          <View style={styles.servicesContainer}>
          <RobotoMedium style={styles.numberText}>05 {" "}</RobotoMedium>

          <RobotoRegular style={styles.servicesText}>Services</RobotoRegular>
          </View>
        </View>
        </View>
        </View>
        <DamionRegular style={styles.priceText}>$25</DamionRegular>
        </View>
        {points.map((item, index) => {
            return(
          <View style={styles.pointContainer}>
            <Image source={icons.check} style={styles.tickImg} />
            <RobotoRegular style={styles.pointText}>Unlimited entries per day</RobotoRegular>
          </View>
            )
        })}
        <CustomButton alignStyle={styles.alignBtn} text={"Choose Plan"}
        style={styles.button}
        onPress={()=> navigation.navigate("PaymentScreen")}
        textStyle={styles.btnText}
        />
    </View>
  );
};

export default SubscriptionPlanCard;
