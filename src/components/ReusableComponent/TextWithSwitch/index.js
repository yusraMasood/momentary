import React, {useState} from 'react';
import {View, Image, LayoutAnimation} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {icons} from '../../../assets/images';
import {linearColors} from '../../../utils/appTheme';
import CustomGoldenSwitch from '../../Buttons/CustomGoldenSwitch';
import RobotoRegular from '../../Texts/RobotoRegular';
import RippleHOC from '../../wrappers/Ripple';
import styles from './styles';

const TextWithSwitch = props => {
  const [switchh, setSwitch] = useState(props?.status ? props?.status : false);
  const pressSwitch = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    if (switchh) {
        if(props.onPressSwitchDisable)
        {
        
            props.onPressSwitchDisable()
           
        }
        setSwitch(false);
    } else {
      if (props.onPressSwitch) {
        props.onPressSwitch();
        
      }
      setSwitch(true);
    }
  };
  return (
    <View
      onPress={props.onPressPageDesign}
      style={[styles.settingContainer, props.style]}
    >
      <RobotoRegular style={[styles.pageTxt, props.textStyle]}>
        {props.text}
      </RobotoRegular>
      {/* <CustomGoldenSwitch /> */}
      <RippleHOC
        // style={{overflow:"hidden"}}
        onPress={pressSwitch}
      >
        <LinearGradient
          style={[
            styles.switch,
            props.style,
            switchh ? styles.switchOn : styles.switchOff,
          ]}
          colors={linearColors.yellow}
        >
          <View
            style={[
              styles.switchCircle,
              props.switchInner,
              switchh ? styles.whiteCircle : styles.redCircle,
            ]}
          />
        </LinearGradient>
      </RippleHOC>
    </View>
  );
};
export default TextWithSwitch;
