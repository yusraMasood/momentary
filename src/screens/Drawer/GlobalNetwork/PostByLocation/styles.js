import {StyleSheet} from 'react-native';
import { fonts } from '../../../../assets/fonts';
import {colors} from '../../../../utils/appTheme';
import {vh, vw} from '../../../../utils/dimensions';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: vw * 6,
    paddingTop: vh*5.5
  },
  hashtagMainContainer:{
    flexDirection: "row",
    justifyContent: "space-between"
  },
  imgStyle:{
    backgroundColor: colors.general.circleGrey,
    // backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    zIndex:1,
    height: "100%",
    width: "100%"
    // zIndex:1
  },
  numberText:{
    color: colors.general.white,
    fontSize: vh*3,
    // position: "absolute"
  },

  userDetailsContainer: {
    flexDirection: 'row',
    paddingBottom: vh * 2.9 ,
    justifyContent: 'space-between',
    alignItems: "flex-start"
  },
  addFriendIcon:{
    tintColor: colors.themeColor.yellow,
    height: vh*2.5,
    width: vh*2.5,
    resizeMode: "contain"
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
    width: vw*36
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
    width: vw*87,
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
    marginRight: vw*3
  },
  bookImagecontainer:{
    flexDirection: "row",
    marginTop: vh*2,
    // justifyContent: "space-between"
  },
  footerContainer:{
    alignItems: "center"
  },
});
export default styles;
