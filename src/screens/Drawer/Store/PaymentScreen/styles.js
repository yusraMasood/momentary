import { StyleSheet } from 'react-native'
import { colors } from '../../../../utils/appTheme'
import { vh, vw } from '../../../../utils/dimensions'

const styles =StyleSheet.create({
    container:{
        paddingHorizontal: vw*4,
    },
    creditText:{
        color: colors.text.grey,
        textAlign: "center"
    },
    priceText:{
        color: colors.themeColor.yellow,
        fontSize: vh*4.3,
        paddingTop: vh*1.6,
        textAlign: "center"
    },
    cardText:{
        color: colors.text.offwhite,
        marginTop: vh*2,
        fontSize: vh*2.6,
    },
    alignBtn:{
        marginTop: vh*21,
    }

})

export default styles 