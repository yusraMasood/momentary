import {StyleSheet} from 'react-native';
import {colors, themeShadow} from '../../utils/appTheme';
import {vh, vw} from '../../utils/dimensions';

const styles = StyleSheet.create({
  iconStyle:{
    height: vh*2.2,
    width: vh*2.2,
    resizeMode: "contain",
    tintColor: colors.greyText
  },
  homeContainer:{
    backgroundColor: colors.themeRed,
    marginBottom: vh*6,
    paddingVertical: vh*2.5,
    paddingHorizontal: vw*3.9,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: vh*5,
    // position: "absolute",
    // top: vh*-3,
    // right: vw*43
  },
  homeIcon:{
    height: vh*2.4,
    width: vh*2.4,
    resizeMode: "contain"
  },
  tabItem:{
    // flexDirection: "row",
    // justifyContent: "space-between"
  },
  container:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.greyTab,
    paddingHorizontal: vw*20,
    // justifyContent: "center",
    height: vh*8
  },
  focusIcon:{
    tintColor: colors.themeRed
  },
  notificationBadge:{
    height: vh*1,
    width: vw*2,
    borderRadius: vh*2,
    position: "absolute",
    right: vw*0.1,
    top: -vh*0.4,
    backgroundColor: colors.themeRed
  }
});

export default styles;

