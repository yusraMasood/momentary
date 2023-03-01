import { StyleSheet } from 'react-native'
import { fonts } from '../../../../assets/fonts'
import { colors } from '../../../../utils/appTheme'
import { vh, vw } from '../../../../utils/dimensions'

const styles =StyleSheet.create({
    container:{
        paddingHorizontal: vw*4,
    },
    entryContainer:{
        alignItems: "flex-end",
        marginTop: vh*4.5,
        marginBottom: vh*2,
    },
    entryText:{
        color: colors.themeColor.yellow,
        textDecorationLine: "underline",
        fontSize: vh*1.62
    },
    imageContainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    journalImg:{
        height: vh*25,
        width: vw*90,
        resizeMode: "cover",
        borderRadius: vh*2.5,
    },
    imgText:{
        color: colors.text.offwhite,
        fontSize: vh*2,
    },
    inputContainer:{
        paddingTop: 0,
        paddingBottom: vh*2,
    },
    inputInnerContainer:{
        marginVertical: 0
    },
    journalContainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: vh*2,
    },
    
      calendar: {
        height: vh * 20,
        width: vw * 95,
        alignSelf: 'center',
        // alignSelf: 'center',
        // paddingTop: -vh*,
        // paddingTop: vh*3,
      },
      selectedDateContainer: {
        backgroundColor: colors.themeColor.yellow,
        // padding: vh * 0.5,
        // paddingVertical: vh * 0.5,
        // paddingHorizontal: vw * 4,
        borderRadius: vh * 3,
      },
      dayContainer: {
        height: vh * 10,
      },
      dateContainer: {
        paddingVertical: vh * 5,
        // height: vh*15
      },
      selectedDateName: {color: colors.general.black},
      selectedDateNumber: {
        // backgroundColor: colors.defaultRed,
        color: colors.general.white,
        // paddingVertical: vh * 1,
        // paddingHorizontal: vw * 2,
        // borderRadius: vh * 2,
      },
      dateNumber: {
        color: colors.general.white,
        fontFamily: fonts.roboto.regular,
        fontSize: vh*1.9,
      },
      dateNumberContainer:{
        backgroundColor: colors.general.black,
        height: vh*4,
        width: vw*8,
        borderRadius: vh*3,
        alignItems: "center",
        justifyContent: "center"
      },

      dateName: {
        color: colors.general.white,
        fontFamily: fonts.roboto.regular,
        fontSize: vh*1.6,
      },
      calendarHeader: {
        color: colors.general.white,
      },
})
export default styles 