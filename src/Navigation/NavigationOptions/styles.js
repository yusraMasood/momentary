import {StyleSheet} from 'react-native';
import {colors} from '../../utils/appTheme';
import {vh, vw} from '../../utils/dimensions';

const styles = StyleSheet.create({

  titleCenterText:{
    fontSize: vh*3.5,
    // backgroundColor: "red",
    // width: vw*35,
    // paddingRight: vw*2,
    // paddingHorizontal: vw*2,
    color: colors.themeColor.yellow,

  },
  titleWithDescriptionContainer:{
    alignItems: "center"
  },
  anonymousText:{
    color: colors.text.grey,
    paddingTop: 0,
    fontSize: vh*1.6
  },
  rightContainer:{
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "space-between"
  },
  entryIcon:{
    height: vh*2.2,
    width: vh*2.2,
    marginLeft: vw*2,
    resizeMode: "contain"
  },
  saveIcon:{
    height: vh*1.9,
    width: vh*1.9,
    marginLeft: vw*2,
    resizeMode: "contain"
  },

  titleText:{
    fontSize: vh*1.85,
    color: colors.black,
  },
  backIcon:{
    height: vh*3,
    width: vh*3 ,
    resizeMode: "contain",

  },
  circleNotification:{
    height: vh*1.2,
    width: vw*2.5,
    // right: vw*0.3,
    borderWidth:1,
    borderRadius: vh*1,
    backgroundColor: colors.general.red,
    position: "absolute"

  }
});
export default styles;
