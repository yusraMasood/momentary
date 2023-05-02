import React from 'react'
import { View,Image } from 'react-native'
import { generalImages } from '../../../assets/images'
import RobotoRegular from '../../Texts/RobotoRegular'
import RippleHOC from '../../wrappers/Ripple'
import styles from './styles'

const FriendRequestCard=(props)=>{
    return(
        <View  style={styles.friendContainer}>
            <RippleHOC onPress={props.onPress}  style={styles.imageWithNameContainer}>
        <View style={styles.imageContainer}>
            <Image source={props.image?{uri: props.image}: generalImages.userImage} style={styles.userImage}/>
        </View>
        <View style={styles.nameContainer}> 
            <RobotoRegular style={styles.nameText}>{props.name}</RobotoRegular>
            <RobotoRegular style={styles.jobText}>{props.job}</RobotoRegular>

        </View>
        </RippleHOC>
        {props.request ?
          <RippleHOC onPress={props.onPressRequest}>
          <RobotoRegular style={styles.requestBtnText}>{props.request}</RobotoRegular>
      </RippleHOC>:

        <View style={styles.requestContainer}>
            <RippleHOC onPress={props.onAccept}>
            <RobotoRegular style={styles.acceptText}>Accept</RobotoRegular>
            </RippleHOC>
            <RippleHOC>
            <RobotoRegular style={styles.rejectText}>Decline</RobotoRegular>
            </RippleHOC>
        </View>
      
        
    }
    </View>
    )
}
export default FriendRequestCard