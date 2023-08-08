import React, {useRef, useImperativeHandle} from 'react';
import {Image, ImageBackground, View} from 'react-native';
import {generalImages, icons} from '../../../assets/images';
import BasicButton from '../../Buttons/BasicButton';
import CustomButton from '../../Buttons/CustomButton';
import RobotoMedium from '../../Texts/RobotoMedium';
import RobotoRegular from '../../Texts/RobotoRegular';
import RippleHOC from '../../wrappers/Ripple';
import PopupWrapper from '../PopupWrapper';
import styles from './styles';

const ImagePopup = props => {
  const popup = useRef(null);

  useImperativeHandle(props?.reference, () => ({
    hide: hide,
    show: show,
  }));

  const show = () => {
    popup?.current?.show();
  };

  const hide = () => {
    popup?.current?.hide();
  };

  const onYes = () => {
    if (props?.onAccept) {
      props?.onAccept();
    }
    hide();
  };
  const onNo = () => {
    if (props?.onReject) {
      props?.onReject();
    }
    hide();
  };

  return (
    <PopupWrapper reference={popup} contentContainerStyle={styles.container} childrenStyle={styles.childrenContainer}>
  <Image source={generalImages.pageDesign} style={styles.image}/>
  {/* <View style={styles.cancelContainer}>
    <RobotoRegular>Cancel</RobotoRegular>

  </View> */}
    </PopupWrapper>
  );
};
export default ImagePopup;
