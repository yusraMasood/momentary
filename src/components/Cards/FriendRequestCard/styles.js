import { StyleSheet } from 'react-native'
import { colors } from '../../../utils/appTheme'
import { vh, vw } from '../../../utils/dimensions'


const styles =StyleSheet.create({
    friendContainer:{
        flexDirection: "row",
        // marginTop: vh*2,
        marginBottom: vh*4,
        alignItems: "center",
        justifyContent: "space-between"
    },
    userImage:{
        height: vh*8,
        width: vw*16,
        resizeMode: "contain"
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

    }

})
export default styles