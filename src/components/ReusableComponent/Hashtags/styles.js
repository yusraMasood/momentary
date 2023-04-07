import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/appTheme';
import {vh, vw} from '../../../utils/dimensions';

const styles = StyleSheet.create({
  hashtagsMainContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  hashtagContainer: {
    borderWidth: 1,
    marginBottom: vh * 1,
    borderColor: colors.themeColor.yellow,
    paddingVertical: vh * 0.8,
    paddingHorizontal: vw * 2.3,
    // marginRight: vw*2,
    borderRadius: vh * 1,
    // flexDirection: "row"
  },
  hashtagText: {
    color: colors.themeColor.yellow,
    fontSize: vh * 1.8,
  },
  crossimg: {
    height: vh * 0.5,
    position: 'absolute',
    top: vh * 0.6,
    right: vw * 1.2,
    width: vh * 0.5,
    tintColor: colors.themeColor.yellow,
    resizeMode: 'contain',
  },
});
export default styles;
