import { StyleSheet } from 'react-native'
import { colors } from '../../../utils/appTheme'
import { vh, vw } from '../../../utils/dimensions'

const styles =StyleSheet.create({
    container:{
        // paddingHorizontal: vw*4,
        borderWidth:1,
        paddingVertical: vh*2.7,
        paddingHorizontal: vw*4,
        borderRadius: vh*1,
        marginTop: vh*2.4,
        borderColor: colors.input.greyBorder,

        // alignItems: "center"

    },
    innerContainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"

    },
    silverText:{
        color: colors.text.offwhite,
        fontSize: vh*1.8,
        paddingBottom: vh*0.5,
    },
    dateText:{
        color: colors.text.grey,
        fontSize: vh*1.6

    },
    amountText:{
        color: colors.themeColor.yellow,
        fontSize: vh*2.8,
    },
    goodsContainer:{
        width: vw*32
    }
    
})
export default styles 