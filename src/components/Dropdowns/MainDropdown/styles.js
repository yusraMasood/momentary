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
        height: vh * 1.5,
        width: vh * 1.5,
        resizeMode: 'contain',
      },
      statusContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: vh*1,
        justifyContent: 'space-between',
        // backgroundColor: colors.white,
        marginTop: vh*1.5,
        paddingVertical: vh*1.8,
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
        fontSize: vh*2,
        paddingRight: vw*19,
      },
      priecText:{
        color: colors.text.offwhite,
        fontSize: vh*2,
        // paddingLeft: vw*4,
        paddingRight: vw*4,
      },
      statusFocusText:{
        color: colors.text.grey,


      },
      imageContainer:{
        flexDirection: "row",
        alignItems: "center"
      }
})
export default styles