import React from 'react'
import { View,Image } from 'react-native'
import { icons } from '../../../assets/images'
import RobotoMedium from '../../Texts/RobotoMedium'
import RobotoRegular from '../../Texts/RobotoRegular'
import RippleHOC from '../../wrappers/Ripple'
import styles from './styles'


const BookPrintingCard=(props)=>{
    const changeBackgroundColor = () => {
        switch (props.status) {
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
    return(
      
        <RippleHOC onPress={props.onPress} style={styles.container}>
          <View style={styles.arrowContainer}>
          <Image source={icons.arrowLeft} style={styles.leftIcon}/>

          </View>
          <View style={styles.innerContainer}>
        <View>
          <RobotoMedium style={styles.silverText}>Order ID: 12</RobotoMedium>
          <RobotoRegular style={styles.dateText}>January 31, 2022</RobotoRegular>
        </View>
        <View>
          <RobotoMedium style={styles.silverText}>Book Type</RobotoMedium>
          <RobotoRegular style={styles.dateText}>Year Book</RobotoRegular>
        </View>
     <View style={[styles.statusContainer,changeBackgroundColor()]}>
        <RobotoRegular style={styles.pendingText}>{props.status}</RobotoRegular>
     </View>
     </View>
      
      </RippleHOC>

    )
}
export default BookPrintingCard


