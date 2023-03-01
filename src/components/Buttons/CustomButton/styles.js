import { StyleSheet } from 'react-native';
import { colors } from '../../../utils/appTheme';
import { vh, vw } from '../../../utils/dimensions';

const styles = StyleSheet.create({

    ButtonWrapper: {
        paddingVertical: vh * 1.3,
        borderRadius: vw * 1,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    container: {
        paddingVertical:vh*2,
        // paddingHorizontal: vw*9,
        backgroundColor: colors.themeRed,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: vh*1.3,
    },
    text: {
        color: colors.general.black,
        fontSize:vh*2
        // paddingRight: vw*10,
    },
    alignContent:{
        // alignItems: "center",
        marginVertical: vh*2,
    }
})
export default styles