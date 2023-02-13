import {StyleSheet} from 'react-native';
import { colors, themeShadow } from '../../../utils/appTheme';
import { vh, vw } from '../../../utils/dimensions';

const styles = StyleSheet.create({
  stack: {
    flex: 1,
    overflow: 'hidden',
    backgroundColor: colors.white,
    // elevation:5,
    // ...themeShadow,
    shadowColor: "#81191A",
  shadowOffset: {
    width: 0,
    height: 3,
  },
  shadowOpacity: 0.14,
  shadowRadius: 4.65,
  elevation: 15,
 
  },

  redContainer:{
    flex: 1,
    overflow: 'hidden',
    backgroundColor: colors.white,

  },
  outerStyle: {
    flex: 1,
    borderRadius: vh * 2,
    // elevation: 100,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
  },
  outerContainer:{
    // flex:1,
    // height: vh*20,
    backgroundColor: colors.maroon,
    position: "absolute",
    top: vh*20,
    height: vh*73,
    width: vw*2.7,


  },
});
export default styles;