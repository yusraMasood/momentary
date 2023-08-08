import { StyleSheet } from 'react-native'
import { colors } from '../../../utils/appTheme'
import { vh, vw } from '../../../utils/dimensions'


const styles =StyleSheet.create({
    friendContainer:{
        flexDirection: "row",
        // marginTop: vh*2,
        marginBottom: vh*4,
        alignItems: "center",
        // backgroundColor: "red",
        justifyContent: "space-between"
    },
    userImage:{
        height: vh*8,
        width: vh*8,
        resizeMode: "cover"
    },
    imageWithNameContainer:{
        flexDirection: "row",
        alignItems: "center"

    },
    imageContainer:{
        borderRadius: vh*5,
        overflow: "hidden"
    },
    acceptText:{
        color: colors.general.green,
        fontSize: vh*1.7,
        textDecorationLine: "underline"
    },
    rejectText:{
        color: colors.general.lightRed,
        fontSize: vh*1.7,
        textDecorationLine: "underline",
        marginLeft: vw*4,

    },
    requestContainer:{
        // flex:1,
        flexDirection: "row"
    },
    nameText:{
        color: colors.general.white,
        fontSize: vh*2.2,

    },
    nameContainer:{
        paddingLeft: vw*4,
    },
    jobText:{
        color: colors.text.grey,
        fontSize: vh*1.6,

    },
    requestBtnText:{
        color: colors.themeColor.yellow,
        textDecorationLine: "underline",
        fontSize: vh*1.7
    }

})
export default styles