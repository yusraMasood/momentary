import { StyleSheet } from 'react-native'
import { colors } from '../../../../utils/appTheme'
import { vh, vw } from '../../../../utils/dimensions'


const styles =StyleSheet.create({
    momentrayText:{
        fontSize: vh*1.65,
        color: colors.text.grey,
        textAlign: "center",
        // width: vw*88,
    },
    descContainer:{
        alignItems: "center",
        paddingHorizontal: vw*7,
        marginBottom: vh*4,
    },
    carouselView:{
        marginHorizontal: vw*5,
    }
})
export default styles 