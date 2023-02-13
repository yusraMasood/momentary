import React,{useState} from 'react';
import { Text, View,TouchableOpacity,Image } from 'react-native';
import { icons } from '../../../assets/images';
import RippleHOC from '../../wrappers/Ripple';
import styles from './styles'

const MainDropdown = (props) => {
    // console.log("props", props);
    const savedropdownValue = (item) => {
        props.setDropdownValue(item)
        props.setDropdown(false)
    }
    return (
        <View>
            <RippleHOC style={[styles.statusContainer, props.statusStyle]} onPress={() => props.setDropdown(!props.dropdown)}>
                <Text style={[styles.statusText, props.titleStyle]}>
                  {props.dropdownValue?props.dropdownValue: props.dropdownTitle}
                </Text>
                <Image source={icons.down} style={[styles.icon, props.iconStyle]} />
            </RippleHOC>
            <View style={[styles.dropdownContainer]}>
            {props?.dropdown &&
                <View style={[styles.dropdownValues,props.openDrawerStyle]}>
                    {props?.array.map((item, index) => {
                        return (
                            <TouchableOpacity  key={index} onPress={()=> savedropdownValue(item)}  style={styles.noOfTimes}>
                                <Text>{item}</Text>
                            </TouchableOpacity>
                        )
                    })}
                </View>
                }
                </View>
        </View>
    )

}
export default MainDropdown