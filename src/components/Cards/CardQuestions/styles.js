import { StyleSheet } from 'react-native'
import { colors } from '../../../utils/appTheme'
import { vh, vw } from '../../../utils/dimensions'


const styles =StyleSheet.create({
    storeCard:{
        borderWidth:1,
        marginBottom: vh*2,
        borderColor: colors.input.greyBorder,
        paddingVertical: vh*2.2,
        paddingHorizontal: vw*5,
        borderRadius: vh*1,
      
    },
    titleIconContainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"

    },
    storeText:{
        color: colors.text.offwhite,
        fontSize: vh*1.7,
    },
    arrowIcon:{
        height: vh*1.2,
        width: vh*1.2,
        tintColor: colors.text.offwhite,
        resizeMode: "contain"
    },
    titleContainer:{
    
    },
    descText:{
        color: colors.text.grey,
        fontSize: vh*1.6,
        lineHeight: vh*2.6,
        paddingTop: vh*1.1,
    }

})
export default styles