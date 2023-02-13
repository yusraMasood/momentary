import {StyleSheet} from 'react-native';
import { colors } from '../../../utils/appTheme';
import { vh, vw } from '../../../utils/dimensions';

const styles = StyleSheet.create({
  dropImage:{
    height: vh*14,
    width: vw*30,
    resizeMode: "contain",
    // backgroundColor: "red",

    // marginTop: vh*2
    // marginBottom: vh*1
  },
  successImage:{
      height: vh*16,
      width: vw*42,
      resizeMode: "cover",
      // backgroundColor: "red",
      marginTop: vh*2
      // marginBottom: vh*1
  },
  crossIcon:{
    height: vh*5,
    width: vh*5,
    resizeMode: "contain",
   

  },
  crossContainer:{
    position: "absolute",
    left: vw*1.9,
    top: vh*1.1,
  },
  text: {
    // marginVertical: vh * 2,
    marginTop: vh*1,
    // marginBottom: vh*2,
    color: colors.black,
    fontSize: vh*1.7,
    textAlign: "center",
    width: vw*55
  },
  titleText: {
    fontSize: vh * 2.08,
    letterSpacing:vh*0.05,
    marginTop: vh*1,
    color: colors.black,
    textAlign: 'center'
  },

  buttonNo:{
    // marginTop: vh*2,
    width: vw*29,
    paddingVertical: vh*1.2,
  },
 
  container: {
    height: vh * 35,
    alignItems: 'center',
    justifyContent: "center"
  },
});

export default styles;