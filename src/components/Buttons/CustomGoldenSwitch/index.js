import React, {useEffect, useState} from 'react';
import {View, LayoutAnimation} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { linearColors } from '../../../utils/appTheme';
import RippleHOC from '../../wrappers/Ripple';
import styles from './styles';

const CustomGoldenSwitch = props => {
  const [switchh, setSwitch] = useState(props?.status ? props?.status : false);
  const pressSwitch = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setSwitch(!switchh);
    // console.warn(!switchh);


    // props.updateData(props.id, !switchh);
  };
  return (
    <RippleHOC
    // style={{overflow:"hidden"}}
      onPress={pressSwitch}>
        <LinearGradient
          style={[
            styles.switch,
            props.style,
            switchh ? styles.switchOn : styles.switchOff,
          ]}
        colors={linearColors.yellow} >
     
      <View
        style={[
          styles.switchCircle,
          props.switchInner,
          switchh ? styles.whiteCircle : styles.redCircle,
        ]}
      />
           </LinearGradient>
    </RippleHOC>
  );
};
export default CustomGoldenSwitch;