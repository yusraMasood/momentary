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
    emptyContainer:{
        flex:1,
    }
})
export default styles