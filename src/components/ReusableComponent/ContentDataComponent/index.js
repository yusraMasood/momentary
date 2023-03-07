import React from 'react';
import {View, FlatList} from 'react-native';
import RobotoRegular from '../../Texts/RobotoRegular';
import styles from './styles';

const ContentDataComponent = props => {
  const renderProfile = ({item}) => {
    return (
      <View style={styles.itemContainer}>
        <RobotoRegular style={styles.titleText}>{item?.title}</RobotoRegular>
        <RobotoRegular style={styles.valueText}>{item?.value}</RobotoRegular>
      </View>
    );
  };
  return (
    <View>
      <FlatList
        data={props.array}
        renderItem={renderProfile}
        key={props.key}
        keyExtractor={(item, index) => index}
        columnWrapperStyle={[styles.columnWrapperStyle, props.columnStyle]}
        numColumns={2}
      />
    </View>
  );
};
export default ContentDataComponent;
