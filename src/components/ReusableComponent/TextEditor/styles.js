import { StyleSheet } from 'react-native'
import { colors } from '../../../utils/appTheme'
import { vh, vw } from '../../../utils/dimensions'

const styles =StyleSheet.create({
    textEditorContainer: {
        borderWidth: 1,
        marginTop: vh * 2,
        borderColor: colors.input.greyBorder,
        // height: vh*50
      },
      titleCenterText: {
        fontSize: vh * 3.5,
        color: colors.themeColor.yellow,
      },
      contentContainerStyle:{
        marginVertical: vh*2,
      },
      // editorText: {
      //   backgroundColor: colors.general.black,
      //   // backgroundColor:`rgba(255,255,255,0.3)`,
      //   color: colors.text.offwhite,
       
      //   initialCSSText: `${FontFamilyStylesheet.poppins}`, contentCSSText: `font-family: ${fontFamilyPoppins}`,
      //   caretColor:colors.themeColor.yellow,
      //   placeholderColor: colors.text.grey
      // },
      arrowStyle:{
        height: vh*0.6,
        width: vh*0.6,
        tintColor: colors.themeColor.yellow,
        resizeMode: "contain"
      },
      fontActionStyle:{
        color: colors.themeColor.yellow,
        fontSize: vh*1.4,
        marginRight: vw*2
      },
      fontContainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderWidth:0.4,
        borderColor: colors.themeColor.yellow,
        padding: vh*0.19
      },
      toolContainer: {
        backgroundColor: colors.general.black,
        // tintColor: colors.themeColor.yellow
        borderBottomColor: colors.input.greyBorder,
        borderBottomWidth: 1,
      },
      textIcon: {
        height: vh * 3.5,
        width: vw * 7,
        // backgroundColor: "blue",
        resizeMode: 'contain',
      },
      editContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // marginTop: vh*2,
        borderTopWidth: 1,
        borderTopColor: colors.input.greyBorder,
        paddingVertical: vh * 1.4,
        paddingHorizontal: vw * 5.5,
      },
      publishPopup: {
        height: vh * 48,
      },

})
export default styles 