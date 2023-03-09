import {StyleSheet} from 'react-native';
import {colors} from '../../../../utils/appTheme';
import {vh, vw} from '../../../../utils/dimensions';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: vw * 4,
    paddingTop: vh * 2,
  },
  textEditorContainer: {
    borderWidth: 1,
    marginTop: vh * 2,
    borderColor: colors.input.greyBorder,
    // height: vh*50
  },
  titleCenterText: {
    fontSize: vh * 3.5,
    color: colors.themeColor.yellow,
  },
  editorText: {
    backgroundColor: colors.general.black,
    color: colors.text.offwhite,
    // fontSize: vh*1.7
    // height:vh*70
  },
  toolContainer: {
    backgroundColor: colors.general.black,
    // tintColor: colors.themeColor.yellow
    borderBottomColor: colors.input.greyBorder,
    borderBottomWidth: 1,
  },
  textIcon: {
    height: vh * 3.5,
    width: vw * 7,
    // backgroundColor: "blue",
    resizeMode: 'contain',
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
  publishPopup: {
    height: vh * 48,
  },
});
export default styles;
