import { StyleSheet } from 'react-native'
import { colors } from '../../../utils/appTheme'
import { vh, vw } from '../../../utils/dimensions'


const styles =StyleSheet.create({
    headingText:{
        color: colors.text.offwhite,
        fontSize: vh*2.5
    },
    viewText:{
        color: colors.themeColor.yellow,
        fontSize: vh*1.7,
        textDecorationLine: "underline"
    },
    headingContainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: vh*1,
        marginTop: vh*2,
        alignItems: "center"
    },
    bookImage:{
        height: vh*15,
        width: vw*30,
        // resizeMode: "cover"
        resizeMode: "stretch"
    },
    imageContainer:{
        borderRadius: vh*1.4,
        // backgroundColor: "blue",
        marginRight: vw*2,
        overflow: "hidden"
    }
})
export default styles