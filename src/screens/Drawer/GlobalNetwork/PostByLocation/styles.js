import {StyleSheet} from 'react-native';
import { fonts } from '../../../../assets/fonts';
import {colors} from '../../../../utils/appTheme';
import {vh, vw} from '../../../../utils/dimensions';
// import { colors } from '../../../utils/appTheme'
// import { vh, vw } from '../../../utils/dimensions'

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: vw * 6,
    paddingTop: vh*5.5
  },

  userDetailsContainer: {
    flexDirection: 'row',
    paddingBottom: vh * 2.9 ,
    justifyContent: 'space-between',
    alignItems: "flex-start"
  },
  editIcon: {
    height: vh * 2,
    width: vw * 2.5,
    resizeMode: 'contain',
  },
  commentIcon: {
    height: vh * 2,
    width: vw * 3.9,
    resizeMode: 'contain',
  },
  locationIcon: {
    height: vh * 1.65,
    width: vw * 3,
    resizeMode: 'contain',
  },
  dateText: {
    color: colors.text.darkGrey,
    fontSize: vh * 1.54,
    paddingLeft: vw * 1,
  },
  nameText: {
    color: colors.general.white,
    fontSize: vh * 2.2,
    paddingBottom: vh * 0.2,
  },
  editContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  descText: {
    color: colors.text.greyDesc,
    fontSize: vh * 1.65,
    width: vw * 86,
  },
  hashtagText:{
    color: colors.themeColor.yellow,
    fontSize: vh*1.9,
    paddingTop: vh*0.5,
  },
  bookImage:{
    height: vh*25,
    width: vw*90,
    resizeMode: "cover",
    borderRadius: vh*1.3,
    marginTop: vh*2,
  },
  bookSmallImage:{
    height: vh*10,
    width: vw*28,
    resizeMode: "cover",
  },
  smallBookImageContainer:{
    overflow: "hidden",
    borderRadius: vh*1,
  },
  bookImagecontainer:{
    flexDirection: "row",
    marginTop: vh*2,
    justifyContent: "space-between"
  },
  // likeIcon:{
  //   height: vh*3,
  //   width: vw*6,
  //   marginRight: vw*2,
  //   resizeMode: "contain"
  // },
  // likeContainer:{
  //   flexDirection: "row",
  //   alignItems: "center"
  // },
  // likeText:{
  //   color: colors.text.grey,
  //   fontSize: vh*1.7
  // },
  // likeCountContainer:{
  //   flexDirection: "row",
  //   alignItems: "center",
  //   justifyContent: "space-between",
  //   marginTop: vh*2,
  //   paddingRight: vw*3,
  //   paddingBottom: vh*1,
  //   marginBottom: vh*1.2,
  //   borderBottomColor: colors.text.greyBorder,
  //   borderBottomWidth: 1,
  // },
  // iconLike:{
  //   height: vh*2.7,
  //   width: vw*5.5,
  //   resizeMode: "contain"

  // },
  // commentText:{
  //   color: colors.text.grey,
  //   fontSize: vh*2,
  //   paddingLeft: vw*2,
  // },
  // likeFocusIcon:{},
  // likeBtnContaienr:{

  //   flexDirection: "row",
  //   alignItems: "center"
  // },
  // likeMainContainer:{
  //   flexDirection: "row",
  //   justifyContent: "space-between"
  // },
  //  userImage:{
  //       height: vh*5,
  //       width: vw*10,
  //       resizeMode: "contain",
  //       borderRadius: vh*4,
  //   },
    // textInputContainer:{
    //     flexDirection: "row",
    //     alignItems: "center",
    //     marginTop: vh*2,
    // },
    // input:{
    //     // flex:1,
    //     width: vw*63,
    //     color: colors.general.white,
    //     // backgroundColor: "red",
    //     fontFamily: fonts.roboto.regular
    //     // backgroundColor: "red"
    // },
  //   inputContainer:{
  //     // marginTop: vh*2,
  //     marginLeft: vw*3,
  //     // width: vw*80,
  //     backgroundColor: colors.input.greyBackground,
  //     borderRadius: vh*4,
  //     flexDirection: "row",
  //     alignItems: "center",
  //     paddingHorizontal: vw*4,
  // },
  // sendIcon:{
  //     height: vh*1.7,
  //     width: vw*3,
  //     resizeMode: "contain"
  // }
});
export default styles;
