import {StyleSheet} from 'react-native';
import {colors} from '../../utils/appTheme';
import {vh, vw} from '../../utils/dimensions';

export const styles = StyleSheet.create({
  radioOuter: {
    height: vh * 3,
    width: vh * 3,
    borderRadius: vh * 3,
    // backgroundColor: 'red',
    borderWidth: 1,
    borderColor: colors.themeRed,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: "red"
  },
  radioInner: {
    height: vh * 2.2,
    width: vh * 2.2,
    borderRadius: vh * 3,
    backgroundColor: colors.themeRed,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical:vh*1.5,
  },
  title: {
    paddingLeft: vw * 3,
    color: colors.blackText,
    fontSize: vh * 1.9,
  },
  cardStyle:{
    height: vh*3,
    width: vh*3,
    marginRight: vw*2,
    resizeMode: "contain"
  },
  outerContainer:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: vw*1,
  },
});
