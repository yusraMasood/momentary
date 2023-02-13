import {StyleSheet} from 'react-native';
import {fonts} from '../../../assets/fonts';
import {colors} from '../../../utils/appTheme';
import {vh, vw} from '../../../utils/dimensions';

const styles = StyleSheet.create({
  container: {
    paddingTop: vh * 2.5,
    
  },
  alignInputImage:{
    flexDirection: 'row',
    alignItems: 'center',

  },
  inputBorder:{
    borderRadius: vh * 1,


  },
  inputWithIcon: {
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: colors.white,
    borderBottomColor: colors.input.greyBorder ,
    borderBottomWidth:1,
    paddingHorizontal: vw * 2,
    marginHorizontal: vw * 0.5,
    marginVertical: vh * 0.5,
    paddingTop:vh*0.9,
  
  },
  inputMultiLine: {
    textAlignVertical: 'top',
  },
  icon: {
    height: vh * 2,
    width: vh * 2,
    resizeMode: 'contain',
    marginRight: vw * 2.3,
  },
  rghtIcon:{
    height: vh * 2,
    width: vh * 2,
    resizeMode: 'contain',
    marginLeft: vw * 2.3,
  },
  input: {
    // paddingVertical: vh * 1.4,
    flex: 1,
    padding: 0,
    color: colors.black,
    // fontFamily: fonts.recolita.regular,
    fontSize: vh * 1.85,
  },
  // labelContainer: {
  //   flexDirection: 'row',
  // },
  labelText: {
    color: colors.blackappText,
    paddingLeft: vw*6.3,
    fontSize: vh * 1.65,
    paddingBottom:vh*0.5,
  },
  withoutLeftIcon:{
    color: colors.input.greyBorder,
    // width: vw*15,
    // paddingLeft: vw*6.3,
    fontSize: vh * 1.65,
    paddingBottom:vh*0.5,
    marginLeft: vw*2,
  },
  // require: {
  //   color: colors.red,
  // },
});

export default styles;
