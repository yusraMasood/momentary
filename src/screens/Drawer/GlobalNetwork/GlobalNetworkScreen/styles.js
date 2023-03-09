import {StyleSheet} from 'react-native';
import {colors} from '../../../../utils/appTheme';
import {vh, vw} from '../../../../utils/dimensions';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: vw * 4,
    // backgroundColor: "white"
  },
  locationPopcontainer: {
    backgroundColor: colors.general.lightBlack,
    position: 'absolute',
    top: vh * 30,
    left: vw * 6,
    paddingVertical: vh * 2.5,
    borderRadius: vh * 2,
    paddingHorizontal: vw * 4,
  },
  locationText: {
    color: colors.text.grey,
    fontSize: vh * 1.6,
    marginBottom: vh * 0.7,
    width: vw * 60,
  },
  printContainer: {
    borderRadius: vh * 1,
    overflow: 'hidden',
    marginRight: vw * 0.6,
  },
  printimg: {
    height: vh * 3,
    width: vw * 14,
    resizeMode: 'cover',
  },
  imgArrayContainer: {
    flexDirection: 'row',
    marginTop: vh * 1.5,
  },
});
export default styles;
