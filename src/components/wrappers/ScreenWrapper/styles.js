import {Platform, StyleSheet} from 'react-native';
import {colors} from '../../../utils/appTheme';
import {vh, vw} from '../../../utils/dimensions';
// import {getStatusBarHeight} from 'react-native-status-bar-height';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.general.black,
    // paddingTop: getStatusBarHeight() + vh * 2,
  },
});
export default styles;
