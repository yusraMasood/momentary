import { StyleSheet } from 'react-native';
import { colors } from '../../utils/appTheme';
import { vh, vw } from '../../utils/dimensions';

export const styles = StyleSheet.create({
    checkboxContainer:{
        height: vh*2.3,
        width: vw*4.6,
        // backgroundColor: "red"
        borderColor: colors.input.greyBorder,

        borderWidth: 1,
        borderRadius: vh*0.5,
        alignItems: "center",
        justifyContent: "center"

    },
    checkboxInnerContainer:{
        height: vh*1.6,
        width: vw*3.3,
        borderRadius: vh*0.5,
        borderColor: colors.input.greyBorder,

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
        height: vh*1.3,
        width: vh*1.3,
        resizeMode: "contain",
        // tintColor: colors.black
    }

})