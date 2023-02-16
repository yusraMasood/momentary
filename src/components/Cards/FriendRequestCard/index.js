import React from 'react'
import { View,Image } from 'react-native'
import { generalImages } from '../../../assets/images'
import RobotoRegular from '../../Texts/RobotoRegular'
import styles from './styles'

const FriendRequestCard=()=>{
    return(
        <View style={styles.friendContainer}>
            <View style={styles.imageWithNameContainer}>
        <View style={styles.imageContainer}>
            <Image source={generalImages.userImage} style={styles.userImage}/>
        </View>
        <View style={styles.nameContainer}> 
            <RobotoRegular style={styles.nameText}>Kamila Thompson </RobotoRegular>
            <RobotoRegular style={styles.jobText}>Content Writer</RobotoRegular>

        </View>
        </View>
        <View style={styles.requestContainer}>
            <RobotoRegular style={styles.acceptText}>Accept</RobotoRegular>
            <RobotoRegular style={styles.rejectText}>Decline</RobotoRegular>
        </View>
    </View>
    )
}
export default FriendRequestCard