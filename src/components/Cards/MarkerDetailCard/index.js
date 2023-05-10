import React,{useState} from 'react'
import { View ,Image} from 'react-native'
import { icons } from '../../../assets/images'
import RippleHOC from '../../wrappers/Ripple'
import { linearColors } from '../../../utils/appTheme'
import styles from './styles'

const MarkerDetailCard=()=>{
    const [showDetail,setShowDetail] =useState(false)
    return(
        <View>
              <Image source={icons.mapLoc} style={styles.markerIcon} />
            <RippleHOC onPress={()=> setShowDetail(!showDetail)} style={styles.circleOuter}>
              <LinearGradient colors={linearColors.yellow} style={styles.circleImg}></LinearGradient>
            </RippleHOC>
        </View>
    )
}
export default MarkerDetailCard