import React from 'react'
import { StyleSheet } from 'react-native'
import { colors } from '../../../utils/appTheme'
import { vh, vw } from '../../../utils/dimensions'

const styles =StyleSheet.create({
    settingContainer:{
        flexDirection:"row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: vh*2,
    },
    pageTxt:{
        color: colors.text.offwhite,
        fontSize: vh*1.85
    },
    arrowStyle:{
        height: vh*2,
        width: vh*2,
        resizeMode: "contain"
    },
    rightContainer:{
        flexDirection: "row",
        alignItems: "center"
    },
    privateText:{
        color: colors.text.grey,
        fontSize: vh*1.7,
        paddingRight: vw*1,
    },
})
export default styles 