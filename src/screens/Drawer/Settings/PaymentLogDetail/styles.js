import { StyleSheet } from 'react-native'
import { colors } from '../../../../utils/appTheme'
import { vh, vw } from '../../../../utils/dimensions'

const styles =StyleSheet.create({
    container:{
        paddingHorizontal: vw*4,
    },
    orderId:{
        color: colors.text.offwhite,
        fontSize: vh*1.8,
        paddingBottom: vh*0.5
    },
    alignContent:{
        alignItems: "center"
    },
    placeText:{
        color: colors.text.grey,
        fontSize: vh*1.5

    },
    priceText:{
        color: colors.themeColor.yellow,
        fontSize: vh*4.4,
        // backgroundColor: "red",
        // paddingRight: vw*1,
    },
    pendingText: {
        color: colors.text.offwhite,
        fontSize: vh * 1.5,
      },
      pending: {
        backgroundColor: colors.status.yellow,
      },
      delivered:{
        backgroundColor: colors.status.green,
    
      },
      inprocess:{
        backgroundColor: colors.status.blue,
    
      },
      statusContainer: {
        paddingVertical: vh * 0.3,
        paddingHorizontal: vw * 2.1,
        // backgroundColor: 'red',
        borderRadius: vh * 2,
      },
      orderDetailContainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: vh*1.3,
      },
      orderDetailText:{
        color: colors.text.offwhite,
        fontSize: vh*2.4,
      },
      addressDetailText:{
        color: colors.text.offwhite,
        fontSize: vh*2.4,
        paddingBottom: vh*1.5,
      },
      itemTitleText:{
        color: colors.text.offwhite,
        fontSize: vh*1.7
      },
      itemValueText:{
        color: colors.text.grey,
        fontSize: vh*1.5
      },
      orderContainer:{
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between"
      },
      itemContainer:{
        width: vw*34,
        marginBottom: vh*3.1,
        // marginTop: vh*1,
        // alignItems: "center"
      }
})
export default styles