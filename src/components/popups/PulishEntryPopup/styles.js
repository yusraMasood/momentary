import {StyleSheet} from 'react-native';
import { colors } from '../../../utils/appTheme';
import { vh, vw } from '../../../utils/dimensions';

const styles = StyleSheet.create({
    container:{
        // paddingHorizontal: vw*1,
        height: vh*49
        // paddingTop: vh
    },
    childrenContainer:{
        paddingHorizontal: vw*8,
    },
    descText:{
        color: colors.text.grayDesc,
        letterSpacing: vw*0.14,
        fontSize: vh*1.75,
    },
    publishText:{
        color: colors.text.offwhite,
        fontSize: vh*2.4,
        marginTop: vh*3.5,
    },
    buttonStyle:{
        paddingVertical: vh*1.3
    }
});

export default styles;