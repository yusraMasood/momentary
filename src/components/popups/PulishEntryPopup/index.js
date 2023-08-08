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
import { saveSetting, useSetting } from '../../../state/entry';
import { useDispatch } from 'react-redux';

const PulishEntryPopup = props => {
  const popup = useRef(null);
  const setting =useSetting()
const dispatch =useDispatch()
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
    // if(props.setPrivacy)
    // {
    //   props.setPrivacy("My Network")
    //   // dispatch(saveSetting({...setting,visiblity:"My Network"}))

    // }
    hide();
  };
  const onNo = () => {
    if (props?.onReject) {
      props?.onReject();
    }
    // if(props.setPrivacy)
    // {
    //   props.setPrivacy("Global Network")
    //   // dispatch(saveSetting({...setting,visiblity:"Global Network"}))
    // }
    hide();
  };

  return (
    <PopupWrapper reference={popup} contentContainerStyle={styles.container} childrenStyle={styles.childrenContainer}>
      {props.title &&<RobotoMedium style={styles.publishText}>{props.title}</RobotoMedium>}
      {props.desc1 &&<RobotoRegular style={styles.descText}>
        {props.desc1}
      </RobotoRegular>}
      <BasicButton text={props.yesBtn} style={styles.buttonStyle} onPress={onYes}/>
      <CustomButton text={props.noBtn} style={styles.buttonStyle} onPress={onNo} />
    {props.desc &&
    <RobotoRegular style={styles.descText}>
    {props.desc}
  </RobotoRegular>
    }  
    </PopupWrapper>
  );
};
export default PulishEntryPopup;
