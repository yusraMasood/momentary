import React,{useState} from 'react'
import { View,Image } from 'react-native'
import { icons, tabIcons } from '../../../../assets/images'
import RadioButton from '../../../../components/RadioButton'
import RippleHOC from '../../../../components/wrappers/Ripple'
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper'
import styles from './styles'

const Visiblity =()=>{
    const [itemIndex,setItemIndex] =useState(0)
    const locationArray=[
        {
            title:"Global Network",
        },
        {
            title:"Private",
        },
        {
            title:"My Network",
        },
    ]
    return(
        <ScreenWrapper style={styles.container}>
             {locationArray.map((item,index)=>{
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
export default Visiblity