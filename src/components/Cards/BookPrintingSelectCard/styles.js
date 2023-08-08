import { StyleSheet } from 'react-native'
import { colors } from '../../../utils/appTheme'
import { vh, vw } from '../../../utils/dimensions'

const styles =StyleSheet.create({
    bookImage:{
        height: vh*9.2,
        width: vw*10,
        resizeMode: "contain",
        marginRight: vw*4,
    },
    container:{
        borderWidth:1,
        borderColor: colors.input.greyBorder,
        marginTop: vh*3,
        paddingHorizontal: vw*5,
        alignItems: "center",
        paddingVertical: vh*1.5,
        borderRadius: vh*0.5,
       
    },
    innerContainer:{
        flexDirection: "row",
        alignItems: "center"

    },
    titleText:{
        color: colors.text.offwhite,
        fontSize: vh*2,
    },
    descText:{
        color: colors.text.lightWhite,
        fontSize: vh*1.6
    }
})

export default styles 