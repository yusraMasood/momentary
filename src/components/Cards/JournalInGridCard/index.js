import React from 'react'
import { View,Image } from 'react-native'
import { generalImages } from '../../../assets/images'
import RobotoMedium from '../../Texts/RobotoMedium'
import RobotoRegular from '../../Texts/RobotoRegular'
import RippleHOC from '../../wrappers/Ripple'
import styles from './styles'
import moment from 'moment'

const JournalInGridCard=(props)=>{
    return(
        <RippleHOC onPress={props.onPress} style={styles.cardContainer}>
        {/* <View style={styles.journalContainer}> */}
          
        {/* </View> */}
        <View style={styles.bookImageContainer}>
          <Image source={props.image?{uri: props.image}:generalImages.books} style={styles.bookImage} />
        </View>
        <RobotoMedium style={styles.headingText}>
            {props.title}
          </RobotoMedium>
          <RobotoRegular style={styles.dateText}> {moment(props.createdAt).format("MMMM DD, 'YY")}
          {/* January 12, '22 */}
          </RobotoRegular>
      </RippleHOC>
    )
}

export default JournalInGridCard