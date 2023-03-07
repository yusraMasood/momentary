import { StyleSheet } from 'react-native'
import { colors } from '../../../utils/appTheme'
import { vh, vw } from '../../../utils/dimensions'

const styles =StyleSheet.create({
    container:{
        borderWidth:1,
        borderColor: colors.input.greyBorder,
        borderRadius: vh*1,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: vh*1.4,
        paddingHorizontal: vw*3,
    
    },
    dateText:{
        color: colors.text.grey,
        fontSize: vh*1.6
    },
    calendarIcon:{
        height: vh*2,
        width: vh*2,
        tintColor: colors.text.grey,
        resizeMode: "contain"
    },
    labelText:{
        color: colors.text.offwhite,
        marginTop: vh*2,
        fontSize: vh*1.9,
        marginBottom: vh*1,
    },


})
export default styles 