import React from 'react';
import {View} from 'react-native';
import EuclidCircularARegular from '../Texts/EuclidCircularARegular';
// import OutfitRegular from '../Texts/OutfitRegular';
import styles from './styles';

const EmptyComponent = (props) => {
  return (
    <View style={styles.emptyContainer}>
      <EuclidCircularARegular style={styles.emptyText}>{props.text?props.text:"No records found"}</EuclidCircularARegular>
    </View>
  );
};
export default EmptyComponent;
