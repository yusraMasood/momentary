import { StyleSheet } from 'react-native'
import { colors } from '../../../../utils/appTheme'
import { vh, vw } from '../../../../utils/dimensions'

const styles =StyleSheet.create({
    container:{
        paddingHorizontal: vw*4
    },
    billingText:{
        color: colors.text.offwhite,
        fontSize: vh*2.4,
        // paddingTop: vh*2,
    },
    priceText:{
        color: colors.themeColor.yellow,
        fontSize: vh*4,
        paddingBottom: vh*2,
        textAlign: "center"
    },
    orderIdText:{
        color: colors.text.offwhite,
        textAlign: "center",
        fontSize: vh*1.8
    },
    addressText:{
        paddingTop: vh*3,
    },
    btnStyle:{
        marginTop: vh*6
    }
    
})
export default styles 