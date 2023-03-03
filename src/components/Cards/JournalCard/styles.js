import { StyleSheet } from 'react-native'
import { colors } from '../../../utils/appTheme'
import { vh, vw } from '../../../utils/dimensions'


const styles =StyleSheet.create({
    editContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: vh*0.8
      },
      editIcon: {
        height: vh * 2,
        width: vw * 2.5,
        resizeMode: 'contain',
      },
      dateText: {
        color: colors.text.darkGrey,
        fontSize: vh * 1.54,
        paddingLeft: vw * 1,
      },
      commentImage:{
        height: vh*2,
        width: vh*2,
        resizeMode: "contain"
      },
      commentText:{
        color: colors.themeColor.yellow,
        fontSize: vh*1.4
      },
      commentContainer:{
        flexDirection: "row"
      },
      descText:{
        color: colors.text.offwhite,
        fontSize: vh*1.68,
      },
      sharedText:{
        color: colors.text.offwhite,
        fontSize: vh*1.8,
        paddingBottom: vh*0.7,
      },
      container:{
        paddingBottom: vh*2,
      },
      alignComment:{
        alignItems: "flex-end"
      }

})
export default styles 