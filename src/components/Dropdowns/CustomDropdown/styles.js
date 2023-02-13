import { StyleSheet } from 'react-native';
import { colors, themeShadow } from '../../../utils/appTheme';
import { vh, vw } from '../../../utils/dimensions';

const styles = StyleSheet.create({
    dropdownValues:{
        // marginLeft: vw*2,
        // borderWidth:1,
        // borderColor: colors.greyBtnOrder,
        backgroundColor: colors.white,
        // borderRadius: vw*2.4,
        // ...themeShadow,
        borderColor: colors.greyInputBorder,
        borderWidth:1,
        padding: vh*1,
    },
    noOfTimes:{
      // paddingBottom: vh*1,
      paddingHorizontal: vw*2.2,
      paddingVertical: vh*1,

      // alignItems: "center"
    },
    dropdownContainer:{
    },
    icon: {
        height: vh * 2,
        width: vh * 2,
        resizeMode: 'contain',
      },
      statusContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.white,
        marginTop: vh*2,
        paddingVertical: vh*1.7,
        paddingHorizontal: vw*5,
        borderWidth:1,
        borderColor: colors.greyInputBorder
      },
      fromContainer:{
          width: vw*60,
          marginVertical: vh*1

      },
      statusText: {
        color: colors.grayTextColor,
        fontSize: vh*1.6,
        paddingRight: vw*19,
      },
})
export default styles