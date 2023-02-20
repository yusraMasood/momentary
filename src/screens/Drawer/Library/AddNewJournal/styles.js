import { StyleSheet } from 'react-native'
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
    }

})
export default styles 