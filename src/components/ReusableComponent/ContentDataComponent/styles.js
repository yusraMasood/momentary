import { StyleSheet } from 'react-native'
import { colors } from '../../../utils/appTheme'
import { vh, vw } from '../../../utils/dimensions'

const styles =StyleSheet.create({
    itemContainer:{

        width: vw*45,
        marginTop: vh*2.6,
    },
    titleText:{
        fontSize: vh*1.7,
        color: colors.general.white,
        paddingBottom: vh*0.5,
    },
    valueText:{
        fontSize: vh*1.7,
        color: colors.text.grey
    },
    columnWrapperStyle:{
        justifyContent: "space-between",
        // marginBottom: vh*4,
    },

})
export default styles