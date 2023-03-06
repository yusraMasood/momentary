import {StyleSheet} from 'react-native';
import {colors} from '../../../../utils/appTheme';
import {vh, vw} from '../../../../utils/dimensions';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: vw * 4,
    // paddingBottom: vh*10,
    // paddingTop: vh*4,
  },
  listNoteContainer:{
    width: vw*44,
    // marginLeft: vw*2,

  },
  column:{
    justifyContent: "space-between"
  },
 
  deleteIcon:{
    marginTop: vh*2,
  },
  contentContainer:{
    // marginTop: vh*4,
    paddingBottom: vh*15
  },
  titleCenterText:{
    fontSize: vh*3.5,
    color: colors.themeColor.yellow,
  },
  
});
export default styles;
