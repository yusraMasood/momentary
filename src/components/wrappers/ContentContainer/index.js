import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {colors} from '../../../utils/appTheme';
// import HeaderCurveBorder from '../HeaderCurveBorder';

const ContentContainer = props => {
  var Scroll = ScrollView;
  if (props.aware) {
    Scroll = KeyboardAwareScrollView;
  }
  return (
    <Scroll
      showsVerticalScrollIndicator={false}
      bounces={false}
      refreshControl={props.refreshControl}
      {...props}
      contentContainerStyle={[{flexGrow: 1}, props.contentContainerStyle]}
      style={[styles.container, props.style]}>
      {/* {props.showCurve != false && <HeaderCurveBorder />} */}
      {props.children}
    </Scroll>
  );
};
const styles = StyleSheet.create({
  container: {
    // flexGrow: 1,
    flex: 1,
    // height: vh*100,
    backgroundColor: colors.white,
    // backgroundColor: "red"
    // backgroundColor: "red"
  },
});
export default ContentContainer;
