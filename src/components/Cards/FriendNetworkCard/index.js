import React from 'react';
import {Image, View} from 'react-native';
import {generalImages, icons} from '../../../assets/images';
import PoppinsRegular from '../../Texts/PoppinsRegular';
import RobotoRegular from '../../Texts/RobotoRegular';
import styles from './styles';

const FriendNetworkCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.userDetailsContainer}>
        <View style={styles.userImageContainer}>
          <Image source={generalImages.userImage} style={styles.userImage} />
        </View>
        <View>
          <RobotoRegular style={styles.nameText}>Amelia Isabell</RobotoRegular>
          <View style={styles.editContainer}>
            <Image source={icons.edit} style={styles.editIcon} />
            <RobotoRegular style={styles.dateText}>
              {" "}January 31, 2022 - 03:00 pm
            </RobotoRegular>
          </View>
        </View>
        <View style={styles.editContainer}>
          <Image source={icons.mapPin} style={styles.locationIcon} />
          <RobotoRegular style={styles.dateText}>
           {" "} Exact location of user
          </RobotoRegular>
        </View>
      </View>
      <RobotoRegular style={styles.descText}>
        Lorem ipsum dolor sit amet, consectetur are it adipiscing elit. Aenean
        euismod bibendum laoreet. Proin gravida dolor sitom
      </RobotoRegular>
      <View style={styles.alignComment}>
        <View style={styles.commentContainer}>
          <Image source={icons.comment} style={styles.commentIcon} />
          <PoppinsRegular style={styles.commentText}>Comment</PoppinsRegular>
        </View>
      </View>
    </View>
  );
};
export default FriendNetworkCard;
