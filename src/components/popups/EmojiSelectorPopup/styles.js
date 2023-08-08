import {StyleSheet,Dimensions} from 'react-native';
import { colors } from '../../../utils/appTheme';
import { vh, vw } from '../../../utils/dimensions';

const styles = StyleSheet.create({
    container:{
        // paddingHorizontal: vw*1,
        height: vh*53
        // paddingTop: vh
    },
    childrenContainer:{
        paddingHorizontal: vw*4,
        paddingTop: vh*2,
        alignItems: "center"
    },
    view: {
        alignSelf: 'center',
        flexWrap: 'wrap',
        flexDirection: 'row',
        // width: Math.min(Dimensions.get('window').width, 32 * 12),
        width: vw*80,
    },
    item: {
        // height: 25,
        // width: 25,
        fontSize: vh*2,
        paddingHorizontal: vw*2,
        paddingVertical: vh*2,
    },
});

export default styles;