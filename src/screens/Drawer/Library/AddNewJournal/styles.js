import { StyleSheet } from 'react-native'
import { colors } from '../../../../utils/appTheme'
import { vh, vw } from '../../../../utils/dimensions'

const styles =StyleSheet.create({
    container:{
        paddingHorizontal: vw*4,
    },
    entryContainer:{
        alignItems: "flex-end"
    },
    entryText:{
        color: colors.themeColor.yellow,
        textDecorationLine: "underline",
        fontSize: vh*1.6
    },
    imageContainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    journalImg:{
        height: vh*15,
        width: vw*90,
        resizeMode: "contain",
        borderRadius: vh*2,
    },
    imgText:{
        color: colors.text.offwhite,
        fontSize: vh*1.6,
    }

})
export default styles 