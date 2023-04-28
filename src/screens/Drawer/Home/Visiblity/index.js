import React,{useState} from 'react'
import { View,Image } from 'react-native'
import { icons, tabIcons } from '../../../../assets/images'
import RadioButton from '../../../../components/RadioButton'
import RippleHOC from '../../../../components/wrappers/Ripple'
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper'
import styles from './styles'
import { useDispatch } from 'react-redux'
import { saveSetting, useSetting } from '../../../../state/entry'

const Visiblity =()=>{
    const [itemValue,setItemValue] =useState("Private")
    const dispatch =useDispatch()
    const setting= useSetting()
    const locationArray=[
        "Global Network","Private","My Network",
    ]
    console.log(setting);
    return(
        <ScreenWrapper style={styles.container}>
             {locationArray.map((item,index)=>{
                const focus = item==itemValue


                return(
                    <RippleHOC key={index} onPress={()=> {
                        setItemValue(item)
                        dispatch(saveSetting({...setting,visiblity: item}))
                        }} style={styles.buttonContainer}>
                    <RadioButton title={item} focus={focus} image={item?.img} iconStyle={styles.iconStyle}/>
                    </RippleHOC>
                )
            })}

        </ScreenWrapper>
    )
}
export default Visiblity