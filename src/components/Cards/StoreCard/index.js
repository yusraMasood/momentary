import React from 'react'
import RobotoMedium from '../../Texts/RobotoMedium'
import RobotoRegular from '../../Texts/RobotoRegular'
import RippleHOC from '../../wrappers/Ripple'
import styles from './syles'

const StoreCard=(props)=>{
    return(
        <RippleHOC  onPress={props.onPress} style={[styles.storeCard, props.style]}>
        <RobotoMedium style={styles.storeText}>{props?.name}</RobotoMedium>
        {props.desc&&<RobotoRegular style={styles.descText}>{props?.desc}</RobotoRegular>}
    </RippleHOC>
    )
}

export default StoreCard