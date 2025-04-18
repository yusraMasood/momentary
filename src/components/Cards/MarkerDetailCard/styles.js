import { StyleSheet } from 'react-native'
import { vh ,vw} from '../../../utils/dimensions'
import { colors } from '../../../utils/appTheme'

const styles=StyleSheet.create({
    circleImg:{
        height:vh*1.5,
        width: vh*1.5,
        borderRadius: (vh*1.6)/2
      },
      circleOuter:{
        height: vh*5,
        width: vh*5,
        borderRadius: (vh*5.5)/2,
        backgroundColor:colors.general.circleGrey,
        // backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center",
        // marginLeft: vw*6

      
      },
      searchContainer:{
        // position: "absolute",
        // backgroundColor: "red",
        // position: "absolute",
        // top: vh*4
      },
      markerContainer:{
        // alignItems: "center"
      },
        locationPopcontainer: {
          // marginTop: vh*1,
          backgroundColor: colors.general.lightBlack,
          // position: 'absolute',
          // top: vh * 30,
          // left: vw * 6,
          paddingVertical: vh * 2.5,
          borderRadius: vh * 2,
          paddingHorizontal: vw * 4,
          marginTop: vh*0.5
        },
        locationText: {
          color: colors.text.grey,
          fontSize: vh * 1.6,
          marginBottom: vh * 0.7,
          width: vw * 60,
        },
        printContainer: {
          borderRadius: vh * 1,
          overflow: 'hidden',
          marginRight: vw * 0.6,
        },
        printimg: {
          height: vh * 3,
          width: vw * 14,
          resizeMode: 'cover',
        },
        imgArrayContainer: {
          flexDirection: 'row',
          marginTop: vh * 1.5,
        },
        markerIcon:{
          height: vh*5,
          // position: "absolute",
          // bottom: -vh*2,
          // zIndex: 999,
          width: vh*5,
          resizeMode: "contain",
          // backgroundColor: "red",
          // marginLeft: vw*6
          // marginBottom: vh*1
        },
})
export default styles
