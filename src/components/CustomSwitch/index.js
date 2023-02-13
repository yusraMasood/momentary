import React, {useEffect, useState} from 'react';
import {View, LayoutAnimation} from 'react-native';
import RippleHOC from '../wrappers/Ripple';
import styles from './styles';

const CustomSwitch = props => {
  const [switchh, setSwitch] = useState(props?.status ? props?.status : false);
  const pressSwitch = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setSwitch(!switchh);
    // console.warn(!switchh);


    // props.updateData(props.id, !switchh);
  };
  return (
    <RippleHOC
      style={[
        styles.switch,
        props.style,
        switchh ? styles.switchOn : styles.switchOff,
      ]}
      onPress={pressSwitch}>
      <View
        style={[
          styles.switchCircle,
          props.switchInner,
          switchh ? styles.whiteCircle : styles.redCircle,
        ]}
      />
    </RippleHOC>
  );
};
export default CustomSwitch;