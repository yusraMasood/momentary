import React from 'react';
import {View, Image} from 'react-native';
import {generalImages} from '../../../assets/images';
import RobotoMedium from '../../Texts/RobotoMedium';
import RobotoRegular from '../../Texts/RobotoRegular';
import ScreenWrapper from '../../wrappers/ScreenWrapper';
import styles from './styles';

const BookPrintingSelectCard = props => {
  return (
    <View style={styles.container}>
        <View style={styles.innerContainer}>
      <Image source={props.image} style={styles.bookImage} />
      <View>
        <RobotoMedium style={styles.titleText}>{props?.title}</RobotoMedium>
        <RobotoRegular style={styles.descText}>{props?.desc}</RobotoRegular>
      </View>

        </View>
    </View>
  );
};

export default BookPrintingSelectCard;
