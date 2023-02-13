import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/appTheme';
import {vh, vw} from '../../../utils/dimensions';

const styles = StyleSheet.create({
  container: {
    marginTop: vh*1.5,
    alignItems: "center"
    // flexDirection: 'row',
    // alignItems: 'center',
    // backgroundColor: "red"
    // marginBottom: 3 * vh,
  },
  icon: {
    // tintColor: colors.iconColor,
    height: 2.3 * vh,
    width: 2.3 * vh,
    resizeMode: 'contain',
    // marginHorizontal: 5 * vw,
  },
  drawerButtonContainer: {
    // backgroundColor: colors.red,
    alignItems: 'center',
    width: vw*40,
    // backgroundColor: "red",
    flexDirection: "row"
  },
  text: {
    // width: vw * 35,
    paddingVertical: vh * 1.1,
  },
  iconContainer: {
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: colors.lightGray,
    // padding: vh * 1.4,
    // borderRadius: (vh * 5) / 2,
    // height: vh * 5,
    // width: vh * 5,
  },
  label: {
    fontSize: 1.85 * vh,
    color: colors.blackText,
    // textAlign:"left"
    marginLeft: vw * 3,
  },
  // drawerButtonContainer: {
  //   // backgroundColor: colors.red,
  //   alignItems: 'center',
  //   flexDirection: "row"
  // },
});

export default styles;
