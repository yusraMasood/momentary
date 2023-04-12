import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import themeColors from '../../Utils/themeColors';
import { vh, vw } from '../../Utils/units';

const CustomSkeleton = props => {
  return (
    <SkeletonPlaceholder
      backgroundColor={themeColors.background}
      // backgroundColor={"#5A5A5A"}
      highlightColor={themeColors.highlightColor}
      // highlightColor={"#808080"}
      speed={1200}>
      <SkeletonPlaceholder.Item
        borderRadius={4}
        {...props}
        width={vw * props?.width}
        height={vh * props?.height}
      />
    </SkeletonPlaceholder>
  );
};

export default CustomSkeleton;

const styles = StyleSheet.create({});