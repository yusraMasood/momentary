import React from 'react';
import {View} from 'react-native';
import CustomButton from '../../../../components/Buttons/CustomButton';
import ContentDataComponent from '../../../../components/ReusableComponent/ContentDataComponent';
import DamionRegular from '../../../../components/Texts/DamionRegular';
import RobotoMedium from '../../../../components/Texts/RobotoMedium';
import RobotoRegular from '../../../../components/Texts/RobotoRegular';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
import {addressArray, cardDetailArray} from '../../../../utils/data';
import styles from './styles';

const BookPrintingOrderSummary = () => {
  return (
    <ScreenWrapper style={styles.container}>
      <RobotoRegular style={styles.orderIdText}>
        Order ID: ORDER_001_BOOK
      </RobotoRegular>
      <DamionRegular style={styles.priceText}>$6.09</DamionRegular>
      <RobotoMedium style={styles.billingText}>Order Detail</RobotoMedium>
      <ContentDataComponent array={cardDetailArray} />
      <RobotoMedium style={[styles.billingText,styles.addressText]}>Address Details</RobotoMedium>
      <ContentDataComponent array={addressArray} />
      <CustomButton text={'Save Receipt'}  alignStyle={styles.btnStyle}/>
      
    </ScreenWrapper>
  );
};

export default BookPrintingOrderSummary;
