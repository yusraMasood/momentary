import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { colors } from '../../../utils/appTheme';
import { vh, vw } from '../../../utils/dimensions';

const ListLoader = props => {
    const items=[1,2,3,4,5,6,7,8,9]
  return (
    <SkeletonPlaceholder
      backgroundColor={colors.skeleton.background}
      // backgroundColor={"#5A5A5A"}
      highlightColor={colors.skeleton.highlightColor}
      shimmerWidth={3}
      // highlightColor={"#808080"}

      speed={1200}>
        <View style={{flexDirection: "row",alignItems: "center",marginBottom: vh*3}}>


       
        <SkeletonPlaceholder.Item
     borderRadius={vh*8}
     {...props}
     width={vh * 8}
     marginTop={vh*2}
     height={vh * 8}
     marginRight={vw*4}
   />
<View>


      
   
    <SkeletonPlaceholder.Item
     borderRadius={2}
     {...props}
     width={vw * 40}
     marginTop={vh*1}
     height={vh * 0.5}
   />
    <SkeletonPlaceholder.Item
     borderRadius={4}
     {...props}
     width={vw * 40}
     marginTop={vh*1}
     height={vh * 0.5}
   />
    <SkeletonPlaceholder.Item
     borderRadius={2}
     {...props}
     width={vw * 40}
     marginTop={vh*1}
     height={vh * 0.5}
   />
   </View>
  </View>


    </SkeletonPlaceholder>
  );
};

export default ListLoader;

const styles = StyleSheet.create({});