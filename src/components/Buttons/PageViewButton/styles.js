import {StyleSheet} from 'react-native';
import { colors } from '../../../utils/appTheme';
import { vh, vw } from '../../../utils/dimensions';


const styles = StyleSheet.create({
  container: {
    // width: vw * 91.5,
    // height: vh * 14,
    // backgroundColor: colors.red,
    marginTop: vh*1.3,
    marginBottom: vh*2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btnContainer: {
    // width: vw*25,
    borderWidth:1,
    borderRadius: vh*1,
    paddingVertical: vh*1,
    paddingHorizontal: vw*5,
    borderColor: colors.themeColor.yellow,
    justifyContent: "center",
    alignItems: "center"
  },
  btnFocusContainer:{
    backgroundColor: colors.themeColor.yellow
    

  },
//   btnText: {
//     color: 'rgba(119, 131, 143, 0.6)',
//     fontSize: vh * 1.9,
//   },
titleText:{
    color: colors.themeColor.yellow,
    fontSize: vh*1.75,
    // paddingTop: vh*0.8
},
titleFocusText:{
    color: colors.general.black,
    fontSize: vh*1.6
},
// container:{
//     alignItems: "center",
//     marginHorizontal: vw*4.3,
// }
});
export default styles;
