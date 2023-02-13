import React, {useRef, useImperativeHandle} from 'react';
import {Image, TextInput, View} from 'react-native';
import {AirbnbRating, Rating} from 'react-native-ratings';
import {generalImages} from '../../../assets/images';
import {colors} from '../../../utils/appTheme';
import { vh, vw } from '../../../utils/dimensions';
import CustomButton from '../../Buttons/CustomButton';
import PragmaticaRegular from '../../Texts/RobotoSemiBold';
import RecoletaDemoRegular from '../../Texts/RobotoMedium';
import RippleHOC from '../../wrappers/Ripple';
import PopupWrapper from '../PopupWrapper';
import styles from './styles';

const RatingPopup = props => {
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
      contentContainerStyle={styles.contentContainer}
      reference={popup}
    >
      <View style={styles.container}>
        <View style={styles.hrStyle} />
        <RecoletaDemoRegular style={styles.reviewHeadingText}>
          Rate and Review
        </RecoletaDemoRegular>
        <PragmaticaRegular style={styles.productNameText}>
          Product : ADDF
        </PragmaticaRegular>
        <AirbnbRating

          // isDisabled
          // starImage={generalImages.star}
          showRating={false}
          ratingCount={5}
          reviewSize={0}
          size={vw * 9}
          selectedColor={colors.themeRed}
        />
        <TextInput placeholder="Write a Review" style={styles.inputContainer} />
        <CustomButton text="Submit Review" style={styles.btnStyle}/>
      </View>
    </PopupWrapper>
  );
};
export default RatingPopup;
