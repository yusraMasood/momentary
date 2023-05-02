import React,{useState} from 'react';
import { Text, View,TouchableOpacity,Image } from 'react-native';
import { icons } from '../../../assets/images';
import RobotoMedium from '../../Texts/RobotoMedium';
import RippleHOC from '../../wrappers/Ripple';
import styles from './styles'

const MainDropdown = (props) => {
    const [dropdown,setDropdown] =useState(false)
    const savedropdownValue = (item) => {
        props.setDropdownValue(item)
        setDropdown(false)
    }
    return (
        <View>
            <RippleHOC style={[styles.statusContainer, props.statusStyle]} onPress={() => setDropdown(!dropdown)}>
                <RobotoMedium style={[styles.statusText, props.titleStyle]}>
                  {props.dropdownValue?props.dropdownValue: props.dropdownTitle}
                </RobotoMedium>
                <View style={styles.imageContainer}>
                <RobotoMedium style={styles.priecText}>$5</RobotoMedium>
                <Image source={icons.down} style={[styles.icon, props.iconStyle]} />
                </View>
            </RippleHOC>
            <View style={[styles.dropdownContainer]}>
            {dropdown &&
                <View style={[styles.dropdownValues,props.openDrawerStyle]}>
                    {props?.array.map((item, index) => {
                        return (
                            <TouchableOpacity  key={index} onPress={()=> savedropdownValue(item)}  style={styles.noOfTimes}>
                                <RobotoMedium style={styles.statusText}>{item}</RobotoMedium>
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