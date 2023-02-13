import {StyleSheet} from 'react-native';
import { colors } from '../../../utils/appTheme';
import { vh, vw } from '../../../utils/dimensions';

const styles = StyleSheet.create({
  dropImage:{
    height: vh*24,
    width: vw*25,
    resizeMode: "contain",
  },
  cancelText:{
    color: colors.themeRed,
    textDecorationLine: "underline",
    fontSize: vh*1.8,
    marginTop: vh*1,
  },
  hrStyle:{
    height: vh*0.8,
    width: vw*16,
    borderRadius: vh*1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    marginTop:vh*1,
  },
  titleText: {
    fontSize: vh * 2.08,
    letterSpacing:vh*0.05,
    // marginTop: vh*1,
    paddingBottom: vh*2,
    color: colors.blackText,
    textAlign: 'center',
  },

  container: {
    // height: vh * 30,
    alignItems: 'center',
    // justifyContent: "center"
  },
  contentContainer:{
    height: vh*49,
  },
});

export default styles;