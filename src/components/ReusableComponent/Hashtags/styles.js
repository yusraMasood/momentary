import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/appTheme';
import {vh, vw} from '../../../utils/dimensions';

const styles = StyleSheet.create({
  hashtagsMainContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  searchText:{
    color: colors.text.grey,
    fontSize: vh*1.9,


},
searchContainer:{
  flexDirection: "row",
      alignItems: "center",
      borderBottomColor: colors.input.greyBorder ,
      borderBottomWidth:1,
      marginBottom: vh*2
},
inputContainer:{
  paddingTop: 0,
  flex:1,
  // paddingBottom: vh*2,

},
contentInput:{
  marginVertical: 0,
  borderBottomWidth:0,
},
hashtagContainer:{
  flexDirection: "row",
  alignItems: "center",
  borderBottomColor: colors.input.greyBorder ,
  borderBottomWidth:1,
  marginBottom: vh*2
},
  myTagText: {
    color: colors.general.white,
    fontSize: vh * 1.5,
    paddingTop: vh * 2,
    paddingBottom: vh * 1,
  },
  hashtagContainer: {
    borderWidth: 1,
    marginBottom: vh * 1,
    borderColor: colors.themeColor.yellow,
    paddingVertical: vh * 0.8,
    paddingHorizontal: vw * 2.3,
    marginRight: vw * 3,
    borderRadius: vh * 1,
    // flexDirection: "row"
  },
  hashtagText: {
    paddingTop: vh * 0.5,
    color: colors.themeColor.yellow,
    fontSize: vh * 1.8,
  },
  crossIconContainer: {
    position: 'absolute',
    top: vh * 0.6,
    right: vw * 1.2,
  },
  crossimg: {
    height: vh * 0.8,
    width: vh * 0.8,
    tintColor: colors.themeColor.yellow,
    resizeMode: 'contain',
  },
  contentContainerStyle: {
    // height
    height: vh * 11,
  },
  columnStyle: {
    // justifyContent: "space-between"
  },
});
export default styles;
