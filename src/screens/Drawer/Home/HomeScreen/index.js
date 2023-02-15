import React from 'react';
import {View, Image, FlatList} from 'react-native';
import { icons } from '../../../../assets/images';
import RobotoBold from '../../../../components/Texts/RobotoBold';
import RobotoRegular from '../../../../components/Texts/RobotoRegular';
import RippleHOC from '../../../../components/wrappers/Ripple';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
import styles from './styles';

const HomeScreen = (props) => {

  return (
    <ScreenWrapper style={styles.container}>
      <RippleHOC onPress={()=> props.navigation.navigate("NewEntry")} style={styles.newCardContainer}>
        <RobotoBold style={styles.headingText}>New Entry</RobotoBold>
        <RobotoRegular style={styles.descText}>
          "Sed ut perspiciatis unde omnis iste
        </RobotoRegular>
      </RippleHOC>
      <RippleHOC style={styles.newCardContainer}>
        <RobotoBold style={styles.headingText}>Resume Entry</RobotoBold>
        <View style={styles.calendarContainer }>
        <View style={styles.calendarContainer}>
        <Image source={icons.calendar} style={styles.calendarIcon}/>
        <RobotoRegular style={styles.entryDescText}>
        10/10/2022{"  "}</RobotoRegular>
        </View>
        <View style={styles.calendarContainer}>
        <Image source={icons.clock} style={styles.calendarIcon}/>
        <RobotoRegular style={styles.entryDescText}>
        12:40 
                </RobotoRegular>
        </View>
        </View>
      </RippleHOC>
    </ScreenWrapper>
  );
};
export default HomeScreen;
