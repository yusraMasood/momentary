import { StyleSheet } from 'react-native'
import { colors } from '../../../utils/appTheme'
import { vh, vw } from '../../../utils/dimensions'

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: vw*4,
        paddingTop: vh*5.7,
    },
    momentaryText:{
        color: colors.themeColor.yellow,
        fontSize: vh*6.5,
        
    },
    alignContent:{
        alignItems: "center"
    },
    contentContainer:{
        // marginTop: vh*3
        alignItems: "center",
    },
    signinText:{
        marginTop: vh*2,
        color:colors.text.offwhite,
        fontSize: vh*3,
    },
   
//   
    userimage:{
      marginTop: vh*2,
      height: vh*10.5,
      width: vw*21,
      resizeMode: "contain",
      borderRadius: vh*6
    },
    cameraIcon:{
      height: vh*1.3,
      width: vw*3.2,
      resizeMode: "contain"
    },
    cameraContainer:{
        paddingHorizontal: vh*0.8,
        paddingVertical: vh*0.9,
        borderRadius: vh*4,
     
    },
    cameraMainContainer:{
   position: "absolute",
        bottom: vh*0.6,
        left: vw*16,
    },
    // usernameArrayContainer:{
    //     flexDirection: "row",
    //     marginTop: vh*1,
    //     flexWrap: "wrap",
    //     justifyContent: "space-between"
    // },
    // usernameContainer:{
    //     borderWidth:1,
    //     paddingHorizontal: vw*0.9,
    //     paddingVertical: vh*0.2,
    //     borderRadius: vh*0.5,
    //     marginRight: vw*3,
    //     borderColor: colors.general.white,
    // },
    // usernameFocusContainer:{
    //     borderColor: colors.themeColor.yellow
    // },
    alignBtn:{
        marginTop: vh*5,
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