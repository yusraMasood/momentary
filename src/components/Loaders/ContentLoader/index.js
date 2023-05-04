import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { colors } from '../../../utils/appTheme';
import { vh, vw } from '../../../utils/dimensions';

const ContentLoader = props => {
    const items=[1,2,3,4,5,6,7,8,9]
  return (
    <SkeletonPlaceholder
      backgroundColor={colors.skeleton.background}
      // backgroundColor={"#5A5A5A"}
      highlightColor={colors.skeleton.highlightColor}
      shimmerWidth={3}
      // highlightColor={"#808080"}
      speed={1200}>

       <SkeletonPlaceholder.Item
        borderRadius={4}
        {...props}
        width={vw * 90}
        height={vw * 90 * 0.4}
        // marginTop={3}
        marginVertical={vh*3}

      />
    <SkeletonPlaceholder.Item
     borderRadius={4}
     {...props}
     width={vw * 90}
     marginTop={vh*2}
     height={vh * 2}
    //  width: vw * 90,
    //  height: vw * 90 * 0.4,
   />
    <SkeletonPlaceholder.Item
     borderRadius={4}
     {...props}
     width={vw * 90}

     marginTop={vh*2}
     height={vh * 2}
   />
    <SkeletonPlaceholder.Item
     borderRadius={4}
     {...props}
     width={vw * 90}

     marginTop={vh*2}

    //  marginTop={vh*5}

     height={vh * 2}
   />
    <SkeletonPlaceholder.Item
     borderRadius={4}
     {...props}
     width={vw * 90}

     marginTop={vh*2}

    //  marginTop={vh*5}

     height={vh * 2}
   />
    <SkeletonPlaceholder.Item
     borderRadius={4}
     {...props}
     width={vw * 90}
     marginTop={vh*2}
     height={vh * 2}
   />
    <SkeletonPlaceholder.Item
     borderRadius={4}
     {...props}
     width={vw * 90}
     marginTop={vh*2}
     height={vh * 2}
   />
    <SkeletonPlaceholder.Item
     borderRadius={4}
     {...props}
     width={vw * 90}
     marginTop={vh*2}
     height={vh * 2}
   />
    <SkeletonPlaceholder.Item
     borderRadius={4}
     {...props}
     width={vw * 90}
     marginTop={vh*2}
     height={vh * 2}
   />
    <SkeletonPlaceholder.Item
     borderRadius={4}
     {...props}
     width={vw * 90}
     marginTop={vh*2}
     height={vh * 2}
   />
    <SkeletonPlaceholder.Item
     borderRadius={4}
     {...props}
     width={vw * 90}
     marginTop={vh*2}
     height={vh * 2}
   />


    </SkeletonPlaceholder>
  );
};

export default ContentLoader;

const styles = StyleSheet.create({});