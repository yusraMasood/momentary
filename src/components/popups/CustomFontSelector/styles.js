import {StyleSheet} from 'react-native';
import { colors } from '../../../utils/appTheme';
import { vh, vw } from '../../../utils/dimensions';

const styles = StyleSheet.create({
    container:{
        // paddingHorizontal: vw*1,
        height: vh*45,
        width: vw*59
        // paddingTop: vh
    },
    childrenContainer:{
        paddingHorizontal: vw*4,
        paddingTop: vh*2,
        alignItems: "center"
    },
    textStyle:{
        fontSize: vh*2,
        color: colors.general.white,
        // paddingBottom: vh*2,
    },
    itemContainer:{
        marginBottom: vh*2.5

    }
});

export default styles;