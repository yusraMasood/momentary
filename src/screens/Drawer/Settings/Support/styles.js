import { StyleSheet } from 'react-native'
import { colors } from '../../../../utils/appTheme'
import { vh, vw } from '../../../../utils/dimensions'

const styles=StyleSheet.create({
    container:{
        paddingHorizontal: vw*4,
        // paddingTop: vh*0.2,
    },
    itemContainer:{
        // paddingVertical: vh*3.7,
    },
    headingText:{
        fontSize: vh*2.7,
        color: colors.text.offwhite,
        paddingBottom: vh*3,
        paddingTop: vh*0.8,
        // paddingTop: vh*2
    },
    textCard:{
        fontSize: vh*1.85
    }
  
})
export default styles