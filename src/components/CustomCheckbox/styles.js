import { StyleSheet } from 'react-native';
import { colors } from '../../utils/appTheme';
import { vh, vw } from '../../utils/dimensions';

export const styles = StyleSheet.create({
    checkboxContainer:{
        height: vh*1.7,
        width: vw*3.4,
        // backgroundColor: "red"
        borderColor: colors.themeRed,
        borderWidth: 1,
        borderRadius: vh*0.5,
        alignItems: "center",
        justifyContent: "center"

    },
    checkboxInnerContainer:{
        height: vh*1.6,
        width: vw*3.3,
        borderRadius: vh*0.5,
        backgroundColor: colors.themeRed,
        alignItems: "center",
        justifyContent: "center"
    },
    container:{
        flexDirection: "row",
        alignItems: "center",
        marginVertical: vh*1.5
    },
    title:{
        marginLeft: vw*1.5,
        fontSize: vh*1.45,
        color:colors.greyText
    },
    tickImg:{
        height: vh*0.8,
        width: vh*0.8,
        resizeMode: "contain",
        // tintColor: colors.black
    }

})