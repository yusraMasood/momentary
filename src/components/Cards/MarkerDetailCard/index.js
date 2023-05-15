import React,{useState} from 'react'
import { View ,Image} from 'react-native'
import { icons } from '../../../assets/images'
import RippleHOC from '../../wrappers/Ripple'
import { linearColors } from '../../../utils/appTheme'
import styles from './styles'
import LinearGradient from 'react-native-linear-gradient'
import { vh } from '../../../utils/dimensions'

const MarkerDetailCard=(props)=>{
    const [showDetail,setShowDetail] =useState(false)

    return(
        <View style={{backgroundColor: "red",heigh:vh*45}}>
              <Image source={icons.mapPinAnimation} style={styles.markerIcon} />
            <RippleHOC onPress={()=> setShowDetail(!showDetail)} style={styles.circleOuter}>
              <LinearGradient colors={linearColors.yellow} style={styles.circleImg}></LinearGradient>
            </RippleHOC>
        </View>
    )
}
export default MarkerDetailCard