import { StyleSheet } from 'react-native'
import { colors } from '../../../../utils/appTheme'
import { vh, vw } from '../../../../utils/dimensions'

const styles =StyleSheet.create({
container:{
    paddingHorizontal: vw*4,
paddingTop: vh*0.6,
},
publishedText:{
    color: colors.text.offwhite,
    fontSize: vh*2.1,
    paddingBottom: vh*1.3,
    // paddingBottom: vh*2,
},
calendarContainer:{
    flexDirection: "row",
    alignItems: "center",

},
calendarIcon:{
    height: vh*1.6,
    width: vh*1.6,
    resizeMode: "contain"
},
entryDescText:{
    color: colors.text.grey,
    // width: vw*40,
    textAlign: "center",
    paddingLeft: vw*1.4,
    
    fontSize: vh*1.45
},
mainContainerOfCalendar:{
    paddingTop: vh*0.5,
    flexDirection: "row",
    alignItems: "center"
},
friendText:{
    color: colors.text.offwhite,
    fontSize: vh*1.6
},
publishContainer:{
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: vh*3.1,
},
descText:{
    color: colors.text.offwhite,
    fontSize: vh*1.7,
    paddingBottom: vh*0.9,
},
hashtagText:{
    color: colors.themeColor.yellow,
    fontSize: vh*1.7,
    paddingBottom: vh*0.5,
},
postImage:{
    height: vh*21,
    width: vw*92,
    borderRadius: vh*2,
    marginBottom: vh*1,
    // marginVertical: vh*2,
}
})

export default styles 