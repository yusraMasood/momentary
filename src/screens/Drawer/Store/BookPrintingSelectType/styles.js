import { StyleSheet } from 'react-native'
import { colors } from '../../../../utils/appTheme'
import { vh, vw } from '../../../../utils/dimensions'

const styles =StyleSheet.create({
    container:{
        paddingHorizontal: vw*8,
        // backgroundColor: "white",
        // paddingTop: vh*3,
    },
    momentaryDescText:{
        color: colors.text.offwhite,
        textAlign: "center",
        fontSize: vh*1.6,
        paddingBottom: vh*2,
    },
    contentContainer:{
        paddingTop: vh*9,
    },
    progressBar:{
        height: 20,
        flexDirection: "row",
        width: '100%',
        backgroundColor: 'white',
        borderColor: '#000',
        borderWidth: 2,
        borderRadius: 5
     
    },
    prgressText:{
        color: colors.text.offwhite,
        fontSize: vh*1.7
    }
})

export default styles