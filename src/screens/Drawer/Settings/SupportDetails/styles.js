import React from 'react'
import { StyleSheet } from 'react-native'
import { colors } from '../../../../utils/appTheme';
import { vh, vw } from '../../../../utils/dimensions';

const styles =StyleSheet.create({
    container:{
        paddingHorizontal: vw*4,
        paddingTop: vh*1
    },
    // titleCenterText:{
    //     fontSize: vh*3.5,
    //     // backgroundColor: "red",
    //     // width: vw*35,
    //     // paddingRight: vw*2,
    //     // paddingHorizontal: vw*2,
    //     color: colors.themeColor.yellow,
    
    //   },
    headingText:{
        fontSize: vh*2.7,
        color: colors.text.offwhite,
        paddingBottom: vh*2,
    },
    descText:{
        fontSize: vh*1.7,
        lineHeight: vh*3.2,
        color: colors.text.grey,
        paddingBottom: vh*2.7,
        // paddingLeft: vw*2,
    },
    pointText:{
        fontSize: vh*1.7,
        // lineHeight: vh*3.2,
        color: colors.text.grey,
        paddingLeft: vw*2,

    },
    circleStyle:{
        height: vh*2,
        width: vh*2,
        borderRadius: vh*2,
    },
    usesContainer:{
        flexDirection: "row",
        alignItems: "center",
        paddingBottom: vh*1.8,
    }
})

export default styles;