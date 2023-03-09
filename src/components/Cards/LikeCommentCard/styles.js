import {StyleSheet} from 'react-native';
import {fonts} from '../../../assets/fonts';
import {colors} from '../../../utils/appTheme';
import {vh, vw} from '../../../utils/dimensions';

const styles = StyleSheet.create({
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
  },
  likeBtnContaienr: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconLike: {
    height: vh * 2.7,
    width: vw * 5.5,
    resizeMode: 'contain',
  },
  commentText: {
    color: colors.text.grey,
    fontSize: vh * 2,
    paddingLeft: vw * 2,
  },
  likeFocusIcon: {
    // tintColor: colors.themeColor.yellow
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: vh * 2,
  },
  userImage: {
    height: vh * 5,
    width: vw * 10,
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
});
export default styles;
