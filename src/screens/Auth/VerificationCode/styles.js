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
    alignContent:{
        alignItems: "center"
    },
    signinText:{
        marginTop: vh*6,
        marginBottom: vh*0.3,
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
        marginTop: vh*4,

    },
    descResetText:{
        color: colors.input.greyBorder,
        fontSize: vh*1.65
    },
    alignReset:{
        alignItems: "flex-end",
        paddingRight: vw*2.2,
    }
    

})
export default styles