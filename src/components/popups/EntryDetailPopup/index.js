import React, {useRef, useImperativeHandle} from 'react';
import {Image, ImageBackground, View} from 'react-native';
import {generalImages, icons} from '../../../assets/images';
import RobotoMedium from '../../Texts/RobotoMedium';
import RobotoRegular from '../../Texts/RobotoRegular';
import PopupWrapper from '../PopupWrapper';
import styles from './styles';

const EntryDetailPopup = props => {
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
  <RobotoMedium style={styles.entryText}>Entry</RobotoMedium>
  <View style={styles.editContainer}>
    <Image source={icons.mapPin} style={styles.edit}/>
    <RobotoRegular style={styles.approximateText}>Approximate location of author</RobotoRegular>
  </View>
  <View style={styles.editContainer}>
    <Image source={icons.edit} style={styles.edit}/>
    <RobotoRegular style={styles.approximateText}>January 31, 2022 - 03:00 pm</RobotoRegular>
  </View>
     <RobotoRegular style={styles.descText}>Lorem ipsum dolor sit amet, consectetur are it adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sitomLorem ipsum dolor sit amet, consectetur are it adipiscing 
elit. Aenean euismod bibendum laoreet. Proin gravida dolor 
</RobotoRegular>
    </PopupWrapper>
  );
};
export default EntryDetailPopup;
