import React, {useRef, useImperativeHandle} from 'react';
import {Image, View} from 'react-native';
import CustomButton from '../../Buttons/CustomButton';
import PragmaticaRegular from '../../Texts/RobotoSemiBold';
import RippleHOC from '../../wrappers/Ripple';
import PopupWrapper from '../PopupWrapper';
import styles from './styles';

const GeneralPopup = props => {
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
    <PopupWrapper contentContainerStyle={styles.contentContainer} reference={popup}>
       
      <View style={styles.container}>
      <View style={styles.hrStyle}/>
      <Image source={props.image} style={styles.dropImage}/>
      <PragmaticaRegular style={styles.titleText}>{props.title}</PragmaticaRegular>
      <CustomButton text={props.buttonText}  onPress={onYes}/>

      <RippleHOC onPress={hide}>
        <PragmaticaRegular style={styles.cancelText}>{props.hrLineText}</PragmaticaRegular>
      </RippleHOC>
      </View>
    </PopupWrapper>
  );
};
export default GeneralPopup; 