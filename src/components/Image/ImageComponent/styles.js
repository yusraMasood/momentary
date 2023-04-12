import { StyleSheet } from 'react-native'
import { vh, vw } from '../../../utils/dimensions'

const styles =StyleSheet.create({
    image:{
        height: vh*8,
        width: vw*16,
        resizeMode: "cover"
    },
    imageContainer:{
        borderRadius: vh*1,
        marginRight: vw*3,
        overflow: "hidden"
    }
})
export default styles 