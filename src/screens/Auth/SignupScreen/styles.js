import { StyleSheet } from 'react-native'
import { colors } from '../../../utils/appTheme'
import { vh, vw } from '../../../utils/dimensions'

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: vw*4,
        paddingTop: vh*4,
    },
    momentaryText:{
        color: colors.themeColor.yellow,
        fontSize: vh*6.5,
        
    },
    alignContent:{
        alignItems: "center"
    },
    signinText:{
        marginTop: vh*2,
        color:colors.text.offwhite,
        fontSize: vh*3,
    },
    userimage:{
      marginTop: vh*2,
      height: vh*12,
      width: vw*25,
      resizeMode: "contain",
      borderRadius: vh*6
    },
    cameraIcon:{
      height: vh*2,
      width: vw*4,
      resizeMode: "contain"
    },
    // forgotPasswordText:{
    //     color: colors.themeColor.yellow,
    //     fontSize: vh*1.7,
    //     textDecorationLine: "underline"
    // },
    // rememberText:{
    //     color: colors.text.offwhite,
    //     fontSize: vh*1.6,
    //     paddingLeft: vw*2,
    // },
    // switchContainer:{
    //     flexDirection: "row",
    //     alignItems: "center"
    // },
    // forgotAndRememberPasswordContainer:{
    //     flexDirection: "row",
    //     justifyContent: "space-between",
    //     marginVertical: vh*4,
    // },
    // fingerPrintStyle:{
    //     height: vh*10,
    //     width: vw*20,
    //     marginBottom: vh*2,
    //     resizeMode: "contain"
    // },
    newAuthorText:{
        color: colors.text.offwhite,
        fontSize: vh*1.7
    },
    registerText:{
        color: colors.text.offwhite,
        fontSize: vh*1.7,
        textDecorationLine: "underline"
    },
    registerContainer:{
        flexDirection: "row",
        // marginTop: vh
        alignItems: "center",
        paddingBottom: vh*0.5,
    },
    faceRecognotionText:{
        color: colors.themeColor.yellow,
        textDecorationLine: "underline",
        fontSize: vh*1.65
    },
    signupContainer:{
        // marginTop: vh*3,
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    }
    

})
export default styles