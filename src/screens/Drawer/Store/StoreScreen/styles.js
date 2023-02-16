import { StyleSheet } from 'react-native'
import { colors } from '../../../../utils/appTheme'
import { vh, vw } from '../../../../utils/dimensions'

const styles=StyleSheet.create({
    storeCard:{
        borderWidth:1,
        marginTop: vh*1.8,
        borderColor: colors.input.greyBorder,
        paddingVertical: vh*3.7,
        paddingHorizontal: vw*5,
        borderRadius: vh*1,
    },
    container:{
        paddingHorizontal: vw*4,
        paddingTop: vh*0.5,
    },
    storeText:{
        color: colors.text.offwhite,
        fontSize: vh*2,
    }
  
})
export default styles