import { StyleSheet } from 'react-native'
import { colors } from '../../../utils/appTheme'
import { vh, vw } from '../../../utils/dimensions'

const styles = StyleSheet.create({
    userImage:{
        height: vh*4,
        width: vw*8,
        resizeMode: "cover",
        borderRadius:(vh*4)/2
    },
    userIsOnline:{
        height: vh*1,
        width: vw*2,
        borderRadius: (vh*1)/2,
        backgroundColor: colors.userOnlineGreen,
        position: "absolute",
        right: vw*-0.5,
        top: vh*0.7,
    }

})
export default styles