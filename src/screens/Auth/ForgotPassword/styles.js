import { StyleSheet } from 'react-native'
import { colors } from '../../../utils/appTheme'
import { vh, vw } from '../../../utils/dimensions'

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: vw*4,
        paddingTop: vh*11,
    },
    momentaryText:{
        color: colors.themeColor.yellow,
        fontSize: vh*6.5,
        
    },
    errorText:{
        color: colors.general.red,
        fontSize : vh*2
    },
    alignContent:{
        alignItems: "center"
    },
    signinText:{
        marginTop: vh*7.9,
        marginBottom: vh*1.4,
        color:colors.text.offwhite,
        fontSize: vh*3,
    },
    backLoginText:{
        color: colors.themeColor.yellow,
        fontSize: vh*1.75,
        letterSpacing: vw*0.23,
        textDecorationLine: "underline"
    },
    continueBtn:{
        marginTop: vh*8,

    },
    

})
export default styles