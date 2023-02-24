import React from 'react'
import { StyleSheet } from 'react-native'
import { colors } from '../../../../utils/appTheme';
import { vh, vw } from '../../../../utils/dimensions';

const styles =StyleSheet.create({
    container:{
        paddingHorizontal: vw*4,
        paddingTop: vh*2,

    },
    headingText:{
        fontSize: vh*2.7,
        color: colors.text.offwhite,
        paddingBottom: vh*1 ,
        paddingTop: vh*3,
    },
    descText:{
        fontSize: vh*1.7,
        lineHeight: vh*3.2,
        color: colors.text.grey,
        paddingBottom: vh*2.7,
        // paddingLeft: vw*2,
    },
    messageInput:{
        borderWidth:1,
        marginTop: vh*2,
        // marginBottom: vh*4,
        borderColor: colors.input.greyBorder,
        // paddingVertical: 0
        // paddingTop: 0,
        borderRadius: vh*1,

        // borderBottomWidth: 0
    },
    input:{
        textAlignVertical: "top",
        
    }
})

export default styles;