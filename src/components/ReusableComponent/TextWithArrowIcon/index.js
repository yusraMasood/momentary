import React from 'react'
import { View,Image } from 'react-native'
import { icons } from '../../../assets/images'
import RobotoRegular from '../../Texts/RobotoRegular'
import RippleHOC from '../../wrappers/Ripple'
import styles from './styles'

const TextWithArrowIcon=(props)=>{
    return(
        <View>
            <RippleHOC onPress={props.onPressPageDesign} style={[styles.settingContainer,props.style]}>
        <RobotoRegular style={styles.pageTxt}>{props.text}</RobotoRegular>
        <View style={styles.rightContainer}>
        {props.textOpt &&
          <RobotoRegular style={styles.privateText}>
         {props.textOpt}
        </RobotoRegular>
        }
        {props.textonly?null:
         <Image source={props.icon?props.icon:icons.rightArrow} style={[styles.arrowStyle,props.iconStyle]} />
        } 
        </View>
      </RippleHOC>

        </View>

    )
}
export default TextWithArrowIcon