import {StyleSheet} from 'react-native';
import { colors } from '../../../utils/appTheme';
import { vh, vw } from '../../../utils/dimensions';

const styles = StyleSheet.create({
    container:{
        // paddingHorizontal: vw*1,
        backgroundColor: colors.general.white,
        height: vh*50,
        // paddingTop: vh*6,
    },
    childrenContainer:{
        flex:1,
        alignItems: "center",
        justifyContent: "center"
        // paddingHorizontal: vw*8,
    },
    image:{
        height: vh*42,
        borderRadius: vh*2,
        width: vw*80,
        // resizeMode: "cover"
    },
    cancelContainer:{
        // marginTop: vh*12
    }
   
});

export default styles;