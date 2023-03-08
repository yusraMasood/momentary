import { StyleSheet } from 'react-native'
import { colors } from '../../../../utils/appTheme'
import { vh, vw } from '../../../../utils/dimensions'

const styles =StyleSheet.create({
    container:{
        paddingHorizontal: vw*4,
    },
    billingText:{
        color: colors.text.offwhite,
        fontSize: vh*2.4,
        // paddingTop: vh*2,
    },
    addressText:{
        color: colors.text.offwhite,
        fontSize: vh*1.9
    },
    alignText:{
        alignItems: "center"
    },
    creditText:{
        color: colors.text.grey,
        textAlign: "center",
        fontSize: vh*1.5
    },
    priceText:{
        color: colors.themeColor.yellow,
        fontSize: vh*4,
        paddingBottom: vh*2,
        textAlign: "center"
    },
    inputContainer:{
        paddingTop: vh*1.5,
    },
    btnContainer:{
        marginTop: vh*25
    },
    paymentPopup:{
        height: vh*20
    }

})
export default styles 