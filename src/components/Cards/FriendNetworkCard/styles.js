import { StyleSheet } from 'react-native'
import { colors } from '../../../utils/appTheme'
import { vh, vw } from '../../../utils/dimensions'


const styles =StyleSheet.create({
    container:{
        paddingBottom: vh*2,
        paddingTop: vh*2,
        // borderBottomWidth:1,
        // borderBottomColor: colors.input.greyBorder
    },

    userDetailsContainer:{
        flexDirection: "row",
        paddingBottom: vh*2,
        justifyContent: "space-between"
    },
    userImage:{
        height: vh*5,
        width: vh*5,
        resizeMode: "cover"
    },
    userImageContainer:{
        borderRadius: vh*5,
        overflow: "hidden",
        marginRight: vw*3
    },
    editIcon:{
        height: vh*2,
        width: vw*2.5,
        resizeMode: "contain"
    },
    commentIcon:{
        height: vh*2,
        width: vw*3.9,
        resizeMode: "contain"
    },
    hashtagContainer:{
        flexDirection: "row",
        alignItems: "center"
    },
    locationIcon:{
        height: vh*1.65,
        width: vw*3,
        resizeMode: "contain"
    },
    dateText:{
        color: colors.text.darkGrey,
        fontSize: vh*1.48,
        paddingLeft: vw*1,
        width: vw*40
    },
    nameText:{
        color: colors.general.white,
        fontSize: vh*2.1,
        paddingBottom: vh*0.2
    },
    editContainer:{
        flexDirection: "row",
        alignItems: "center"
    },
    descText:{
        color: colors.text.greyDesc,
    fontSize: vh*1.6,
    width: vw*86

    },
    commentContainer:{
        flexDirection: "row",
        alignItems: "center",

    },
    alignComment:{
        alignItems: "flex-end",
        marginTop: vh*1,
    },
    commentText:{
        color: colors.themeColor.yellow,
        fontSize: vh*1.55,
        paddingLeft: vw*1,
    },
    headerText:{
        color: colors.themeColor.yellow,
        textDecorationLine: "underline",
        fontSize: vh*1.6
    },
    hashtagsText:{
        fontSize: vh*1.7,
        color: colors.themeColor.yellow,
        paddingTop: vh*0.5,
        marginRight: vw*2
    }
})
export default styles