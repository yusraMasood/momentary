import React from 'react'
import { View,StyleSheet } from 'react-native'
import RobotoRegular from '../../Texts/RobotoRegular'
import { colors } from '../../../utils/appTheme'
import { vh } from '../../../utils/dimensions'

const ErrorMessage=(props)=>{
    return(
      <RobotoRegular style={styles.errorText}>{props.error}</RobotoRegular>

    )
}
export default ErrorMessage

const styles =StyleSheet.create({
    errorText:{
        color: colors.general.red,
        fontSize: vh*1.9,
        textAlign: "center"
    }

})