import React from 'react'
import { View,Image } from 'react-native'
import { generalImages } from '../../../assets/images'
import RobotoRegular from '../../Texts/RobotoRegular'
import RippleHOC from '../../wrappers/Ripple'
import styles from './styles'
import ListLoader from '../../Loaders/ListLoader'
import ButtonLoading from '../../Loaders/ButtonLoading'

const FriendRequestCard=(props)=>{
    return(
        <View>
            {props.loader?
            
        <ListLoader/>

        :
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
    {props.request ?(
         props.removeFriendLoader?
         <ButtonLoading/>:
           <RippleHOC onPress={props.onPressRequest}>
           <RobotoRegular style={styles.requestBtnText}>{props.request}</RobotoRegular>
       </RippleHOC>
    )
    :
<View>
    {props.acceptLoader?
<ButtonLoading/>
    :
    <View style={styles.requestContainer}>
        
    <RippleHOC onPress={props.onAccept}>
    <RobotoRegular style={styles.acceptText}>Accept</RobotoRegular>
    </RippleHOC>
    <RippleHOC onPress={props.onReject}>
    <RobotoRegular style={styles.rejectText}>Decline</RobotoRegular>
    </RippleHOC>
</View>

}
   
    </View>
  
    
}
</View>

        }
       
    </View>
    )
}
export default FriendRequestCard