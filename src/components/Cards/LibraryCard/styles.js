import { StyleSheet } from 'react-native'
import { colors } from '../../../utils/appTheme'
import { vh, vw } from '../../../utils/dimensions'


const styles =StyleSheet.create({
    
    
    bookImage:{
        height: vh*15,
        width: vw*30,
        // resizeMode: "cover"
        resizeMode: "stretch"
    },
    imageContainer:{
        borderRadius: vh*1.4,
        // backgroundColor: "blue",
        marginRight: vw*2,
        overflow: "hidden"
    }
})
export default styles