import { StyleSheet } from "react-native";
import { fonts } from "../../../assets/fonts";
import { colors } from "../../../utils/appTheme";
import { vh, vw } from "../../../utils/dimensions";

export const styles= StyleSheet.create({
    input:{
        // fontFamily: fonts.Euclid.bold,
        fontSize: vh*1.5,
        flex:1,
        color: colors.black,
        height: vh*5.5,
    },
    uploadText:{
        fontSize: vh*1.5,
        fontWeight: "bold"
    },
    uploadText2:{
        fontSize: vh*1.5,
    },
    inputContainer:{
        borderWidth: 1,
        borderColor: colors.pink,
        backgroundColor: "white",
        // backgroundColor: "red",
        borderRadius: vh*4,
        height: vh*5.7,
        width: vw*83,
        flexDirection: "row",
        // alignItems: "center",
        // padding: vh*1,
        alignItems: "center",
        paddingLeft: vw*4,
        paddingRight: vw*2,
        justifyContent: "space-between"
        // backgroundColor: "red"
    },
    passwordIconImg:{
        height: vh*2,
        width:vh*2,
        resizeMode: "contain"
    },
    uploadView:{
        backgroundColor: "#999999",
        height: vh*4,
        width: vw*20,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: vh*4,
    },
    uploadText:{
        fontSize: vh*1.5,
        color: colors.white,
        textAlign: "center",
        fontWeight: "600"
    }
})