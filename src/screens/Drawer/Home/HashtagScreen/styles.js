import {StyleSheet} from 'react-native';
import { vh, vw } from '../../../../utils/dimensions';
import { colors } from '../../../../utils/appTheme';

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
    hashtagContainer:{
        flexDirection: "row",
        alignItems: "center",
        borderBottomColor: colors.input.greyBorder ,
        borderBottomWidth:1,
        marginBottom: vh*2
    },
    // hashtagsMainContainer:{
    //     flexDirection: "row",
    //     flexWrap: "wrap",
    //     justifyContent: "space-between"
    // },
    // hashtagContainer:{
    //     borderWidth: 1,
    //     marginBottom: vh*1,
    //     borderColor: colors.themeColor.yellow,
    //     paddingVertical: vh*0.5,
    //     paddingHorizontal: vw*2,
    //     borderRadius: vh*1,
    //     // flexDirection: "row"
    // },
    // hashtagText:{
    //     color: colors.themeColor.yellow,
    //     fontSize: vh*1.8,
    // },
    hashtagHeading:{
        color: colors.text.offwhite,
        fontSize: vh*2.2,
    },
    inputContainer:{
        paddingTop: 0,
        flex:1,
        // paddingBottom: vh*2,

    },
    contentInput:{
        marginVertical: 0,
        borderBottomWidth:0,
    },
    // crossimg:{
    //     height: vh*0.5,
    //     position: "absolute",
    //     top: vh*0.6,
    //     right: vw*1.2,
    //     width: vh*0.5,
    //     tintColor: colors.themeColor.yellow,
    //     resizeMode: "contain"
    // },
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