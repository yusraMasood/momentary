import { StyleSheet } from 'react-native';
import { colors } from '../../../utils/appTheme';
import { vh, vw } from '../../../utils/dimensions';

const styles = StyleSheet.create({

    ButtonWrapper: {
        paddingVertical: vh * 1.3,
        borderRadius: vw * 2,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    container: {
        paddingVertical:vh*1.5,
        paddingHorizontal: vw*9,
        // backgroundColor: colors.themeRed,
        borderWidth:1,
        borderColor: colors.themeColor.yellow,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: (vh*3.3)/2,
    },
    text: {
        color: colors.themeColor.yellow,
        fontSize:vh*2.1
    },
    alignContent:{
        // marginBottom: vh*2,
        marginTop: vh*2,
        // alignItems: "center",
        // marginVertical: vh*2,
    },
    iconStyle:{
        height: vh*2,
        width: vh*2,
        resizeMode: "contain",
        marginRight: vw*2,
    }
})
export default styles