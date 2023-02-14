import {StyleSheet} from 'react-native';
import {colors, themeShadow} from '../../utils/appTheme';
import {vh, vw} from '../../utils/dimensions';

const styles = StyleSheet.create({
  icon:{
    height: vh*3.5,
    width: vw*7,
    // backgroundColor: colors.general.red,
    resizeMode: "contain",
    tintColor: colors.text.grey
  },
  iconLibrary:{
    tintColor: colors.text.grey,
    height: vh*3,
    width: vw*6,
    resizeMode: "contain" ,

  },
  focusIcon:{
    tintColor: colors.themeColor.yellow
  }
});

export default styles;

