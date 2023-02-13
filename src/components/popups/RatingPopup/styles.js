import {StyleSheet} from 'react-native';
import { colors, themeShadow } from '../../../utils/appTheme';
import { vh, vw } from '../../../utils/dimensions';

const styles = StyleSheet.create({

  hrStyle:{
    height: vh*0.8,
    width: vw*16,
    borderRadius: vh*1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    marginTop:vh*1,
  },

  container: {
    // height: vh * 30,
    alignItems: 'center',
    // justifyContent: "center"
  },
  contentContainer:{
    height: vh*49,
  },
  reviewHeadingText:{
    fontSize: vh*2.4,
    marginTop: vh*4,
    color: colors.blackText
  },
  productNameText:{
    color: colors.themeRed,
    fontSize: vh*2,
    paddingTop: vh*1,
    paddingBottom: vh*2,
  },
  inputContainer:{
    backgroundColor: colors.white,
    width: vw*90,
    height: vh*15,
    textAlignVertical: "top",
    borderRadius: vh*1.3,
    paddingHorizontal: vw*3,
    borderWidth:0.6,
    borderColor: colors.inputGreyBorder,
    paddingVertical: vh*1.4,
    marginTop: vh*4,
   
  },
  starContainer:{
    // backgroundColor: "blue",
    width: vw*80,
    // width: vw*90,
    // alignItems: "flex-start"
  },
  btnStyle:{
    // width: vw*40,
    paddingHorizontal: vw*4,
  }
});

export default styles;