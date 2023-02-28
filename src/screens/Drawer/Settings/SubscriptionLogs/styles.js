import { StyleSheet } from 'react-native'
import { vw } from '../../../../utils/dimensions'

const styles =StyleSheet.create({
    container:{
        paddingHorizontal: vw*4,
    },
    alignDateContainer:{
        alignItems: "center",
        justifyContent: "flex-end",
        flexDirection: "row"
    }

})
export default styles