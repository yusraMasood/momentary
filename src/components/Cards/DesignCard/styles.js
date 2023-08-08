import { StyleSheet } from 'react-native'
import { colors } from '../../../utils/appTheme'
import { vh, vw } from '../../../utils/dimensions'

const styles =StyleSheet.create({
    contentContainer:{
        // paddingVertical: vh*2,
        paddingTop: vh*2,
        paddingBottom: vh*3.5,
    },
    printContainer:{
        alignItems: "center",
        marginRight: vw*3,
        // paddingVertical: vh*3,
    },
    printImgContainer:{
        borderRadius: vh*1,

        overflow: "hidden",
      

    },
    imagePrint:{
        height: vh*8.5,
        width: vw*25,
        resizeMode: "cover"
    },
    printText:{
        color: colors.text.offwhite,
        fontSize: vh*1.7,
        paddingTop: vh*0.5,
    },
})

export default styles 