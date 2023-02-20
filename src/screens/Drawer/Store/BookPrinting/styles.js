import { StyleSheet } from 'react-native'
import { colors } from '../../../../utils/appTheme'
import { vh, vw } from '../../../../utils/dimensions'

const styles=StyleSheet.create({
    container:{
        paddingHorizontal: vw*5,
    },
    headingContainer:{
        alignItems: "center",
        paddingTop: vh*1
    },
    contentContainer:{
        marginTop: vh*2.6,
    },
    journalText:{
        color: colors.text.offwhite,
        fontSize: vh*1.85

    },
    emptyText:{
        color: colors.text.offwhite,
        fontSize: vh*2.5

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
    bookImage:{
        height: vh*23,
        width: vw*92,
        resizeMode: "cover"
    },
    bookImageContainer:{
        borderRadius: vh*1.3,
        overflow: "hidden"
    },
    cardContainer:{
        marginTop: vh*3,
    },
    emptyContainer:{
        flex:1,
        // alignItems: "center",
        // justifyContent: "center"
    }
})
export default styles