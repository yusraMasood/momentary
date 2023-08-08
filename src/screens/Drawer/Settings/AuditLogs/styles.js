import { StyleSheet } from 'react-native'
import { vh, vw } from '../../../../utils/dimensions'

const styles =StyleSheet.create({
    container:{
        paddingHorizontal: vw*4,
        paddingTop: vh*2.3
    },
    alignDateContainer:{
        alignItems: "center",
        justifyContent: "flex-end",
        flexDirection: "row"
    }

})
export default styles