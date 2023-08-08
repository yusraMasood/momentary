import { StyleSheet } from 'react-native'
import { colors } from '../../../utils/appTheme'
import { vh, vw } from '../../../utils/dimensions'


const styles =StyleSheet.create({
    container:{
        backgroundColor: colors.card.grey,
        paddingTop: vh*3,
        
        borderRadius: vh*3,
        paddingHorizontal: vw*7,
    },
    headerContainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: vh*1.5,
    },
    proText:{
        color: colors.text.offwhite,
        fontSize: vh*2.3
    },
    imgStyle:{
        height: vh*7,
        width: vw*15,
        resizeMode: "contain",
        marginRight: vw*1,

    },
    tickImg:{
        height: vh*2,
        width: vh*2,
        resizeMode: "contain"
    },
    pointContainer:{
        flexDirection: "row",
        alignItems: "center",
        marginBottom: vh*1.8,
    },
    pointText:{
        color: colors.text.offwhite,
        fontSize: vh*1.7,
        paddingLeft: vw*4,
    },
    priceText:{
        color: colors.themeColor.yellow,
        fontSize: vh*4,
        // transform: [{ rotate: '30deg'}]
    },
    servicesContainer:{
        flexDirection: "row"
    },
    numberText:{
        color: colors.text.offwhite,
        fontSize: vh*1.55

    },
    servicesText:{
        color: colors.text.grey,
        fontSize: vh*1.55
    },
    alignBtn:{
        marginTop: vh*10,
        marginBottom: vh*4,
        paddingHorizontal:  vw*7,
    },
    diamondTextContainer:{
        flexDirection: "row",
        alignItems: "center"
    },
    btnText:{

    },
    button:{
        paddingVertical: vh*1.7,
        // paddingHorizontal: vw*2
    }

})

export default styles 