import React, {useState, useImperativeHandle} from 'react';
import {Modal, StyleSheet, TouchableOpacity, View, Image} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import {vh, vw} from '../../../utils/dimensions';
import {colors, themeShadow} from '../../../utils/appTheme';
import {icons} from '../../../assets/images';
import RippleHOC from '../../wrappers/Ripple';

const PopupWrapper = props => {
  const [visible, setVisible] = useState(false);

  useImperativeHandle(props?.reference, () => ({
    hide: hide,
    show: show,
  }));

  const hide = onCancel => {
    setVisible(false);
    if (typeof onCancel === 'function') {
      onCancel();
    } else {
      if (props.onCancel) {
        props.onCancel();
      }
    }
  };
  const show = onShow => {
    setVisible(true);
    if (typeof onShow === 'function') {
      onShow();
    } else {
      if (props.onShow) {
        props.onShow();
      }
    }
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      style={styles.modal}
    >
      <Image source={icons.rightArrow} style={styles.crossIcon} />
      <View style={[styles.mainContainer, props.alignPopup]}>
        <TouchableOpacity
          onPress={hide}
          activeOpacity={0.9}
          style={styles.backdropContainer} 
        >
          <BlurView blurType="light"  style={styles.blur} 
            reducedTransparencyFallbackColor="orange"
          />
        </TouchableOpacity>
        <View style={[styles.contentContainer, props.contentContainerStyle]}>
        <RippleHOC onPress={hide} style={styles.alignContent}>
        <Image source={icons.cross} style={styles.crossIcon}/>
        </RippleHOC>
        <View style={props.childrenStyle}>
          {props.children}
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modal: {
    flex: 1,
  },
  crossContainer: {
    alignItems: 'flex-end',
    paddingTop: vh * 2.5,
    paddingRight: vw * 4,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backdropContainer: {
    height: 100 * vh,
    width: 100 * vw,
    // position: 'absolute',
    // top: 0,
    // left: 0,
  },
  alignContent:{
    alignItems: "flex-end",
    // backgroundColor: "red",
    // position: "absolute",
    // right: vw*4,
    // top: vh*1.8,

  },
  crossIcon:{
    height: vh*2.1,
    width: vw*3.2,
    marginRight: vw*4,
    marginTop: vh*1,
    
    
    resizeMode: "contain"
  },
 
  blur: {
    height: 100 * vh,
    width: 100 * vw,
  },
  contentContainer: {
    backgroundColor: colors.general.black,
    width: vw * 87,
    position: 'absolute',
    height: vh * 50,
    borderRadius: vh * 2.4,
  },
});
export default PopupWrapper;
