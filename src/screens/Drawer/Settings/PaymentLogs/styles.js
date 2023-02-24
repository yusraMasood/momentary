import { StyleSheet } from 'react-native'
import { vh, vw } from '../../../../utils/dimensions'

const styles =StyleSheet.create({
    container:{
        paddingHorizontal: vw*4,
        // paddingTop: vh*2
    },
    dropdownContainer:{
        flexDirection: "row",
        justifyContent: "space-between"
    }
})
export default styles