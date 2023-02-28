import React from 'react';
import {View} from 'react-native';
import DamionRegular from '../../../../components/Texts/DamionRegular';
import RobotoMedium from '../../../../components/Texts/RobotoMedium';
import RobotoRegular from '../../../../components/Texts/RobotoRegular';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
import styles from './styles';

const PaymentLogDetail = props => {
  const orderArray = [
    {
      title: 'Book Type',
      value: 'Year Book',
    },
    {
      title: 'Date Range',
      value: 'March 2020 - June 2021',
    },
    {
      title: 'Cover Design',
      value: 'Canvas',
    },
    {
      title: 'Page Design',
      value: 'Chalkboard - Dotted',
    },
    {
      title: 'Font Style',
      value: 'Classical - Poppins',
    },
    {
      title: 'Pages',
      value: '16px',
    },
    {
      title: 'Pages',
      value: '20',
    },
    {
      title: 'Quantity',
      value: '20',
    },
  ];

  const addressArray = [
    {
      title: 'Country',
      value: 'United State',
    },
    {
      title: 'State',
      value: 'California',
    },
    {
      title: 'Address',
      value: ' 1E3 IG4, Street ABC',
    },
    {
      title: 'Zip Code',
      value: '00000',
    },
  ];
  const changeBackgroundColor = () => {
    switch (props.route?.params?.status) {
      case 'Delivered':
        return styles.delivered;
      case 'In Process':
        return styles.inprocess;
      case 'Pending':
        return styles.pending;
      default:
        return styles.reported;
    }
  };
  return (
    <ScreenWrapper style={styles.container}>
      <View style={styles.alignContent}>
        <RobotoRegular style={styles.orderId}>
          Order ID: ORDER_001_BOOK
        </RobotoRegular>
        <RobotoRegular style={styles.placeText}>
          Placed On: January 31, 2022
        </RobotoRegular>
        <DamionRegular style={styles.priceText}>$6.00</DamionRegular>
      </View>
      <View style={styles.orderDetailContainer}>
        <RobotoMedium style={styles.orderDetailText}>Order Detail</RobotoMedium>
        <View style={[styles.statusContainer, changeBackgroundColor()]}>
          <RobotoRegular style={styles.pendingText}>
            {props.route?.params?.status}
          </RobotoRegular>
        </View>
      </View>
      <View style={styles.orderContainer}>
        {orderArray.map((item, index) => {
          return (
            <View style={styles.itemContainer}>
              <RobotoRegular style={styles.itemTitleText}>
                {item?.title}
              </RobotoRegular>
              <RobotoRegular style={styles.itemValueText}>
                {item?.value}
              </RobotoRegular>
            </View>
          );
        })}
      </View>
      <RobotoMedium style={styles.addressDetailText}>
        Address Details
      </RobotoMedium>

      <View style={styles.orderContainer}>
        {addressArray.map((item, index) => {
          return (
            <View style={styles.itemContainer}>
              <RobotoRegular style={styles.itemTitleText}>
                {item?.title}
              </RobotoRegular>
              <RobotoRegular style={styles.itemValueText}>
                {item?.value}
              </RobotoRegular>
            </View>
          );
        })}
      </View>
    </ScreenWrapper>
  );
};
export default PaymentLogDetail;
