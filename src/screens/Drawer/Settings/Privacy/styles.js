import { StyleSheet } from 'react-native'
import { colors } from '../../../../utils/appTheme'
import { vh, vw } from '../../../../utils/dimensions'

const styles =StyleSheet.create({

    mainHeading:{
        color: colors.text.offwhite,
        fontSize: vh*2.6,
        paddingBottom: vh*1.9,
    },
    historicalHeading:{
        color: colors.text.offwhite,
        fontSize: vh*2.6,
        paddingBottom: vh*1.9,
        paddingTop: vh*1.3,

    },
    container:{
        paddingHorizontal: vw*4,
        paddingTop: vh*1.4,
    },
    friendText:{
        color: colors.text.offwhite,
        fontSize: vh*1.8,
        // paddingVertical:vh*1,
        paddingBottom: vh*0.8,
    },
    switchText:{
        fontSize: vh*1.5,
        color: colors.text.grey,
    },
    switchContainer:{
        marginBottom: vh*1.4

    },
    downloadIcon:{
        height: vh*3.2,
        width: vw*3.2,
        resizeMode: "contain"
    },
    deleteIcon:{
        height: vh*2.7,
        width: vh*2.7,
    },
    switchContainer:{
        marginBottom: vh*2.5
    }
})
export default styles 