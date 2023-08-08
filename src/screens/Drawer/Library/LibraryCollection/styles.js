import { StyleSheet } from 'react-native'
import { vh, vw } from '../../../../utils/dimensions'

const styles =StyleSheet.create({
    container:{
        paddingHorizontal: vw*4,
    },
    card:{
        paddingVertical: vh*2.5,
        marginBottom: vh*1.2,
        // marginVertical: 0
        // paddingTop:0
    },
    contentContainer:{
        paddingTop: vh*5
    }
})
export default styles 