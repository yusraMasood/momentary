import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/appTheme';
import {vh, vw} from '../../../utils/dimensions';

const styles = StyleSheet.create({
  container: {
    height: vh * 22,
  },

  childrenStyle: {
    // paddingTop: vh * 1,
    paddingHorizontal: vw * 4,
  },
  shareContainer:{
    flexDirection: "row",
    alignItems : "center",
    paddingBottom: vh*1.5
  },
  imageStyle:{
    height: vh*2.1,
    width: vh*2.1,
    resizeMode: "contain",
    tintColor: colors.general.white,
    marginRight: vw*3,
  },
  titleText:{
    color: colors.text.offwhite,
    fontSize: vh*1.8
  },
  shareText:{
    color: colors.text.offwhite,
    // position: "absolute",
    fontSize: vh*2.4,
    marginBottom: vh*1.4,
    paddingBottom: vh*0.5,
    borderBottomWidth:1,
    borderBottomColor: colors.input.greyBackground
  }
});

export default styles;
