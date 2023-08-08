import { StyleSheet } from 'react-native'
import { colors } from '../../../../utils/appTheme'
import { vh, vw } from '../../../../utils/dimensions'

const styles =StyleSheet.create({
    container:{
        paddingHorizontal: vw*4,
    },
    contactText:{
        color: colors.text.offwhite,
        fontSize: vh*2.5,
        paddingTop: vh*3.6,
        paddingBottom: vh*2,

        

        
      },
      titleText:{
        fontSize: vh*1.8,
        color: colors.text.offwhite

      },
      valueText:{
        color: colors.text.grey,
        fontSize: vh*1.7
      },
      itemContainer:{
        marginBottom: vh*2,
      },
      alignBtn:{
        marginTop: vh*4,
      }
})
export default styles