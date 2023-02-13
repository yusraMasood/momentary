import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/appTheme';
import {vh, vw} from '../../../utils/dimensions';

const styles = StyleSheet.create({
  dateContainer: {
    paddingVertical: vh * 1,
    paddingHorizontal: vw * 3,
    borderWidth: 1,
    borderColor: colors.categoryBlueBorder,
    backgroundColor: colors.categoryBlueBackground,
    borderRadius: vh * 1,
    // marginRight: vw*3,
    marginTop: vh * 2,
  },
  focusDateContainer: {
    backgroundColor: colors.themeRed,
    borderWidth: 0,
  },
  focusDateText: {
    color: colors.white,
  },
  dateText: {
    color: colors.greyText,
    fontSize: vh * 1.7,
  },
});

export default styles;
