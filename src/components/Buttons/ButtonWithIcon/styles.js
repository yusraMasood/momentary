import {StyleSheet} from 'react-native';
import {colors, themeShadow} from '../../../utils/appTheme';
import {vh, vw} from '../../../utils/dimensions';

const styles = StyleSheet.create({
  iconStyle: {
    height: vh * 2.1,
    width: vh * 2.1,
    resizeMode: 'contain',
    marginRight: vw*3,
  },
  buttonContainer: {
    // paddingVertical: vh * 1.3,
    paddingHorizontal: vw * 6,
    height: vh*5.3,
    width: vw*35,
    marginTop: vh*1.5,
    backgroundColor: colors.themeRed,
    flexDirection: 'row',
    alignItems: "center",
    borderRadius: vh * 2,
    ...themeShadow
  },
  buttonText: {
    fontSize: vh * 1.8,
    color: colors.white,
  },
  alignButton: {
    alignItems: 'center',
  },
});
export default styles;
