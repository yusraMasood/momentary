import React,{useState} from 'react'
import { View } from 'react-native'
import { icons, tabIcons } from '../../../../assets/images'
import RadioButton from '../../../../components/RadioButton'
import RippleHOC from '../../../../components/wrappers/Ripple'
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper'
import styles from './styles'

const AppLock=()=>{
    const [itemIndex,setItemIndex] =useState(0)
    const featureArray=[
        {
            title:"Immediate",
        },
        {
            title:"After 5 Minutes",
        },
        {
            title:"After 30 Minutes",
        },
        {
            title:"After 60 Minutes",
        },
        {
            title:"Never",
        },
    ]
    return(
        <ScreenWrapper style={styles.container}>
            {featureArray.map((item,index)=>{
                const focus = index==itemIndex
                return(
                    <RippleHOC key={index} onPress={()=> setItemIndex(index)} style={styles.buttonContainer}>
                    <RadioButton title={item?.title} focus={focus} image={item?.img} iconStyle={styles.iconStyle}/>
                    </RippleHOC>
                )
            })}

        </ScreenWrapper>
    )
}

export default AppLock