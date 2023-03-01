import React from 'react'
import { StyleSheet } from 'react-native'
import { colors } from '../../../../utils/appTheme'
import { vh, vw } from '../../../../utils/dimensions'


const styles =StyleSheet.create({
    container:{
        paddingHorizontal: vw*4,
        // paddingTop: vh*3.6,
    },
    titleCenterText:{
        fontSize: vh*3.5,
        color: colors.themeColor.yellow,
      },
      contactText:{
        color: colors.text.offwhite,
        fontSize: vh*2.6,
        paddingTop: vh*3.6,

        
      },
      inputContainer:{
        paddingTop: vh*1,
      },
      infoImg:{
        height: vh*2,
        width: vh*2,
        marginLeft: vw*2,
        resizeMode: "contain"

      },
      allowText:{
        color: colors.text.offwhite,
        fontSize: vh*1.9
      },
      allowInfoImgContainer:{
        flexDirection: "row",
        alignItems: "center",
        
      },
      textSwitchContainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: vh*1,
      },
      descText:{
        color: colors.text.grey,
        fontSize: vh*1.6
      },
      legacyCardContainer:{
        marginTop: vh*2.2,
      },
      saveBtn:{
        backgroundColor: colors.button.grey,
        borderWidth: 0
      },
      btnText:{
        color: colors.text.offwhite,
      },
      btnContainer:{
        marginVertical: 0,
        marginTop: vh*14,
      },
      popupStyle:{
        height: vh*26,
      }
})
export default styles 