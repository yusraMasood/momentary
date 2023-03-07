import React from 'react';
import {View, Image} from 'react-native';
import {icons} from '../../../assets/images';
import RobotoRegular from '../../Texts/RobotoRegular';
import styles from './styles';

const DateInputPick = (props) => {
  return (
    <View >
        <RobotoRegular style={styles.labelText}>{props.label}</RobotoRegular>
    <View style={styles.container}>
      <RobotoRegular style={styles.dateText}>Select Date</RobotoRegular>
      <Image source={icons.calendar} style={styles.calendarIcon} />
    </View>

    </View>
  );
};
export default DateInputPick;
