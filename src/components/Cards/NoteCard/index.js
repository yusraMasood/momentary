import React from 'react'
import { View,Image } from 'react-native'
import { icons } from '../../../assets/images'
import RobotoMedium from '../../Texts/RobotoMedium'
import RobotoRegular from '../../Texts/RobotoRegular'
import RippleHOC from '../../wrappers/Ripple'
import styles from './styles'


const NoteCard=(props)=>{
    const even=props.index%2==0;
    return(
        <RippleHOC onPress={props.onPress} style={[styles.noteContainer, props.listStyle]}>
        <View style={styles.alignPin}>
          <Image source={icons.pinned} style={styles.pinIcon} />
        </View>
        <RobotoMedium style={styles.healthyText}>Healthy</RobotoMedium>
        <RobotoRegular style={styles.descText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan{' '}
        </RobotoRegular>
        <View style={styles.hashtagContainer}>
          <RobotoMedium style={styles.hashtagText}>
            #trends #fashion
          </RobotoMedium>
          <Image source={icons.delete} style={[styles.deleteIcon,props.deleteIconStyle]} />
        </View>
      </RippleHOC>
    )
}
export default NoteCard