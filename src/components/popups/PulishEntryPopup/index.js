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

const PulishEntryPopup = props => {
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
      <RobotoMedium style={styles.publishText}>Publish To</RobotoMedium>
      <BasicButton text={'My Network'} style={styles.buttonStyle} onPress={onYes}/>
      <CustomButton text={'Global Network'} style={styles.buttonStyle} onPress={onNo} />
      <RobotoRegular style={styles.descText}>
        Entries published on the Momentary Global Network are anonymized and
        will not include your user information or metadata from your photos.
        {'\n\n'}
        Identifying information you have written in the entry itself will still
        be visible, as we do not censor or otherwise modify your writing.{' '}
      </RobotoRegular>
    </PopupWrapper>
  );
};
export default PulishEntryPopup;
