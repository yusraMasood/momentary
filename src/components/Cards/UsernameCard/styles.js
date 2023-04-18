import { StyleSheet } from 'react-native'
import { vh, vw } from '../../../utils/dimensions'
import { colors } from '../../../utils/appTheme'

const styles =StyleSheet.create({
    usernameContainer:{
        borderWidth:1,
        paddingHorizontal: vw*0.9,
        paddingVertical: vh*0.2,
        borderRadius: vh*0.5,
        marginRight: vw*3,
        borderColor: colors.general.white,
    },
    usernameFocusContainer:{
        borderColor: colors.themeColor.yellow
    },
    usernameFocusText:{
        color: colors.themeColor.yellow
    },
    usernameText:{
        color: colors.general.white,
        fontSize: vh*1.6
    },
})

export default styles 