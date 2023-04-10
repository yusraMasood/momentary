import React from 'react'
import { ActivityIndicator, StyleSheet,View} from 'react-native'
import { vh } from '../../../utils/dimensions'
import { colors } from '../../../utils/appTheme'


const ButtonLoading=()=>{
    return(
        <View style={styles.indicatorContainer}>
            <ActivityIndicator size={vh*4} color={colors.themeColor.yellow} />

        </View>
    )
    
}
export default ButtonLoading

const styles =StyleSheet.create({
    indicatorContainer:{
        marginVertical: vh*2
    }
})