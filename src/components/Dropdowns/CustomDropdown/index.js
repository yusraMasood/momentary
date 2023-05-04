import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  LayoutAnimation,
} from 'react-native';
import {icons} from '../../../assets/images';
import RobotoMedium from '../../Texts/RobotoMedium';
import RippleHOC from '../../wrappers/Ripple';
import styles from './styles';

const CustomDropdown = props => {
  const [dropdown, setDropdown] = useState(false);

  // console.log("props.array",props?.array);
  const savedropdownValue = item => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
    props.setDropdownValue(item);
    setDropdown(false);
  };
  const changeDropdownValue=()=>{

    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);

    setDropdown(!dropdown)
  }
  return (
    <View>
      <RippleHOC
        style={[styles.statusContainer, props.statusStyle]}
        onPress={changeDropdownValue}
      >
        <RobotoMedium
          style={[
            styles.statusText,
            !props.dropdownValue && styles.statusFocusText,
            props.titleStyle,
          ]}
        >
          {props.dropdownValue?.title ? props.dropdownValue?.title : props.dropdownTitle}
        </RobotoMedium>
        <Image
          source={icons.arrowDown}
          style={[styles.icon, props.iconStyle]}
        />
      </RippleHOC>
      <View style={[styles.dropdownContainer]}>
        {dropdown && (
          <View style={[styles.dropdownValues, props.openDrawerStyle]}>
            {props?.array.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => savedropdownValue(item)}
                  style={styles.noOfTimes}
                >
                  <Text style={styles.noOfTimesText}>{item?.title}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        )}
      </View>
    </View>
  );
};
export default CustomDropdown;
