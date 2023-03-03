import { StyleSheet } from 'react-native'
import { colors } from '../../../../utils/appTheme'
import { vh, vw } from '../../../../utils/dimensions'

const styles =StyleSheet.create({
container:{
    paddingHorizontal: vw*4,

},
publishedText:{
    color: colors.text.offwhite,
    fontSize: vh*2.4,
    paddingBottom: vh*2,
},
calendarContainer:{
    flexDirection: "row",
    alignItems: "center",

},
calendarIcon:{
    height: vh*2,
    width: vw*4,
    resizeMode: "contain"
},
entryDescText:{
    color: colors.text.grey,
    // width: vw*40,
    textAlign: "center",
    paddingLeft: vw*1,
    fontSize: vh*1.7
},
mainContainerOfCalendar:{
    paddingTop: vh*1,
    flexDirection: "row",
    alignItems: "center"
},
friendText:{
    color: colors.text.offwhite,
    fontSize: vh*1.8
},
publishContainer:{
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: vh*2,
},
descText:{
    color: colors.text.offwhite,
    fontSize: vh*1.7,
    paddingBottom: vh*2,
},
hashtagText:{
    color: colors.themeColor.yellow,
    fontSize: vh*1.7,
    paddingBottom: vh*8,
}
})

export default styles 