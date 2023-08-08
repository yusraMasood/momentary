import { StyleSheet } from 'react-native'
import { fonts } from '../../../../assets/fonts'
import { colors } from '../../../../utils/appTheme'
import { vh, vw } from '../../../../utils/dimensions'

const styles=StyleSheet.create({
    container:{
        paddingHorizontal: vw*4,
        // paddingTop: vh*2.5,
    },
    flatListContainer:{
        paddingBottom: vh*2,
    },
    headerContainer:{
        // alignItems: "flex-end"
        flexDirection: "row",
        alignItems: "center"
    },
    headerText:{
        color: colors.themeColor.yellow,
        textDecorationLine: "underline",
        fontSize: vh*1.8,
        marginLeft: vw*1,
    },
    dashText:{
        color: colors.themeColor.yellow,
        // textDecorationLine: "underline",
        fontSize: vh*1.8,
        marginLeft: vw*1,

    },
    alignContent:{
        alignItems: "flex-end"
    },
    // userImage:{
    //     height: vh*5,
    //     width: vw*10,
    //     resizeMode: "contain",
    //     borderRadius: vh*4,
    // },
    // textInputContainer:{
    //     flexDirection: "row",
    //     alignItems: "center",
    //     // marginTop: vh*2,
    // },
    // input:{
    //     flex:1,
    //     color: colors.general.white,
    //     fontFamily: fonts.roboto.regular
    //     // backgroundColor: "red"
    // },
    inputContainer:{
        // marginTop: vh*2,
        marginLeft: vw*3,
        width: vw*80,
        backgroundColor: colors.input.greyBackground,
        borderRadius: vh*4,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: vw*4,
    },
    sendIcon:{
        height: vh*1.7,
        width: vw*3,
        resizeMode: "contain"
    },
    friendNetworkStyle:{
        borderBottomWidth:1,
        borderBottomColor: colors.input.greyBorder
    }
})
export default styles