import React, {useRef, useImperativeHandle} from 'react';
import {Image, ImageBackground, View} from 'react-native';
import {generalImages, icons} from '../../../assets/images';
import CustomGoldenSwitch from '../../Buttons/CustomGoldenSwitch';
import CustomSwitch from '../../CustomSwitch';
import RobotoMedium from '../../Texts/RobotoMedium';
import RobotoRegular from '../../Texts/RobotoRegular';
import RippleHOC from '../../wrappers/Ripple';
import HashtagPopup from '../HashtagPopup';
import PageDesignPopup from '../PageDesignPopup';
import PopupWrapper from '../PopupWrapper';
import styles from './styles';
import { useDispatch } from 'react-redux';
import { saveSetting, useSetting } from '../../../state/entry';

const EntrySettingPopup = props => {
  const popup = useRef(null);
  
  const tagRef = useRef(null);
const dispatch =useDispatch()
const setting =useSetting()
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
  const onPressPageDesign=()=>{
    if (props?.onPressDesign) {
      props?.onPressDesign();
    }
    hide();
  }

  const onPressTag=()=>{
    if (props?.onPressTag) {
      props?.onPressTag();
    }
    hide();
  }
  const onPressVisiblity=()=>{
    if (props?.onPressVisiblity) {
      props?.onPressVisiblity();
    }
    hide();
  }
  const onPressDelete=()=>{
    if (props?.onPressEntryDelete) {
      props?.onPressEntryDelete();
    }
    hide();
  }
  const getCommentValue=(value)=>{
    // props.setComment(value)
    dispatch(saveSetting({...setting,comment: value}))

  }
  return (
    <PopupWrapper
      reference={popup}
      childrenStyle={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <RobotoMedium style={styles.settingText}>Entry Setting</RobotoMedium>
      {/* <RippleHOC onPress={onPressPageDesign} style={styles.settingContainer}>
        <RobotoRegular style={styles.pageTxt}>Change Page Design</RobotoRegular>
        <Image source={icons.rightArrow} style={styles.arrowStyle} />
      </RippleHOC> */}
      <RippleHOC onPress={onPressVisiblity} style={styles.settingContainer}>
        <RobotoRegular style={styles.pageTxt}>Visiblity</RobotoRegular>
        <View style={styles.rightContainer}>
          <RobotoRegular style={styles.privateText}>{props?.visiblity=="public"?"Global Network":props?.visiblity=="myNetwork"?"My Network": props.visiblity=="private"?"Private":props.visiblity}</RobotoRegular>
          <Image source={icons.rightArrow} style={styles.arrowStyle} />
        </View>
      </RippleHOC>
      <RippleHOC
        onPress={onPressTag}
        style={styles.settingContainer}
      >
        <RobotoRegular style={styles.pageTxt}>Tags</RobotoRegular>
        <View style={styles.rightContainer}>
         {
         props?.hashtags&&props?.hashtags.slice(0,2).map((value,index)=>{
          return(

          <RobotoRegular style={styles.privateText}>
          {value}
          </RobotoRegular>
          )

         })}
          <Image source={icons.rightArrow} style={styles.arrowStyle} />
        </View>
      </RippleHOC>
      <View style={styles.settingContainer}>
        <RobotoRegular style={styles.pageTxt}>Comments</RobotoRegular>
        <CustomGoldenSwitch updateData={getCommentValue} status={props?.comment}/>
      </View>
      {props.onPressEntryDelete&&
      <RippleHOC onPress={onPressDelete} style={styles.settingContainer}>
        <RobotoRegular style={styles.pageTxt}>Delete</RobotoRegular>
        <View style={styles.crossContainer}>
          <Image source={icons.cross} style={styles.crossIcon} />
        </View>
      </RippleHOC>
      
      }
   
    </PopupWrapper>
  );
};
export default EntrySettingPopup;
