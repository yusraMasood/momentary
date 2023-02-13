import { StyleSheet } from 'react-native';
import { colors, themeShadow } from '../../../utils/appTheme';
import { vh, vw } from '../../../utils/dimensions';

const styles = StyleSheet.create({
    dropdownValues:{
        // marginLeft: vw*2,
        // borderWidth:1,
        // borderColor: colors.greyBtnOrder,
        backgroundColor: colors.white,
        borderColor: colors.categoryBlueBorder,
        backgroundColor: colors.categoryBlueBackground,
        // borderRadius: vw*2.4,
        // ...themeShadow,
        // borderColor: colors.greyInputBorder,
        borderWidth:1,
        padding: vh*1,
        borderRadius: vh*1.8,
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
        height: vh * 1.5,
        width: vh * 1.5,
        tintColor: colors.black,
        resizeMode: 'contain',
      },
      statusContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: vh*2,
        paddingVertical: vh*1,
        paddingHorizontal: vw*4,
        borderWidth:1,
        borderRadius: vh*1.8,
        borderColor: colors.categoryBlueBorder,
        backgroundColor: colors.categoryBlueBackground,
      },
      fromContainer:{
          width: vw*60,
          marginVertical: vh*1

      },
      statusText: {
        color: colors.blackText,
        fontSize: vh*1.6,
        paddingRight: vw*8,
      },

})
export default styles