import { StyleSheet } from 'react-native'
import { colors } from '../../../../utils/appTheme'
import { vh, vw } from '../../../../utils/dimensions'

const styles =StyleSheet.create({
    container:{
        paddingHorizontal: vw*4,
    },
    btnText:{
        color: colors.general.white,
        fontSize: vh*2.4,
    },
    popupStyle:{
        height: vh*24
    }
})

export default styles 