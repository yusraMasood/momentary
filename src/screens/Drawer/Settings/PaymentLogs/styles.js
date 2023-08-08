import { StyleSheet } from 'react-native'
import { vh, vw } from '../../../../utils/dimensions'

const styles =StyleSheet.create({
    container:{
        paddingHorizontal: vw*4,
        // paddingTop: vh*2
    },
    dropdownContainer:{
        // alignItems: "flex-end",
        flexDirection: "row",
        justifyContent: "space-between"
        // flexDirection: "row",
        // justifyContent: "space-between"
    },
    dateContainer:{
        flexDirection: "row"
    },
    dropdownMainContainer:{
        alignItems: "flex-end"
    }
})
export default styles