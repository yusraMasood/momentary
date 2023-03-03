import React from 'react';
import {View, Image} from 'react-native';
import {icons} from '../../../../assets/images';
import LikeCommentCard from '../../../../components/Cards/LikeCommentCard';
import RobotoMedium from '../../../../components/Texts/RobotoMedium';
import RobotoRegular from '../../../../components/Texts/RobotoRegular';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
import styles from './styles';

const ViewEntry = () => {
  const publishArray = [1, 2];
  return (
    <ScreenWrapper style={styles.container}>
      <RobotoMedium style={styles.publishedText}>Published To</RobotoMedium>
<View style={styles.publishContainer}>
      {publishArray.map((item, index) => {
        return (
          <View >
            <RobotoRegular style={styles.friendText}>Friends Network</RobotoRegular>
            <View style={styles.mainContainerOfCalendar}>
              <View style={styles.calendarContainer}>
                <Image source={icons.calendar} style={styles.calendarIcon} />
                <RobotoRegular style={styles.entryDescText}>
                Feb 04, '22{'  '}
                </RobotoRegular>
              </View>
              <View style={styles.calendarContainer}>
                <Image source={icons.clock} style={styles.calendarIcon} />
                <RobotoRegular style={styles.entryDescText}>
                  12:40
                </RobotoRegular>
              </View>
            </View>
          </View>
        );
      })}
      </View>
      <RobotoRegular style={styles.descText}>
        Lorem ipsum dolor sit amet, consectetur are it adipiscing elit. Aenean
        euismod bibendum laoreet. Proin gravida dolor sitom
      </RobotoRegular>
      <RobotoMedium style={styles.hashtagText}>#trends #fashion</RobotoMedium>
      <LikeCommentCard />
    </ScreenWrapper>
  );
};
export default ViewEntry;
