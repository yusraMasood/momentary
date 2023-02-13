import {StyleSheet} from 'react-native';
import {colors, themeShadow} from '../../../utils/appTheme';
import {vh, vw} from '../../../utils/dimensions';

const styles = StyleSheet.create({
  drawerContainer: {
    flex:1,
   paddingTop: vh*4,
   paddingHorizontal: vw*5,
   backgroundColor: colors.white
  },
  userProfileContainer:{
    flexDirection: "row",
    alignItems: "center",
    // paddingRight: vw*5,
  },
  logoutButtonContainer:{
    marginVertical: vh*1,
  },
  btnStyle:{
    backgroundColor: colors.lightPinkBtn
  },
  userDetailsWithButtonContainer:{
    // backgroundColor: "blue",
    width: vw*90,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  donateBtnStyle:{
    marginTop: vh*1,
  },
  btnText:{
    color: colors.blackText
  },
  userImage:{
    height: vh*8,
    width: vw*16,
    resizeMode: "cover",
    borderRadius: (vh*9)/2,
    marginBottom: vh*2,
    marginRight: vw*3,
  },
  usernameText:{
    fontSize: vh*2.5,
    letterSpacing:vh*0.2,
    color: colors.blackText,
  },
  emailText:{
    color: colors.blackText,
    paddingTop: vh*0.5,
    fontSize: vh*1.6
  },
  logoutIcon:{
    height: 2.5 * vh,
    width: 2.5 * vh,
    resizeMode: 'contain',
    tintColor: colors.blackText
  },
  label: {
    fontSize: 2 * vh,
    color: colors.white,
    marginLeft: vw * 3,
  },
  drawerButtonContainer: {
    // backgroundColor: "red",
    paddingHorizontal: vw*5,
    alignItems: 'center',
    flexDirection: "row"
  },
  logoutBtn:{
    // paddingHorizontal: vw*10,
    width: vw*35,
    paddingVertical: vh*1.2,
    marginVertical: 0,
    // paddingVertical: 0,
  },
  logoutText:{
    fontSize: vh*1.8
  },
});
export default styles;
