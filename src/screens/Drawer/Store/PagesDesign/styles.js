import { StyleSheet } from 'react-native'
import { colors } from '../../../../utils/appTheme'
import { vh, vw } from '../../../../utils/dimensions'


const styles =StyleSheet.create({
    container:{
        paddingHorizontal: vw*4,
        paddingTop: vh*3,
    },
    // printContainer:{
    //     alignItems: "center",
    //     marginRight: vw*3,
    //     // paddingVertical: vh*3,
    // },
    // printImgContainer:{
    //     borderRadius: vh*1,

    //     overflow: "hidden",
      

    // },
    // imagePrint:{
    //     height: vh*8.5,
    //     width: vw*25,
    //     resizeMode: "cover"
    // },
    // contentContainer:{
    //     // paddingVertical: vh*2,
    //     paddingTop: vh*2,
    //     paddingBottom: vh*3.5,
    // },
    // printText:{
    //     color: colors.text.offwhite,
    //     fontSize: vh*1.7,
    //     paddingTop: vh*0.5,
    // },
    btnContainer:{
        marginTop: vh*5
    }

})

export default styles 