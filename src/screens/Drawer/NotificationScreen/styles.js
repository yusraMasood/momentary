import { StyleSheet } from 'react-native'
import { colors } from '../../../utils/appTheme'
import { vh, vw } from '../../../utils/dimensions'

const styles=StyleSheet.create({
    container:{
        paddingHorizontal: vw*4,
    },
    dateContainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: vh*0.5,
    },
    dateText:{
        color: colors.text.grey,
        fontSize: vh*1.6
    },
    descText:{
        color: colors.text.offwhite,
        fontSize: vh*1.7
    },
    cardContainer:{
        marginBottom: vh*3,
    },
    headingText:{
        color: colors.themeColor.yellow,
        fontSize: vh*3.5
    },
    viewText:{
        color: colors.themeColor.yellow,
        textDecorationLine: "underline",
        fontSize: vh*1.65
    },
    alignContent:{
        alignItems: "flex-end",
        marginBottom: vh*2,
    },
    friendHeadingContainer:{
        flexDirection: "row",
        alignItems: "center",justifyContent: "space-between"
    },
  
})
export default styles