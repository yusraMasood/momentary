import React from 'react';
import {FlatList, View, Image} from 'react-native';
import {generalImages} from '../../../assets/images';
import RippleHOC from '../../wrappers/Ripple';
import styles from './styles';
import CustomSkeleton from '../../Loaders/CustomSkeleton';
import { vw } from '../../../utils/dimensions';

const LibraryCard = props => {
    // console.log(" props.image", props.image);
  return (
    <View>
      {props.loader?
      <CustomSkeleton
      height={15}
      width={30}
      marginLeft={vw*4}
      />:

      
    <RippleHOC onPress={props.onPress} style={styles.imageContainer}>
      <Image
        source={props?.image ? {uri: props?.image} : generalImages.defaultImage}
        style={styles.bookImage}
      />
    </RippleHOC>
    }
    </View>
  );
};
export default LibraryCard;
