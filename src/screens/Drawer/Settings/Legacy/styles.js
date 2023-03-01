import {StyleSheet} from 'react-native';
import {colors} from '../../../../utils/appTheme';
import {vh, vw} from '../../../../utils/dimensions';

const styles = StyleSheet.create({
  accountHeadingText: {
    fontSize: vh * 2.6,
    color: colors.text.offwhite,
    paddingBottom: vh * 1.5,
    paddingTop: vh * 1.7,
  },
  container: {
    paddingHorizontal: vw * 4,
  },
  deleteContainer:{
    // paddingBottom: 0,
    marginBottom: 0
    
  },


  primaryText: {
    fontSize: vh * 2.4,
    color: colors.text.offwhite,
  },
  editText: {
    color: colors.themeColor.yellow,
    fontSize: vh * 2,
    textDecorationLine: 'underline',
  },
  cardHeadingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginVertical: vh*2
    marginBottom: vh*2.6,
    marginTop: vh*2.7,
  },
  itemContainer:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: vh*2,
  },
  titleText:{
    color: colors.text.offwhite,
    fontSize: vh*1.7
  },
  valueText:{
    color: colors.text.grey,
    fontSize: vh*1.6
  },
  gridContainer:{
    borderWidth:1,
    borderColor:colors.input.greyBorder,
    paddingHorizontal: vw*3,
    borderRadius: vh*0.5,
    // paddingVertical: vh*0.5,
    paddingTop: vh*1,
  },
  notSetLagacyText:{
    color: colors.themeColor.yellow,
    paddingTop: vh*4,
    fontSize: vh*1.9
  },
  btnAlign:{
    marginTop: vh*22,
  }
});
export default styles;
