import { StyleSheet } from 'react-native'
import { colors } from '../../../utils/appTheme'
import { vh, vw } from '../../../utils/dimensions'

const styles = StyleSheet.create({
    separatorView:{
        marginHorizontal:vw*2.5,
        height:"80%",
        backgroundColor: colors.themeRed,
        width: 0.5,
    },
    dateContainer:{
        flexDirection: "row",
        backgroundColor: colors.lightRed,
        borderWidth:1,
        borderColor: colors.themeRed,
        paddingVertical: vh*1,
        paddingHorizontal: vw*5,
        borderRadius: vh*1,
        marginTop: vh*1,
        alignItems: "center"
    },
    container:{
        alignItems: "center",
        marginBottom: vh*2,
        // marginVertical: vh*2,
    },
    herbalText:{
        color: colors.blackText,
        fontSize: vh*1.9

    },
    dateText:{
        fontSize: vh*1.7,
        color: colors.themeRed

    }
})

export default styles