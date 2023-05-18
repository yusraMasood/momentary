import React from 'react';
import {View, Image} from 'react-native';
import {icons} from '../../../assets/images';
import PoppinsRegular from '../../Texts/PoppinsRegular';
import RobotoRegular from '../../Texts/RobotoRegular';
import styles from './styles';
import moment from 'moment';
import RenderHtmlComponent from '../../ReusableComponent/RenderHtmlComponent';
import { useNavigation } from '@react-navigation/native';
import RippleHOC from '../../wrappers/Ripple';

const JournalCard = (props) => {
  const navigation =useNavigation()
  
  return (
    <RippleHOC onPress={()=> navigation.navigate("PostByLocation",{id: props.id})} style={styles.container}>
      <RobotoRegular style={styles.sharedText}>{props.heading}</RobotoRegular>
      <View style={styles.editContainer}>
        <Image source={icons.edit} style={styles.editIcon} />
        <RobotoRegular style={styles.dateText}>
          {''}{moment(props.publish).format("MMMM DD,YYYY - HH:MM A")}
        </RobotoRegular>
      </View>
      <RenderHtmlComponent content={props.desc} />
      <View style={styles.alignComment}>

      <View style={styles.commentContainer}>
          <Image source={icons.comment} style={styles.commentImage} />
          <PoppinsRegular style={styles.commentText}> {props.commentCount} Comment</PoppinsRegular>
        </View>

      </View>
    </RippleHOC>
  );
};
export default JournalCard;
