import React, {useRef, useImperativeHandle} from 'react';
import {Image, ImageBackground, View} from 'react-native';
import {generalImages, icons} from '../../../assets/images';
import CustomButton from '../../Buttons/CustomButton';
import RobotoMedium from '../../Texts/RobotoMedium';
import RobotoRegular from '../../Texts/RobotoRegular';
import RippleHOC from '../../wrappers/Ripple';
import PopupWrapper from '../PopupWrapper';
import styles from './styles';

const SuccessPopup = props => {
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

  return (
    <PopupWrapper
      reference={popup}
      childrenStyle={styles.childrenStyle}
      contentContainerStyle={[styles.container,props.styleContent]}
    >
        {props.image&&<Image source={generalImages.userImage} style={styles.userImage}/>}
      <RobotoMedium style={styles.successText}>{props.title}</RobotoMedium>
      <RobotoRegular style={styles.descText}>
        {props.desc}
      </RobotoRegular>
      <CustomButton
        text={props.btnText?props.btnText:'Ok'}
        onPress={onYes}
        alignStyle={styles.alignBtn}
        style={[styles.nextBtn,props.btnStyle]}
      />
    </PopupWrapper>
  );
};
export default SuccessPopup;
