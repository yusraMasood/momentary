import {StyleSheet} from 'react-native';
import { colors } from '../../../utils/appTheme';
import { vh, vw } from '../../../utils/dimensions';

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: vw*6,
        paddingTop: vh*2.5,
    },
    contentContainer:{
        height: vh*35,
        width: vw*84,
        // borderRadius: vh*1.5
    },
    settingText:{
        color: colors.text.offwhite,
        fontSize: vh*2.45,
        marginBottom: vh*2
    },
    pageTxt:{
        color: colors.text.offwhite,
        fontSize: vh*1.85
    },
    arrowStyle:{
        height: vh*2,
        width: vh*2,
        resizeMode: "contain"
    },
    settingContainer:{
        flexDirection:"row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: vh*2,
    },
    rightContainer:{
        flexDirection: "row",
        alignItems: "center"
    },
    privateText:{
        color: colors.text.grey,
        fontSize: vh*1.7,
        paddingRight: vw*1,
    },
    crossIcon:{
        height: vh*1.3,
        width: vh*1.3,
        resizeMode: "contain",
        tintColor: colors.general.white
    },
    crossContainer:{
        padding:vh*1,
        borderRadius: vh*2,
        borderWidth:1,
        borderColor: colors.general.red,
        
    }
});

export default styles;