import React from 'react';
import {View, Image} from 'react-native';
import {icons} from '../../../assets/images';
import PoppinsRegular from '../../Texts/PoppinsRegular';
import RobotoRegular from '../../Texts/RobotoRegular';
import styles from './styles';

const JournalCard = (props) => {
  return (
    <View style={styles.container}>
      <RobotoRegular style={styles.sharedText}>{props.heading}</RobotoRegular>
      <View style={styles.editContainer}>
        <Image source={icons.edit} style={styles.editIcon} />
        <RobotoRegular style={styles.dateText}>
          {''}{props.publish}
        </RobotoRegular>
      </View>
      <RobotoRegular style={styles.descText}>
    {props.desc}
      </RobotoRegular>
      <View style={styles.alignComment}>

      <View style={styles.commentContainer}>
          <Image source={icons.comment} style={styles.commentImage} />
          <PoppinsRegular style={styles.commentText}>2Comment</PoppinsRegular>
        </View>

      </View>
    </View>
  );
};
export default JournalCard;
