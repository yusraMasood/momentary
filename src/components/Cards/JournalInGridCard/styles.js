import { StyleSheet } from 'react-native'
import { colors } from '../../../utils/appTheme'
import { vh, vw } from '../../../utils/dimensions'

const styles =StyleSheet.create({
    cardContainer:{
        marginTop: vh*1.6,
    },
    journalContainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: vh*2.4,
    },
    headingText:{
        paddingTop: vh*1.3,
        color: colors.text.offwhite,
        fontSize: vh*1.7,
    },
    dateText:{
        paddingTop: vh*0.3,
        fontSize: vh*1.55,
        color: colors.text.grey
    },
    bookImageContainer:{
        borderRadius: vh*1.3,
        overflow: "hidden"
    },
    bookImage:{
        height: vh*20.7,
        width: vw*40,
        resizeMode: "cover"
    },

})

export default styles 