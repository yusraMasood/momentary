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
        height: vh * 1.2,
        width: vh * 1.2,
        resizeMode: 'contain',
      },
      statusContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: vh*0.7,
        borderBottomWidth:1,
        borderBottomColor: colors.input.greyBorder
      },
      fromContainer:{
          width: vw*60,
          marginVertical: vh*1

      },
      statusText: {
        color: colors.text.grey,
        fontSize: vh*1.6,
        paddingBottom: vh*0.5,
        paddingRight: vw*7,
      },
      priecText:{
        color: colors.text.offwhite,
        fontSize: vh*2,
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