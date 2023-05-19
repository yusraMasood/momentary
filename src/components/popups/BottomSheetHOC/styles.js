import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/appTheme';
import {vh, vw} from '../../../utils/dimensions';

export const styles = StyleSheet.create({
  modal: {
    flex: 1,
  },
  modalContainer: {
    flex: 1,
    // backgroundColor: "red",
    alignItems: 'center',
    justifyContent: 'center',
  },

  blurBackground: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  },
  blurView: {
    flex: 1,
  },

  absolute: {
    height: 100 * vh,
    width: 100 * vw,
  },

  modalInnerContainer: {
    width: vw * 90,
    borderRadius: vh * 2,
    backgroundColor: colors.general.black,
    position: 'absolute',
    paddingTop: vh * 2,
    paddingBottom: vh * 4,
  },
  imageContainer: {
    borderWidth: 1,
    borderColor: colors.input.greyBorder,
    // paddingVertical: vh * 1.3,
    // paddingHorizontal: vw * 3,
    height: vh*5.3,
    width: vh*5.3,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: vh * 5,
    marginLeft: vw * 5,
  },
  crossIcon: {
    height: vh * 3,
    position: 'absolute',
    right: vw * 4.5,
    width: vw * 4,
    resizeMode: 'contain',
  },
  image: {
    height: vh * 2,
    width: vh * 2,
    resizeMode: 'contain',
  },
  alignContent: {
    alignItems: 'flex-end',
    paddingRight: vw * 7,
    // position: "absolute"
  },
  crossIcon: {
    height: vh * 3,
    position: 'absolute',
    right: vw * 4.5,
    width: vw * 4,
    resizeMode: 'contain',
  },
  photoText: {
    color: colors.text.offwhite,
    fontSize: vh * 3,
    paddingLeft: vw * 5,
    paddingTop: vh * 0.9,
  },
  imgStyle: {
    height: vh * 2.6,
    width: vh * 2.6,
    resizeMode: 'contain',
  },
  alignContainer: {
    flexDirection: 'row',
    // justifyContent: "space-between",
    paddingTop: vh * 2,
    // paddingHorizontal: vw*6,
    // backgroundColor: "red"
  },
});
