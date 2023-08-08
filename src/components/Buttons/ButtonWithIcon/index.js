import React from 'react'
import { View,Image } from 'react-native'
import { drawerIcons, icons } from '../../../assets/images'
import PragmaticaRegular from '../../Texts/RobotoSemiBold'
import RippleHOC from '../../wrappers/Ripple'
import styles from './styles'

const ButtonWithIcon=(props)=>{
    return(
        <View style={[styles.alignButton,props.alignBtn]}>
        <RippleHOC onPress={props.onPress} style={[styles.buttonContainer,props.style]}>
            <Image source={props.icon} style={styles.iconStyle}/>
            <PragmaticaRegular style={[styles.buttonText,props.buttontextStyle]}>{props.buttonText}</PragmaticaRegular>

        </RippleHOC>
        </View>

    )
}
export default ButtonWithIcon