import React,{useState} from 'react'
import { View } from 'react-native'
import { icons, tabIcons } from '../../../../assets/images'
import RadioButton from '../../../../components/RadioButton'
import RippleHOC from '../../../../components/wrappers/Ripple'
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper'
import styles from './styles'

const SyncModes=()=>{
    const [itemIndex,setItemIndex] =useState(0)
    const featureArray=[
        {
            title:"Online/Pull",
            desc:"Your experience will update whenever you open Momentary. You will not receive notifications unless you are actively using the app. "
        },
        {
            title:"Online/Push",
            desc:"Your experience will update itself in the background even when Momentary is closed. You will receive push notifications if you have them enabled. "
        },
        {
            title:"Offline/Sync",
            desc:"Your content and the most recent content from your friends will be downloaded to your device. Any entries or journals you create will uploaded to Momentary and your friend content will be updated when you hit the sync button in your app.  "
        },
    ]
    return(
        <ScreenWrapper style={styles.container}>
            {featureArray.map((item,index)=>{
                const focus = index==itemIndex
                return(
                    <RippleHOC key={index} onPress={()=> setItemIndex(index)} style={styles.buttonContainer}>
                    <RadioButton title={item?.title} 
                    desc={item?.desc}
                    focus={focus} image={item?.img} iconStyle={styles.iconStyle}/>
                    </RippleHOC>
                )
            })}

        </ScreenWrapper>
    )
}

export default SyncModes