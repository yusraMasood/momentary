import React from 'react'
import { View,Image } from 'react-native'
import { icons } from '../../../assets/images'
import RobotoRegular from '../../Texts/RobotoRegular'
import styles from './styles'

const DatePicker=()=>{
    return(
        <View style={styles.container}>
            <RobotoRegular style={styles.fromText}>From</RobotoRegular>
            <Image source={icons.greyCalendar} style={styles.calendarIcon}/>
        </View>

    )
}


export default DatePicker