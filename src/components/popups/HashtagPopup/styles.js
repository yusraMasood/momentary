import {StyleSheet} from 'react-native';
import { colors } from '../../../utils/appTheme';
import { vh, vw } from '../../../utils/dimensions';

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: vw*6,
        paddingTop: vh*4.2,
    },
    contentContainer:{
        height: vh*55
    },
    searchText:{
        color: colors.text.grey,
        fontSize: vh*1.9,


    },
   
    hashtagHeading:{
        color: colors.text.offwhite,
        fontSize: vh*2.2,
    },
   
    btnText:{
        fontSize: vh*2
    },
    alignBtn:{
        alignItems: "center"
    },
    btnPublish:{
        paddingVertical: vh*1.2,
        paddingHorizontal: vw*12,
        borderRadius: vh*1.3
    }
});

export default styles;