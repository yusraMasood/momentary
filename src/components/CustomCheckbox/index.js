import React,{useState} from 'react';
import { View,Image, Text} from 'react-native';
import {styles} from './styles';
import RippleHOC from '../wrappers/Ripple';
import { icons } from '../../assets/images';
import EuclidCircularARegular from '../Texts/EuclidCircularARegular';
import RecoletaDemoRegular from '../Texts/RobotoMedium';

const CustomCheckBox=(props)=>{
    const [checkbox,setCheckbox] =useState(false)

    const onPressCheck=()=>{
        setCheckbox(!checkbox)
        if(props.updateData)
        {
            props.updateData(!checkbox)

        }

    }
    return(
        <RippleHOC style={[styles.container,props.style]} onPress={onPressCheck}>
            <View style={[styles.checkboxContainer,props.checkboxStyle]} >
                {checkbox&& 
                    <Image source={icons.tick} style={styles.tickImg}/>
                }
            </View>
            <RecoletaDemoRegular style={styles.title}>{props.para}</RecoletaDemoRegular>
        </RippleHOC>
    )
}
export default CustomCheckBox