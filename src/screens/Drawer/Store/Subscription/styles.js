import { StyleSheet } from 'react-native'
import { colors } from '../../../../utils/appTheme'
import { vh, vw } from '../../../../utils/dimensions'


const styles =StyleSheet.create({
    container:{
        paddingHorizontal: vw*4,
        // paddingTop: vh*0.5,
    },
    momentaryText:{
        color: colors.themeColor.yellow,
        fontSize: vh*6.7
    },
    alignContent:{
        alignItems: "center"
    },
    submitText:{
        color: colors.text.offwhite,
        fontSize: vh*3.1,
        paddingTop: vh*6,
    },
    descText:{
        color: colors.text.offwhite,
        fontSize: vh*1.8,
        paddingTop: vh*1,
        paddingBottom: vh*2,
    },
    formatText:{
        color: colors.text.grey,
        fontSize: vh*1.3,
        paddingBottom: vh*5,
    },
    uploadText:{
        color: colors.themeColor.yellow,
        textDecorationLine: "underline",
        fontSize: vh*1.755,
        paddingLeft: vw*2,
    },
    uploadImg:{
        height: vh*2.5,
        width: vh*2.5,
        resizeMode: "contain",
        // backgroundColor: "blue"
    },
    uploadContainer:{
        flexDirection: "row",
        alignItems: "flex-end",
        marginTop: vh*4,
        marginBottom: vh*1.3,
    }

})
export default styles 