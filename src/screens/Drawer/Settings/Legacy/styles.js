import { StyleSheet } from 'react-native'
import { colors } from '../../../../utils/appTheme'
import { vh, vw } from '../../../../utils/dimensions'

const styles =StyleSheet.create({

    accountHeadingText:{
        fontSize: vh*2.5,
        color: colors.text.offwhite,
        paddingBottom: vh*1.5,
        paddingTop: vh*1,
    },
    container:{
        paddingHorizontal: vw*4,
    }
})
export default styles 