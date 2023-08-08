import React,{useState} from 'react'
import { View } from 'react-native'
import { icons, tabIcons } from '../../../../assets/images'
import RadioButton from '../../../../components/RadioButton'
import RippleHOC from '../../../../components/wrappers/Ripple'
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper'
import styles from './styles'

const HomeFeature=()=>{
    const [itemIndex,setItemIndex] =useState(0)
    const featureArray=[
        {
            title:"New/Resume Entry",
            img: icons.editEntry
        },
        {
            title:"Friends",
            img: tabIcons.friend
        },
        {
            title:"Global Network",
            img:  tabIcons.global
        },
        {
            title:"Library",
            img:  icons.openBook
        },
        {
            title:"Store",
            img:  icons.book
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

export default HomeFeature