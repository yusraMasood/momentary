import { StyleSheet } from 'react-native'
import { colors } from '../../../../utils/appTheme'
import { vh, vw } from '../../../../utils/dimensions'

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: vw*4,
    },
    billingText:{
        color: colors.text.offwhite,
        fontSize: vh*2.4,
        paddingTop: vh*2,
    },
    addressText:{
        color: colors.text.offwhite,
        fontSize: vh*1.9
    },
    alignText:{
        alignItems: "center"
    }
})
export default styles 