import { StyleSheet } from 'react-native'
import { colors } from '../../../utils/appTheme'
import { vh, vw } from '../../../utils/dimensions'

const styles =StyleSheet.create({
    cardContainer:{
        marginTop: vh*3,
    },
    journalContainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: vh*2.4,
    },
    headingText:{
        color: colors.text.offwhite,
        fontSize: vh*2,
    },
    dateText:{
        fontSize: vh*1.6,
        color: colors.text.grey
    },
    bookImageContainer:{
        borderRadius: vh*1.3,
        overflow: "hidden"
    },
    bookImage:{
        height: vh*23,
        width: vw*92,
        resizeMode: "cover"
    },

})

export default styles 