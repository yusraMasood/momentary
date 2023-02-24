import { StyleSheet } from 'react-native'
import { colors } from '../../../utils/appTheme'
import { vh, vw } from '../../../utils/dimensions'

const styles =StyleSheet.create({
    storeCard:{
        borderWidth:1,
        marginBottom: vh*1.8,
        borderColor: colors.input.greyBorder,
        paddingVertical: vh*2.55,
        paddingHorizontal: vw*5,
        borderRadius: vh*1,
    },
    storeText:{
        color: colors.text.offwhite,
        fontSize: vh*2,
    },
    descText:{
        color: colors.text.grey,
        fontSize: vh*1.6,
        paddingTop: vh*0.5

    },
    arrowIcon:{
        height: vh*2,
        width: vh*2,
        resizeMode: "contain"

    },
    titleContainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    }

})
export default styles 