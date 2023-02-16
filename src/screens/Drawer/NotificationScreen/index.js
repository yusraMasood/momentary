import React from 'react';
import {View, Image, FlatList} from 'react-native';
import { generalImages } from '../../../assets/images';
import FriendRequestCard from '../../../components/Cards/FriendRequestCard';
import DamionRegular from '../../../components/Texts/DamionRegular';
import PoppinsRegular from '../../../components/Texts/PoppinsRegular';
import RobotoRegular from '../../../components/Texts/RobotoRegular';
import ScreenWrapper from '../../../components/wrappers/ScreenWrapper';
import styles from './styles';

const NotificationScreen = () => {
  const notificationArray = [1, 2, 3, 4, 5];

  const renderFriendCard = () => {
    return <FriendRequestCard/>
  };

  const renderHeader=()=>{
    return(
        <View>
            <View style={styles.alignContent}>

            <PoppinsRegular style={styles.viewText}>View All</PoppinsRegular>
            </View>
                {notificationArray.map((item, index) => {
        return (
          <View style={styles.cardContainer}>
            <View style={styles.dateContainer}>
              <RobotoRegular style={styles.dateText}>01/01/2010</RobotoRegular>
              <RobotoRegular style={styles.dateText}>01:01 PM</RobotoRegular>
            </View>
            <RobotoRegular style={styles.descText}>
              There are many variations of passages of Lorem Ipsum available
            </RobotoRegular>
          </View>
        );
      })}
      <View style={styles.friendHeadingContainer}>
      <DamionRegular style={styles.headingText}>Friend Requests</DamionRegular>
      <PoppinsRegular style={styles.viewText}>View All</PoppinsRegular>
      </View>
        </View>

    )
  }
  return (
    <ScreenWrapper style={styles.container}>
      <FlatList data={[1, 2, 3, 4]}
      ListHeaderComponent={renderHeader}
      renderItem={renderFriendCard} />
    </ScreenWrapper>
  );
};
export default NotificationScreen;
