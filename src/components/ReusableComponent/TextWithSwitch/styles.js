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
    switchContainer:{
        flexDirection: "row",
        justifyContent: "space-between"
    },
   
      switchCircle:{
        height: 1.8 * vh,
        width: 1.8 * vh,
        borderRadius: 1 * vh,
       
        
      },
      switchOn: {
        // backgroundColor: colors.general.white,
        // borderColor: colors.general.white,
        borderWidth:1,
        alignItems: 'flex-end',
        paddingRight: 0.5 * vw,
      },
      switchOff: {
        // backgroundColor: colors.defaultRed,
        // borderColor: colors.general.white,
        borderWidth:1,
        alignItems: 'flex-start',
        paddingLeft: 0.5 * vw,
      },
      switch: {
        width: 8.6 * vw,
        height: 2.9 * vh,
        borderRadius: 4.5 * vw,
        // backgroundColor: "red",
        // borderWidth:vh*0.23,
        // bolderColor: colors.general.white,
        
        // borderColor: appTheme.colors.black,
        marginLeft: vw*3,
        justifyContent: 'center',
      },
      whiteCircle: {
        backgroundColor:colors.general.black,
      
      },
      redCircle:{
        backgroundColor:colors.general.black,
        // height: 2 * vh,
        // width: 2 * vh,
        // borderRadius: 1 * vh,

      }
})
export default styles 