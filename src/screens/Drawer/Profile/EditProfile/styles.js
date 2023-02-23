

import { StyleSheet } from 'react-native'
import { colors } from '../../../../utils/appTheme'
import { vh, vw } from '../../../../utils/dimensions'

const styles =StyleSheet.create({
    container:{
        paddingHorizontal: vw*4,
        paddingTop: vh*14,
    },
    cameraStyle:{
        height: vh*1.5,
        width: vh*1.5,
        tintColor: colors.general.black,
        resizeMode: "contain"
    },
    cameraContainer:{
        padding: vh*1,
        borderRadius: vh*3,
        position: "absolute",
        left: vw*15,
        bottom: vh*0.4,
    },

    userImg:{
        height: vh*10.2,
        width: vw*20.5,
        resizeMode: "contain",
        borderRadius: vh*6,
    },
    titleText:{
        fontSize: vh*1.7,
        color: colors.general.white
    },
    valueText:{
        fontSize: vh*1.7,
        color: colors.text.grey
    },
    itemContainer:{
        // width: vw*45,
        marginTop: vh*3.9,
    },
    passwordText:{
        color: colors.themeColor.yellow,
        textDecorationLine: "underline",
        fontSize: vh*1.6,
        marginTop: vh*1,
        marginBottom: vh*2,
    },
    btnContainer:{
        marginTop: vh*6.2,
    }
})
export default styles 