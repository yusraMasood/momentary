import React from 'react'
import { View,Image } from 'react-native'
import { sampleImages } from '../../../assets/images'
import styles from './styles'


const UserImage=(props)=>{
    return(
        <View>
            <Image source={sampleImages.userImage} style={[styles.userImage, props.imageStyle]}/>
            <View style={[styles.userIsOnline, props.circleContainer]}/>

        </View>
    )
}
export default UserImage