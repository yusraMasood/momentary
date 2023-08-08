import {StyleSheet} from 'react-native';
import { colors } from '../../../utils/appTheme';
import { vh, vw } from '../../../utils/dimensions';

const styles = StyleSheet.create({
    container:{
        // paddingHorizontal: vw*1,
        height: vh*34
        // paddingTop: vh
    },
    childrenContainer:{
        paddingHorizontal: vw*4,
        paddingTop: vh*2,
        alignItems: "center"
    },
    descText:{
        color: colors.text.grey,
        textAlign: "center",
        letterSpacing: vw*0.14,
        paddingTop: vh*1.5,
        fontSize: vh*1.9,
    },
    approximateText:{
        fontSize: vh*1.6,
        color: colors.text.grey,
        paddingLeft: vw*1.5,
    },
    editContainer:{
        flexDirection: "row",
        paddingTop: vh*0.7,
        alignItems: "center",

    },
    buttonStyle:{
        paddingVertical: vh*1.3
    },
    edit:{
        height: vh*2,
        width: vh*2,
        resizeMode: "contain"
    },
    entryText:{
        color: colors.text.offwhite,
        fontSize:vh*2.2,
    }
});

export default styles;