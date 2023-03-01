import {StyleSheet} from 'react-native';
import {colors} from '../../utils/appTheme';
import {vh, vw} from '../../utils/dimensions';

export const styles = StyleSheet.create({
  radioOuter: {
    height: vh * 2.2,
    width: vh * 2.2,
    borderRadius: vh * 3,
    // backgroundColor: 'red',
    borderWidth: 1,
    borderColor: colors.themeColor.yellow,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: "red"
  },
  radioInner: {
    height: vh * 1.5,
    width: vh * 1.5,
    borderRadius: vh * 3,
    backgroundColor: colors.themeColor.yellow,
  },
  container: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center',
  },
  title: {
    // paddingLeft: vw * 3,
    color: colors.text.offwhite,
    fontSize: vh * 1.9,
  },
  icon:{
    height: vh*2.3,
    width: vh*2.3,
    marginRight: vw*2,
    resizeMode: "contain"
  },
  titleContainer:{
    flexDirection: "row",
    alignItems: "center"
  },
  descText:{
    color: colors.text.grey,
    fontSize: vh * 1.6,
    paddingTop: vh*0.5,

  }
});
