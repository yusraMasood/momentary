import React from 'react'
import { ActivityIndicator, StyleSheet,View} from 'react-native'
import { vh } from '../../../utils/dimensions'
import { colors } from '../../../utils/appTheme'


const ButtonLoading=(props)=>{
    return(
        <View style={[styles.indicatorContainer,props.style]}>
            <ActivityIndicator size={20} color={colors.themeColor.yellow} />

        </View>
    )
    
}
export default ButtonLoading

const styles =StyleSheet.create({
    indicatorContainer:{
        marginVertical: vh*2,
        // backgroundColor: "red"
    }
})