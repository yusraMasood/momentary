import React, {useRef, useImperativeHandle} from 'react';
import {Image, ImageBackground, View} from 'react-native';
import {generalImages, icons} from '../../../assets/images';
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

  return (
    <PopupWrapper reference={popup}>
      <View style={styles.container}>
<View>

  {/* <ImageBackground source={icons.thumbBack} style={styles.thumbBackground}>
    <Image source={icons.thumb} style={styles.dropImage}/>
    </ImageBackground> */}

</View>
{props.unsuccess?
        <ImageBackground source={generalImages.unsuccess} style={styles.dropImage} >
          <RippleHOC onPress={hide} style={styles.crossContainer}>
        <Image source={icons.cross} style={styles.crossIcon}/>
        </RippleHOC>
          </ImageBackground>
          :
          <Image source={generalImages.success} style={styles.successImage}/>

}
      </View>
    </PopupWrapper>
  );
};
export default PulishEntryPopup;
