import { StyleSheet } from 'react-native'
import { colors } from '../../../utils/appTheme'
import { vh, vw } from '../../../utils/dimensions'


const styles =StyleSheet.create({
    calendarIcon:{
        tintColor: colors.text.grey,
        height: vh*1.4,
        width: vh*1.4,
        marginLeft: vw*15,
        resizeMode: "contain"
        // fontSize: vh*1.4
    },
    container:{
        borderBottomWidth:1,
        borderBottomColor: colors.text.grey,
        paddingBottom: vh*1,
        flexDirection: "row",
        alignItems: "center",
        marginLeft: vw*3,
    },
    fromText:{
        color: colors.text.grey,
        fontSize: vh*1.5
    }
})


export default styles 