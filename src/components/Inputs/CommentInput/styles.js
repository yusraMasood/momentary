import { StyleSheet } from 'react-native'
import { colors } from '../../../utils/appTheme'
import { vh, vw } from '../../../utils/dimensions'
import { fonts } from '../../../assets/fonts'

const styles =StyleSheet.create({
    textInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        position: "absolute",
        bottom: 0,
        backgroundColor: colors.general.black,
        // marginVertical: vh * 2,
      }, 
      inputContainer: {
        // marginTop: vh*2,
        marginLeft: vw * 3,
        // width: vw*80,
        backgroundColor: colors.input.greyBackground,
        borderRadius: vh * 4,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: vw * 4,
      },
      sendIcon: {
        height: vh * 1.8,
        width: vh * 1.8,
margin:vh*1,
        resizeMode: 'contain',
      },
      userImage: {
        height: vh * 5,
        width: vh * 5,
        resizeMode: 'cover',
        borderRadius: vh * 4,
      },
      input: {
        // flex: 1,
        width: vw * 63,
        color: colors.general.white,
        paddingVertical: vh * 1.5,
        // backgroundColor: "red",
        fontFamily: fonts.roboto.regular,
        // backgroundColor: "red"
      },

})
export default styles 