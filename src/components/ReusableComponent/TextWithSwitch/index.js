import React from 'react'
import { View,Image } from 'react-native'
import { icons } from '../../../assets/images'
import CustomGoldenSwitch from '../../Buttons/CustomGoldenSwitch'
import RobotoRegular from '../../Texts/RobotoRegular'
import RippleHOC from '../../wrappers/Ripple'
import styles from './styles'

const TextWithSwitch=(props)=>{
    return(
        <View>
            <RippleHOC onPress={props.onPressPageDesign} style={styles.settingContainer}>
        <RobotoRegular style={styles.pageTxt}>{props.text}</RobotoRegular>
        <CustomGoldenSwitch/>
      </RippleHOC>

        </View>

    )
}
export default TextWithSwitch