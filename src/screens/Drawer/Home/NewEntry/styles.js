import {StyleSheet} from 'react-native';
import {colors} from '../../../../utils/appTheme';
import {vh, vw} from '../../../../utils/dimensions';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: vw * 4,
    paddingTop: vh * 2,
  },
  contentContainerStyle:{
    marginVertical: vh*2,
  },
  publishPopup: {
    height: vh * 49.3,
  },
  backIcon:{
    height: vh*3,
    width: vh*3 ,
    resizeMode: "contain",

  }
  ,
  rightContainer:{
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "space-between"
  },
  entryIcon:{
    height: vh*2.2,
    width: vh*2.2,
    marginLeft: vw*2,
    resizeMode: "contain"
  },
  saveIcon:{
    height: vh*1.9,
    width: vh*1.9,
    marginLeft: vw*2,
    resizeMode: "contain"
  },
  editContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginTop: vh*2,
    borderTopWidth: 1,
    borderTopColor: colors.input.greyBorder,
    paddingVertical: vh * 1.4,
    paddingHorizontal: vw * 5.5,
  },
  textIcon: {
    height: vh * 3.5,
    width: vw * 7,
    // backgroundColor: "blue",
    resizeMode: 'contain',
  },

});
export default styles;
