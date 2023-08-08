import {StyleSheet} from "react-native"
import { colors } from "../../../utils/appTheme"
import { vh } from "../../../utils/dimensions"

const styles=StyleSheet.create({
    headingContainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: vh*1,
        marginTop: vh*2,
        alignItems: "center"
    },
    headingText:{
        color: colors.text.offwhite,
        fontSize: vh*2.5
    },
    viewText:{
        color: colors.themeColor.yellow,
        fontSize: vh*1.7,
        textDecorationLine: "underline"
    },
})
export default styles