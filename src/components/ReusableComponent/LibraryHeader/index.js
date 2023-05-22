import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { FlatList, View,Image } from 'react-native'
import styles from './styles'
import RobotoMedium from '../../Texts/RobotoMedium'
import RippleHOC from '../../wrappers/Ripple'
import RobotoRegular from '../../Texts/RobotoRegular'

const LibraryHeader=(props)=>{
    return(

            <View style={styles.headingContainer}>
                <RobotoMedium style={styles.headingText}>{props?.heading}</RobotoMedium>
               {props.view?null:
               
                <RippleHOC onPress={props.onPress}>
                <RobotoRegular style={styles.viewText}>View All</RobotoRegular>
                </RippleHOC>
               }
            </View>
    )
}
export default LibraryHeader