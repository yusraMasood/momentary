import { StyleSheet } from 'react-native'
import { colors } from '../../../utils/appTheme'
import { vh, vw } from '../../../utils/dimensions'

const styles = StyleSheet.create({
    inputField:{
        // backgroundColor: colors.red,
        position: "absolute",
        bottom: -vh*7
    },
    focusInputBorder:{
        borderColor: colors.themeRed
    },
    placeholderText:{
        height: vh*1.7,
        width: vh*1.7,
        borderRadius: vh*2,
        backgroundColor: colors.greyCell

    },
    circleFocus:{
        // height: vh*1.7,
        // width: vh*1.7,
        // borderRadius: vh*2,
        backgroundColor: colors.themeRed
    },
    inputBorder:{
        height: vh*11,
        width: vw*14,
        borderWidth:1,
        borderRadius: vh*0.8,
        borderColor: colors.greyBorderCell,
        alignItems: "center",
        justifyContent: "center"
    },
    alignInputItems:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: vh*2,
    },
})

export default styles 