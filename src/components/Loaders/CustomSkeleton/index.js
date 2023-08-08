import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { colors } from '../../../utils/appTheme';
import { vh, vw } from '../../../utils/dimensions';

const CustomSkeleton = props => {
  return (
    <SkeletonPlaceholder
      backgroundColor={colors.skeleton.background}
      // backgroundColor={"#5A5A5A"}
      highlightColor={colors.skeleton.highlightColor}
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