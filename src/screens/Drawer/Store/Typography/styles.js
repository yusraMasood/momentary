import { StyleSheet } from 'react-native'
import { colors } from '../../../../utils/appTheme'
import { vh, vw } from '../../../../utils/dimensions'


const styles =StyleSheet.create({
    container:{
        paddingHorizontal: vw*4,
        paddingTop: vh*3,
    },
    btnContainer:{
        marginTop: vh*5
    },
    poppinsText:{
        fontSize: vh*2,
        color: colors.text.offwhite,
        marginRight: vw*2,
    },
    contentContainer:{
        alignItems: "center",
        // backgroundColor: "red",
        // paddingVertical: 0,
        // paddingTop: 0,
        // paddingBottom: 0,
        // marginVertical: 0
    }

})

export default styles 