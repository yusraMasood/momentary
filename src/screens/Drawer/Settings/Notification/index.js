import React,{useRef} from 'react'
import { View } from 'react-native'
import TextWithSwitch from '../../../../components/ReusableComponent/TextWithSwitch'
import RobotoMedium from '../../../../components/Texts/RobotoMedium'
import RobotoRegular from '../../../../components/Texts/RobotoRegular'
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper'
import styles from './styles'

const Notification=()=>{
    

    return(
        <ScreenWrapper style={styles.container}>
            <RobotoMedium style={styles.mainHeading}>In App Notifications</RobotoMedium>
            <RobotoRegular style={styles.friendText}>Friends and Sharing </RobotoRegular>
            <TextWithSwitch text={"Friend Requests"} textStyle={styles.switchText} style={styles.switchContainer}/>
            <TextWithSwitch text={"Entry Shared with You"} textStyle={styles.switchText} style={styles.switchContainer}/>
            <TextWithSwitch text={"Journal Shared with You"} textStyle={styles.switchText} style={styles.switchContainer}/>
            <TextWithSwitch text={"Global Content Shared with You"} textStyle={styles.switchText} style={styles.switchContainer}/>
            <RobotoRegular style={styles.friendText}>Account Security </RobotoRegular>
            <TextWithSwitch text={"Login Attempts Detected"} textStyle={styles.switchText} style={styles.switchContainer}/>
            <RobotoRegular style={styles.friendText}>Momentary Announcements </RobotoRegular>
            <TextWithSwitch text={"New Data Security Audit"} textStyle={styles.switchText} style={styles.switchContainer}/>
            <TextWithSwitch text={"Policy Document Updates"} textStyle={styles.switchText} style={styles.switchContainer}/>
            <TextWithSwitch text={"Patch Notes"} textStyle={styles.switchText} style={styles.switchContainer}/>


       


        </ScreenWrapper>
    )
}
export default Notification