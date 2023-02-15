import { StyleSheet } from 'react-native'
import { colors } from '../../../../utils/appTheme'
import { vh, vw } from '../../../../utils/dimensions'

const styles=StyleSheet.create({
    container:{
        paddingHorizontal: vw*4,
        paddingTop: vh*4.5,
    },
    newCardContainer:{
        marginTop: vh*1.5,
        borderWidth:1,
        borderRadius: vh*0.5,
        paddingVertical: vh*5.15,
        borderColor: colors.input.greyBorder,
        justifyContent: "center",
        alignItems: "center"
    },
    headingText:{
        color: colors.text.offwhite,
        fontSize: vh*2.55,
        paddingBottom: vh*0.7,
    },
    entryDescText:{
        color: colors.text.grey,
        // width: vw*40,
        textAlign: "center",
        paddingLeft: vw*1,
        fontSize: vh*1.7
    },
    descText:{
        color: colors.text.grey,
        width: vw*40,
        textAlign: "center",
        fontSize: vh*1.6
    },
    calendarContainer:{
        flexDirection: "row",
        alignItems: "center"
    },
    calendarIcon:{
        height: vh*2,
        width: vw*4,
        resizeMode: "contain"
    }
})
export default styles