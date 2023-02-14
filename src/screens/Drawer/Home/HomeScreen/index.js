import React from 'react';
import {View, Image, FlatList} from 'react-native';
import RobotoBold from '../../../../components/Texts/RobotoBold';
import RobotoRegular from '../../../../components/Texts/RobotoRegular';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
import styles from './styles';

const HomeScreen = () => {

  return (
    <ScreenWrapper style={styles.container}>
      <View style={styles.newCardContainer}>
        <View></View>
        <RobotoBold style={styles.headingText}>+ New Entry</RobotoBold>
        <RobotoRegular style={styles.descText}>
          "Sed ut perspiciatis unde omnis iste
        </RobotoRegular>
      </View>
      <View style={styles.newCardContainer}>
        <View></View>
        <RobotoBold style={styles.headingText}>Resume Entry</RobotoBold>
        <RobotoRegular style={styles.entryDescText}>
        Last entry Title - ]10/10/2022{"\n"}
        </RobotoRegular>
      </View>
    </ScreenWrapper>
  );
};
export default HomeScreen;
