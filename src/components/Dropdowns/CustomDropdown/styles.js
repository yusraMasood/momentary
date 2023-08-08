import { StyleSheet } from 'react-native';
import { colors, themeShadow } from '../../../utils/appTheme';
import { vh, vw } from '../../../utils/dimensions';

const styles = StyleSheet.create({
    dropdownValues:{
        borderWidth:1,
        borderColor: colors.input.greyBorder,
        padding: vh*1,
    },
    noOfTimesText:{

      color: colors.text.offwhite,
      fontSize: vh*1.8
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
        // backgroundColor: colors.white,
        marginTop: vh*2,
        paddingVertical: vh*1.7,
        paddingHorizontal: vw*5,
        borderWidth:1,
        borderColor: colors.input.greyBorder,
        // marginBottom: vh*2,
      },
      fromContainer:{
          width: vw*60,
          marginVertical: vh*1

      },
      statusText: {
        color: colors.text.offwhite,
        fontSize: vh*1.6,
        paddingRight: vw*19,
      },
      statusFocusText:{
        color: colors.text.grey,


      }
})
export default styles