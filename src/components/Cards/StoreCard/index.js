import React from 'react';
import {Image, View} from 'react-native';
import {icons} from '../../../assets/images';
import RobotoMedium from '../../Texts/RobotoMedium';
import RobotoRegular from '../../Texts/RobotoRegular';
import RippleHOC from '../../wrappers/Ripple';
import styles from './syles';

const StoreCard = props => {
  return (
    <RippleHOC onPress={props.onPress} style={[styles.storeCard, props.style]}>
      <View style={styles.titleContainer}>
        <RobotoMedium style={[styles.storeText,props.textStyle]}>{props?.name}</RobotoMedium>
        {props.icon && (
          <Image source={icons.rightArrow} style={styles.arrowIcon} />
        )}
      </View>
      {props.desc && (
        <RobotoRegular style={styles.descText}>{props?.desc}</RobotoRegular>
      )}
    </RippleHOC>
  );
};

export default StoreCard;
