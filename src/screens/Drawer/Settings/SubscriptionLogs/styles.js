import { StyleSheet } from 'react-native'
import { colors } from '../../../../utils/appTheme'
import { vh, vw } from '../../../../utils/dimensions'

const styles =StyleSheet.create({
    container:{
        paddingHorizontal: vw*4,
    },
    alignDateContainer:{
        alignItems: "center",
        justifyContent: "flex-end",
        flexDirection: "row"
    },
    silverText:{
        color: colors.text.offwhite,
        fontSize: vh*1.8,
        
        // padding:0
        // paddingBottom: vh*0.5,
    },
    dateText:{
        color: colors.text.grey,
        fontSize: vh*1.6,
        paddingTop: vh*0.5,
        paddingBottom: vh*2,
    },
    columnWrapperStyle:{
        justifyContent: "space-between",
        paddingRight: vw*10,
        // paddingVertical: vh*2,
    },
    heading:{
         fontSize: vh*2.35,
         color: colors.text.offwhite,
         paddingTop: vh*2,
         paddingBottom: vh*2,
    }

})
export default styles