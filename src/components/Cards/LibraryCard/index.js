import React from 'react';
import {FlatList, View, Image} from 'react-native';
import {generalImages} from '../../../assets/images';
import RippleHOC from '../../wrappers/Ripple';
import styles from './styles';

const LibraryCard = props => {
    // console.log(" props.image", props.image);
  return (
    <RippleHOC onPress={props.onPress} style={styles.imageContainer}>
      <Image
        source={props?.image ? {uri: props?.image} : generalImages.defaultImage}
        style={styles.bookImage}
      />
    </RippleHOC>
  );
};
export default LibraryCard;
