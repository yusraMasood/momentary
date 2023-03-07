import {StyleSheet} from 'react-native';
import { colors } from '../../../utils/appTheme';
import { vh, vw } from '../../../utils/dimensions';

const styles = StyleSheet.create({
    container:{
        // paddingHorizontal: vw*1,
        height: vh*39,
        width: vw*85
        // paddingTop: vh
    },
    childrenContainer:{
        paddingHorizontal: vw*8,
        paddingTop: vh*3.7,
    },
    pageText:{
        color: colors.text.offwhite,
        fontSize: vh*2.1,
        // marginBottom: vh*2
    },
    designContainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: vh*2,
    },
    designImage:{
        height: vh*5,
        width: vw*10,
        resizeMode: "contain",
    },
    designImageContainer:{
        borderRadius: vh*1,
        overflow: "hidden"
    },
    titleText:{
        color: colors.text.offwhite,
        fontSize: vh*1.8
    }
   
});

export default styles;