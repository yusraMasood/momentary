import React, {useRef, useImperativeHandle} from 'react';
import {Image, ImageBackground, View} from 'react-native';
import {generalImages, icons} from '../../../assets/images';
import CustomSwitch from '../../CustomSwitch';
import RobotoMedium from '../../Texts/RobotoMedium';
import RobotoRegular from '../../Texts/RobotoRegular';
import RippleHOC from '../../wrappers/Ripple';
import PopupWrapper from '../PopupWrapper';
import styles from './styles';

const EntrySettingPopup = props => {
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
    <PopupWrapper reference={popup} childrenStyle={styles.container} contentContainerStyle={styles.contentContainer}>
      <RobotoMedium style={styles.settingText}>Entry Setting</RobotoMedium>
      <RippleHOC style={styles.settingContainer}>
        <RobotoRegular style={styles.pageTxt}>Change Page Design</RobotoRegular>
        <Image source={icons.rightArrow} style={styles.arrowStyle}/>
      </RippleHOC>
      <RippleHOC style={styles.settingContainer}>
        <RobotoRegular style={styles.pageTxt}>Visiblity</RobotoRegular>
        <View style={styles.rightContainer}>
        <RobotoRegular style={styles.privateText}>Private</RobotoRegular>
        <Image source={icons.rightArrow} style={styles.arrowStyle}/>
        </View>
      </RippleHOC>
      <RippleHOC style={styles.settingContainer}>
        <RobotoRegular style={styles.pageTxt}>Tags</RobotoRegular>
        <View style={styles.rightContainer}>
        <RobotoRegular style={styles.privateText}>Funny , Random</RobotoRegular>
        <Image source={icons.rightArrow} style={styles.arrowStyle}/>
        </View>
      </RippleHOC>
      <View style={styles.settingContainer}>
        <RobotoRegular style={styles.pageTxt}>Tags</RobotoRegular>
    <CustomSwitch/>
      </View>
      <RippleHOC style={styles.settingContainer}>
        <RobotoRegular style={styles.pageTxt}>Delete</RobotoRegular>
    <View style={styles.crossContainer}>
      <Image source={icons.cross} style={styles.crossIcon}/>
    </View>
      </RippleHOC>
    
    </PopupWrapper>
  );
};
export default EntrySettingPopup;
