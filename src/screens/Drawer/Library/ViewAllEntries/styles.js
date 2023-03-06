import { StyleSheet } from 'react-native'
import { colors } from '../../../../utils/appTheme'
import { vh, vw } from '../../../../utils/dimensions'

const styles =StyleSheet.create({
    container:{
        paddingHorizontal: vw*4,
    },
    buttonContainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        // alignItems: "center"
        
    },
    btn:{
        // paddingVertical: vh*1.4,
        paddingHorizontal: vw*12.5,
    },
    btnText:{
        fontSize: vh*1.8
    },
    entriesContainer:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    deleteBtn:{
        paddingHorizontal: vw*5,
        paddingVertical: vh*1.2
    },
    btnText:{
        fontSize: vh*1.45
    },
    entryText:{
        fontSize: vh*2.7,
        color: colors.text.offwhite
    }

})
export default styles 