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

const PublishQuestionPopup = props => {
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
    <PopupWrapper reference={popup}  contentContainerStyle={[styles.container,props.contentStye]} childrenStyle={styles.childrenContainer}>
    {props.image&&<Image source={generalImages.userImage} style={styles.userImage}/>}
      <RobotoMedium style={styles.successText}>{props.title}</RobotoMedium>
      <RobotoRegular style={styles.descText}>{props.desc}</RobotoRegular>
      <View style={styles.btnContainer}>
      <BasicButton text={props.btnYes?props.btnYes:'Yes'} style={[styles.buttonStyle,props.btnStyle]} onPress={onYes}/>
      <CustomButton text={props.btnNo?props.btnNo:'No'} style={[styles.buttonStyle,props.btnStyle]} onPress={onNo} />
      </View>
    </PopupWrapper>
  );
};
export default PublishQuestionPopup;
