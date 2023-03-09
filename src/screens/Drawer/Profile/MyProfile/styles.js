import {StyleSheet} from 'react-native';
import {colors} from '../../../../utils/appTheme';
import {vh, vw} from '../../../../utils/dimensions';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: vw * 4,
    paddingTop: vh * 14,
  },

  userImg: {
    height: vh * 10,
    width: vw * 22,
    resizeMode: 'cover',
    borderRadius: vh * 6,
  },
  // titleText:{
  //     fontSize: vh*1.7,
  //     color: colors.general.white
  // },
  // valueText:{
  //     fontSize: vh*1.7,
  //     color: colors.text.grey
  // },
  // itemContainer:{

  //     width: vw*45,
  //     marginTop: vh*2.6,
  // },
  passwordText: {
    color: colors.themeColor.yellow,
    textDecorationLine: 'underline',
    fontSize: vh * 1.6,
    marginTop: vh * 1,
    marginBottom: vh * 5.1,
  },
  // profileContainer:{
  //     flexDirection: "row",
  //     flexWrap: "wrap",
  //     justifyContent: "space-between"
  // },
  // columnWrapperStyle:{
  //     justifyContent: "space-between",
  //     // marginBottom: vh*4,
  // },
  btnContainer: {
    marginTop: vh * 13,
  },
});
export default styles;
