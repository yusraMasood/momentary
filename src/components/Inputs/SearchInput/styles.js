import {Platform, StyleSheet} from 'react-native';
import {nativeViewHandlerName} from 'react-native-gesture-handler/lib/typescript/handlers/NativeViewGestureHandler';
import {colors, themeShadow} from '../../../utils/appTheme';
import {vh, vw} from '../../../utils/dimensions';

const styles = StyleSheet.create({
  input: {
    flex: 1,
paddingVertical: vh*1
    // backgroundColor: "red"
  },
  imgIcon: {
    height: vh * 2.5,
    width: vh * 2.5,
    resizeMode: 'contain',
    marginRight: vw*1,
  },
  inputContainer: {
    paddingVertical: Platform.OS == 'ios' ? vh * 1.5 : 0,

    // backgroundColor: colors.white,
    borderWidth:1,
    borderColor: colors.greyInputBorder,
    marginHorizontal: vw * 4,
    flexDirection: 'row',
    alignItems: 'center',
    // borderRadius: vh * 2,
    marginVertical: vh * 2,
    borderRadius: vh*1.2,
    // paddingVertical: vh*1,
    paddingHorizontal: vw * 3,
    // ...themeShadow,
  },
});
export default styles;
