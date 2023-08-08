import { StyleSheet } from 'react-native'
import { colors } from '../../../../utils/appTheme'
import { vh, vw } from '../../../../utils/dimensions'

const styles =StyleSheet.create({
    container:{
        paddingHorizontal: vw*8,
        // backgroundColor: "white",
        // paddingTop: vh*3,
    },
    countText:{
        color: colors.text.offwhite,
        fontSize: vh*1.4,
        position: "absolute",
        width: '100%'
    },
    input:{
        marginVertical: 0
    },
    inputAlignContainer:{
        paddingTop: vh*0,
        paddingBottom: vh*1,
    },
    titleJournalText:{
        color: colors.text.grey,
        fontSize: vh*1.7,
        paddingTop: vh*2,
        marginRight: vw*4,
    },
    titleFocusJournalText:{
        color: colors.themeColor.yellow
    },
    progressStyle:{
        // paddingTop: vh*1,
        marginTop: vh*2.5,
    },
    momentaryDescText:{
        color: colors.text.offwhite,
        textAlign: "center",
        // paddingBottom: vh*1,
        // position: "absolute",
        fontSize: vh*1.6,
        paddingBottom: vh*2,
    },
    contentContainer:{
        paddingTop: vh*9,
    },
    dateContainer:{
        paddingTop: vh*10.5,
    },
    alignBtn:{
        marginTop: vh*5.4,
    },
    radioText:{
        color: colors.text.offwhite,
        fontSize: vh*1.5,
        // paddingHorizontal: vw*3,
    },
    radioItemContainer:{
        flexDirection: "row",
        alignItems: "center",
        marginRight: vw*4,
    },
    radioContainer:{
        paddingRight: vw*2,
    },
    positionContainer:{
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        marginTop: vh*2,
    },
    paperContainer:{
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: vh*2,
    },
    dropdownContainer:{
        borderWidth: 0,
        borderBottomWidth:1

    },
    dateRangeText:{
        color: colors.text.offwhite,
        fontSize: vh*1.6
    },
    dateText:{
        color: colors.text.grey,
        fontSize: vh*1.4

    },
    columnStyle:{
        justifyContent: "space-between",
        // width: vw*50,
        paddingTop: vh*2,
    },
    summaryContainer:{
        width: vw*35
    },
    popupStyle:{
        height: vh*24
    }
})

export default styles