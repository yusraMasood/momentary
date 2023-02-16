import {StyleSheet} from 'react-native';
import { colors } from '../../../utils/appTheme';
import { vh, vw } from '../../../utils/dimensions';

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: vw*6,
        paddingTop: vh*4,
    },
    userImage:{
        height: vh*6,
        width: vw*12.4,
        resizeMode: "cover"
    },
    userContainer:{
        borderRadius: vh*6,
        overflow: "hidden"
    },
    input:{
        marginVertical: vh*0.1,
        marginHorizontal: vw*1,
        paddingHorizontal: vw*1,
        marginBottom: vh*1.4,
        borderRadius: vh*1,
        // paddingHorizontal: vw*2,
    
    },
    TextInput:{
        paddingVertical: vh*0.4,
        // borderRadius: vh*0.2,
    },
    popupContainer:{
        height: vh*63,
    },
    selectedText:{
        color: colors.text.offwhite,
        fontSize:vh*2.15,
        // marginT
    },
    selectText:{
        color: colors.themeColor.yellow,
        textDecorationLine: "underline",
        fontSize: vh*1.6
    },
    crossImg:{
        height: vh*0.8,
        width: vh*0.8,
        resizeMode: "contain",
        tintColor: colors.general.black
    },
    friendContainer:{
        flexDirection: "row",
        justifyContent: "space-between"
    },
    crossContainer:{
        padding: vh*0.5,
        position: "absolute",
        borderWidth:1,
        right: vw*2.3,
        borderRadius: vh*2,
        backgroundColor: colors.general.white
    },
    usernameText:{
        color: colors.general.white,
        fontSize: vh*1.6,
        marginTop: vh*0.3,
    },
    userSelectContainer:{
        alignItems: "center",
        marginRight: vw*3,
        // flexDirection: "row"
        // backgroundColor: "red",
        // height:
    },
    peopleContainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: vh*2,
    },
  
    contentContainer:{
        marginVertical: vh*1,
        // justifyContent: "space-between",
        // flexDirection: "row"
    },
    childrenStyle:{
        // pad
    },
    friendSelectContainer:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: vw*40,
        marginTop: vh*2,
    },
    checkboxWithUserImageContainer:{
        flexDirection: "row",
    },
    alignBtn:{
        alignItems: "center"
    },
    nextBtn:{
        paddingVertical: vh*1.1,
        borderRadius: vh*1.2,
    }
});

export default styles;