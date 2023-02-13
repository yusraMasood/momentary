import { StyleSheet } from 'react-native'
import { colors } from '../../utils/appTheme'
import { vh, vw } from '../../utils/dimensions'

const styles = StyleSheet.create({
    switchContainer:{
        flexDirection: "row",
        justifyContent: "space-between"
    },
   
      switchCircle:{
        height: 1.6 * vh,
        width: 1.7 * vh,
        borderRadius: 1 * vh,
       
        
      },
      switchOn: {
        backgroundColor: colors.general.white,
        borderColor: colors.white,
        borderWidth:1,
        alignItems: 'flex-end',
        paddingRight: 0.5 * vw,
      },
      switchOff: {
        // backgroundColor: colors.defaultRed,
        borderColor: colors.general.white,
        borderWidth:1,
        alignItems: 'flex-start',
        paddingLeft: 0.5 * vw,
      },
      setBtn:{
          
      },
      switch: {
        width: 8.2 * vw,
        height: 2.4 * vh,
        borderRadius: 4.5 * vw,
        // backgroundColor: "red",
        borderWidth:vh*0.23,
        bolderColor: colors.general.white,
        
        // borderColor: appTheme.colors.black,
        marginLeft: vw*3,
        justifyContent: 'center',
      },
      whiteCircle: {
        backgroundColor:colors.general.white,
      
      },
      redCircle:{
        backgroundColor:colors.general.white,
        // height: 2 * vh,
        // width: 2 * vh,
        // borderRadius: 1 * vh,

      }
    //   drinkingContainer:{
    //       paddingTop: vh*5,
    //     flexDirection: "row",
    //     justifyContent: "space-between",
    //   },
    //   container:{
    //       paddingHorizontal: vw*4,
    //   },
    //   drinkingHoursText:{
    //       color: colors.blackappText,
    //       fontSize: vh*2.1
    //   }

})
export default styles