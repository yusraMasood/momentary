import { StyleSheet } from 'react-native'
import { colors, themeShadow } from '../../../utils/appTheme'
import { vh, vw } from '../../../utils/dimensions'

const styles = StyleSheet.create({
    container:{
        marginVertical: vh*1,
    },
    arrowDown:{
        height: vh*1.7,
        width: vh*1.7,
        resizeMode: "contain",
        tintColor: colors.black
    },
    dropdownContainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: colors.white,
        paddingVertical: vh*2,
        paddingHorizontal: vw*4,
     
        borderRadius: vh*1,
        ...themeShadow
    },
    upwardImg:{
        height: vh*2,
        width: vh*2,
        resizeMode: "contain"
    },
    openDropdownContainer:{
        flexDirection: "row",
        // paddingVertical: vh*2,
        paddingTop: vh*2,
        paddingBottom: vh*1,
        justifyContent: "space-between",
    },
    mainContainerOfDropdown:{
        // borderWidth:1,
        backgroundColor: colors.brownBackground,
        paddingHorizontal: vw*4,
        borderRadius: vh*1,
        // paddingVertical: vh*2,
        paddingBottom: vh*2,
        // borderBottom
        ...themeShadow
    },
    hrLine:{
        // width: vw*20,
        borderBottomWidth:1,
        borderBottomColor: colors.separatorGrey,
        // paddingVertical: vh*1
        paddingBottom: vh*1

    },
    redHrLine:{
        width: vw*10,
        borderBottomWidth:1,
        borderBottomColor: colors.themeRed,
        marginVertical: vh*2,
    },
    dropdownValueText:{
        color: colors.blackText,
        width: vw*50
    },
    valueWithPurchaseContainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center'
    },
    purchaseText:{
        color: colors.themeRed,
        fontSize: vh*1.7
    },
    titleDropdown:{
        color: colors.blackText,
        fontSize: vh*1.8
    },
    titleinDropdownText:{
        color: colors.blackText,
        fontSize: vh*1.9
    }
})

export default styles 