import { StyleSheet } from 'react-native'
import { colors } from '../../../../utils/appTheme'
import { vh, vw } from '../../../../utils/dimensions'


const styles =StyleSheet.create({
    buttonContainer:{
        marginBottom: vh*3,
    },
    container:{
        paddingHorizontal: vw*4,
        paddingTop: vh*4,
    },
    iconStyle:{
        tintColor: colors.themeColor.yellow
    }

})
export default styles 