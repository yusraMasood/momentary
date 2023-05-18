import {StyleSheet} from 'react-native';
import {colors} from '../../../../utils/appTheme';
import {vh, vw} from '../../../../utils/dimensions';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: vw * 2,
  },
  searchInput: {
    marginVertical: 0,
    marginTop: vh * 2,
    marginBottom: vh * 0.5,
  },
  noteGridContainer:{
    height: vh*23,
    overflow: "hidden"
  },
  containerHtml:{
    height: 1
  },
  addEntryContainer: {
    backgroundColor: colors.themeColor.grey,
    paddingVertical: vh * 7.4,
    alignItems: 'flex-end',
    borderRadius: vh * 1,
    paddingHorizontal: vw * 23,
    marginTop: vh * 2,
  },
  descText:{
    height: vh*10,
    // backgroundColor: "red"
  },
  girlImg: {
    position: 'absolute',
    left: vw * 14,
    height: vh * 20,
    width: vw * 31,
    resizeMode: 'cover',
  },

  entryText: {
    color: colors.themeColor.yellow,
    fontSize: vh * 2.4,
    textDecorationLine: 'underline',
  },
  listNoteContainer:{
    width: vw*45,
    marginLeft: vw*2,
    height: vh*30

  },
  evenContainer:{
  },
  deleteIcon:{
    marginTop: vh*2,
  },
  contentContainer:{
    paddingBottom: vh*15,
    // backgroundColor: "red"
  },
  lastEntryContainer:{
    backgroundColor: colors.themeColor.grey,
    paddingVertical: vh*1,
    paddingHorizontal: vw*3.2,
    borderRadius: vh*1,
    marginTop: vh*2,
    marginLeft: vw*3,
  },
  girlImgGrid:{
    height: vh * 25,
    width: vw * 38,
    resizeMode: 'cover',
  },
  lastEntryText:{
    color: colors.themeColor.yellow,
    textDecorationLine: "underline",
    fontSize: vh*1.75
  },
  alignEntryText:{
    alignItems: "flex-end"
  }
});
export default styles;
