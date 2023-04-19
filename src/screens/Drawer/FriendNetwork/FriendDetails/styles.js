import { StyleSheet } from 'react-native'
import { colors } from '../../../../utils/appTheme'
import { vh, vw } from '../../../../utils/dimensions'

const styles =StyleSheet.create({
    container:{
        paddingHorizontal: vw*4,
        paddingTop: vh*2,
    },
    titleCenterText:{
        fontSize: vh*3.5,
        color: colors.themeColor.yellow,
    
      },
    contact:{
        flexDirection: "row",
        flexWrap: "wrap"
    },
    itemText:{
        color: colors.text.offwhite
    },
    itemContainer:{
        flexDirection: "row",
        alignItems: "center"
    },
    contactImage:{
        height: vh*2,
        width: vh*2,
        resizeMode: "contain",
        marginRight: vw*1.4,
        // marginLeft: vw*2,
    },
    phoneImg:{
        marginLeft: vw*2.5,
    },
    usernameText:{
        color: colors.general.white,
        fontSize: vh*2.3,
        paddingBottom: vh*0.5,
        paddingTop: vh*2,
    },
    descText:{
        color: colors.text.grey,
        fontSize: vh*1.7,
        paddingBottom: vh*1,

    },
    userImage:{
        height: vh*10,
        width: vh*10,
        resizeMode: "contain",
        borderRadius: vh*6,
    },
    imgBtnContainer:{
        flexDirection: "row",
        justifyContent: "space-between"
    },
    removeBtn:{
        paddingVertical: vh*1,
        borderRadius: vh*0.5,
        paddingHorizontal: vw*7,
    },
    removeText:{
        fontSize: vh*1.9
    },
    entryHeadContainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: vh*3.4,
    },
    entriesText:{
        color: colors.text.offwhite,
        fontSize: vh*2.4,
    },
    browseEntryText:{
        color: colors.themeColor.yellow,
        fontSize: vh*1.6,
        textDecorationLine: "underline",
        // opacity: 0.5,
    },
    entryFocusText:{
        opacity: 0.6
    },
    browseContainer:{
        flexDirection: "row"
    },
    spaceInText:{
        marginLeft: vw*2
    },
    searchInput:{
        borderWidth:0,
        borderBottomWidth:1,
        borderRadius: 0,
        width: vw*40
        // marginLeft: vw*50,
    },
    inputContainer:{
        alignItems: "flex-end",
        justifyContent: "flex-end",
        // backgroundColor: "red"
    },
   

})
export default styles 