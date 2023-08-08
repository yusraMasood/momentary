import { StyleSheet } from 'react-native'
import { colors } from '../../../utils/appTheme'
import { vh, vw } from '../../../utils/dimensions'

const styles =StyleSheet.create({
    alignGridContainer: {
        alignItems: 'flex-end',
      },
      gridMainContainer: {
        alignItems: 'center',
        flexDirection: 'row',
      },
      gridContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: vw * 3,
      },
      gridIcon: {
        height: vh * 1.5,
        width: vh * 1.5,
        tintColor: colors.text.grey,
        resizeMode: 'contain',
        marginRight: vw * 1.3,
      },
      gridFocusIcon:{
        tintColor: colors.general.white
      },
      listText: {
        color: colors.text.grey,
        fontSize: vh * 1.55,
      },
      listFocusText:{
        color: colors.general.white
      },
      journalText:{
        color: colors.themeColor.yellow,
        fontSize: vh*1.7,
        textDecorationLine: "underline"
      }
})
export default styles 