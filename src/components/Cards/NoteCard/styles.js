import { StyleSheet } from 'react-native'
import { colors } from '../../../utils/appTheme'
import { vh, vw } from '../../../utils/dimensions'

const styles =StyleSheet.create({
    noteContainer: {
        marginTop: vh * 1.7,
        // width: vw*45,
        // paddingTop: vh*2,
        // marginLeft: vw*2,
        backgroundColor: colors.themeColor.grey,
        
        // backgroundColor:"red",
     paddingVertical: vh*1,
        paddingHorizontal: vw * 2,
        borderRadius: vh * 1,
      },
      checkboxContainer:{
        marginVertical: vh*0,
        position: "absolute",
        right: vw*-2
      },
      checkbox:{
        height: vh*2,
        width: vw*4,

      },
      alignPin:{
        alignItems: "flex-end"
      },
      pinIcon:{
        height: vh*2.6,
        position: "absolute",
        width: vh*2.6,
        resizeMode: "contain",
      },
      titleDescContainer:{
        marginTop: vh*1.5
      },
      healthyText: {
        color: colors.text.offwhite,
        // paddingTop: vh*1.5,
        fontSize: vh * 2.3,
        paddingBottom: vh*1,
      },
      descText: {
        color: colors.text.grey,
        fontSize: vh*1.9
      },
      hashtagContainer:{
        flexDirection: "row",
        // marginTop: vh*1,
        alignItems: "center",
        justifyContent: "space-between"
      },
      hashtagText: {
        color: colors.themeColor.yellow,
        fontSize: vh * 1.85,
      },
      deleteIcon:{
        height: vh*1.5,
        width: vh*1.5,
        resizeMode: "contain",
      },
      evenContainer:{
        marginTop: vh*3,
        backgroundColor: "red"
      }

})

export default styles 