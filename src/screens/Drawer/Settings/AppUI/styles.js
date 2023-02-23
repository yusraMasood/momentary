import { StyleSheet } from 'react-native'
import { colors } from '../../../../utils/appTheme'
import { vh, vw } from '../../../../utils/dimensions'

const styles =StyleSheet.create({
    container:{
     
        paddingHorizontal: vw*4,
    },
    // accountInfoContainer:{
    //     flexDirection: "row",
    //     flexWrap: "wrap",
    //     justifyContent: "space-between"

    // },
    // titleText:{
    //     color: colors.text.offwhite,
    //     fontSize: vh*1.7
    // },
    // valueText:{
    //     color: colors.text.grey,
    //     fontSize: vh*1.5
    // },
    // itemContainer:{
    //     width: vw*40,
    //     marginBottom: vh*3,
    // },
    accountHeadingText:{
        fontSize: vh*2.5,
        color: colors.text.offwhite,
        paddingBottom: vh*1.5,
        paddingTop: vh*1,
    },
    // editText:{
    //     color: colors.themeColor.yellow,
    //     fontSize: vh*1.8,
    //     textDecorationLine: "underline",
    //     paddingBottom: vh*1.7,
    // },
    // btnText:{
    //     color: colors.text.offwhite
    // },
    // alignBtn:{
    //     marginTop: vh*8,
    // }
})
export default styles 