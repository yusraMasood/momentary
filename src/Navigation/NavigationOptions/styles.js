import {StyleSheet} from 'react-native';
import {colors} from '../../utils/appTheme';
import {vh, vw} from '../../utils/dimensions';

const styles = StyleSheet.create({

  titleCenterText:{
    fontSize: vh*3.5,
    color: colors.themeColor.yellow
  },
  titleText:{
    fontSize: vh*1.85,
    color: colors.black,
  },
  backIcon:{
    height: vh*3,
    width: vh*3 ,
    resizeMode: "contain",

  },
  circleNotification:{
    height: vh*1.2,
    width: vw*2.5,
    // right: vw*0.3,
    borderWidth:1,
    borderRadius: vh*1,
    backgroundColor: colors.general.red,
    position: "absolute"

  }
});
export default styles;
