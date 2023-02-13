import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/appTheme';
import {vh, vw} from '../../../utils/dimensions';

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 1,
    paddingTop: vh * 1,
    borderRadius: vh * 0.9,
    paddingLeft: vw * 3,
    textAlignVertical: 'top',
    borderColor: colors.greyInputBorder,

    // height: vh*10,
    // width: vw*80,
  },
  textinputContainer: {
    // alignItems: "center",
    // width: vw * 80,
    marginHorizontal: vw*4,
    marginTop: vh * 2,
  },
  labelText: {
    // width: vw*80,
    fontSize: vh * 1.9,
    paddingBottom: vh * 1,
    color: colors.blackText,
  },
  stericText: {
    color: colors.red,
  },
  titleContainer: {
    // width: vw*80,
    flexDirection: 'row',
  },
});
export default styles;
