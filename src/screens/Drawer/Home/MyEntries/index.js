import React, {useState} from 'react';
import {View, Image, FlatList} from 'react-native';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
import styles from './styles';
import GridComponent from '../../../../components/ReusableComponent/GridComponent';

const MyEntries = props => {

  return (
    <ScreenWrapper style={styles.container}>
      <GridComponent/>
    </ScreenWrapper>
  );
};
export default MyEntries;
