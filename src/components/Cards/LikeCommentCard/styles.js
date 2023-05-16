import {StyleSheet} from 'react-native';
import {fonts} from '../../../assets/fonts';
import {colors} from '../../../utils/appTheme';
import {vh, vw} from '../../../utils/dimensions';

const styles = StyleSheet.create({
  container:{
    // marginBottom: vh*7,
  },
  likeCountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: vh * 2,
    paddingRight: vw * 3,
    paddingBottom: vh * 1,
    marginBottom: vh * 1.2,
    borderBottomColor: colors.text.greyBorder,
    borderBottomWidth: 1,
  },
  likeIcon: {
    height: vh * 3,
    width: vw * 6,
    marginRight: vw * 2,
    resizeMode: 'contain',
  },
  likeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likeText: {
    color: colors.text.grey,
    fontSize: vh * 1.7,
  },
  likeMainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: vh*2
  },
  likeBtnContaienr: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconLike: {
    height: vh * 2.7,
    width: vh * 2.7,
    resizeMode: 'contain',
  },
  commentText: {
    color: colors.text.grey,
    fontSize: vh * 2,
    paddingLeft: vw * 2,
  },
  likeFocusIcon: {
    color: colors.button.likeBlue
  },
  textInputContainer: {
    position: "absolute",
    bottom: 0,
    zIndex: 999,
    backgroundColor: "black",
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: vh * 2,
  },
  userImage: {
    height: vh * 5,
    width: vh * 5,
    resizeMode: 'contain',
    borderRadius: vh * 4,
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
  input: {
    // flex: 1,
    width: vw * 63,
    color: colors.general.white,
    paddingVertical: vh * 1.5,
    // backgroundColor: "red",
    fontFamily: fonts.roboto.regular,
    // backgroundColor: "red"
  },
  sendIcon: {
    height: vh * 1.7,
    width: vw * 3,
    resizeMode: 'contain',
  },
  commentMainContainer:{
    marginVertical: vh*1.5,
    flexDirection: "row",
    justifyContent: "space-between"

  },
  commentInnerContainer:{
    backgroundColor: colors.input.greyBackground,
    borderRadius: vh*1,
    marginLeft: vw*2,
    paddingHorizontal: vw*2,
    paddingVertical: vh*2
  },
  usernameText:{
    color: colors.general.white,
    fontSize: vh*1.65
  },
  userCommentText:{
    color: colors.general.white,
    fontSize: vh*1.5,
    width: vw*65
  }
});
export default styles;
