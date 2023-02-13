import {StyleSheet} from 'react-native';
import {colors} from '../../utils/appTheme';
import {vh, vw} from '../../utils/dimensions';

const styles = StyleSheet.create({
  userImage:{
    height: vh*5.5,
    width: vw*10,
    // borderRadius: (vh*6.5)/2,
    resizeMode: "cover",
    // backgroundColor: "red"
    // marginLeft: vw*5,
  },
  titleCenterText:{
    fontSize: vh*2,
    color: colors.blackText
  },
  iconStyle:{
    height: vh*3,
    width: vh*3,
    resizeMode: "contain"
  },
  imgContainer:{
    borderRadius: (vh*5.5)/2,
overflow: "hidden"
  },
  userNameText:{
    fontSize: vh*1.75,
    color: colors.black,
    // marginLeft: vw*5.5,
  },
  titleText:{
    fontSize: vh*1.85,
    color: colors.black,
  },
  paymentText:{
    color: colors.blackText,
    paddingLeft: vw*2,
    fontSize: vh*2.1,
  },
//   circlePop:{
//     height: vh*1.2,
//     width: vh*1.2,
//     position: "absolute",
//     // bottom: vh*2,
//     top:vh*1,
//     elevation: 1,
//     zIndex:999,
//     right: vw*3,
//     backgroundColor: colors.brightGreen,
//     borderRadius: (vh*1.3)/2
// },
  titleImageContainer:{
    flexDirection: "row",
    alignItems: "center"
  },
  // iconStyle:{
  //   height: vh*2,
  //   width: vh*2,
  //   resizeMode: "contain"
  // },
  // bellStyle:{
  //   height: vh*2.6,
  //   width: vh*2.6,
  //   resizeMode: "contain"

  // },
  backIcon:{
    height: vh*1.7,
    width: vh*1.7,
    resizeMode: "contain",
    // tintColor: colors.black

  },
  // iconContaier:{
  //   height: vh*5.3,
  //   width: vw*10.6,
  //   borderRadius: (vh*5.3)/2,
  //   borderWidth: 1,
  //   borderColor: colors.greyBorder,
  //   alignItems: "center",
  //   justifyContent: "center"

  // },
  iconsContainer:{
    flexDirection: "row",
    // width: vw*20,
    // justifyContent: "space-between"
  },
  iconSpacing:{
    marginLeft: vw*5,
  }
});
export default styles;
