import {StyleSheet} from 'react-native';
import {vh, vw} from '../../../../utils/dimensions';
import { colors } from '../../../../utils/appTheme';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: vw * 4,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: "center"
  },
  btn: {
    paddingVertical: vh * 1.4,
    paddingHorizontal: vw * 7,
  },
  btnText: {
    fontSize: vh * 1.8,
  },
  imgIcon: {
    height: vh * 1.9,
    width: vh * 1.9,
    resizeMode: 'contain',
    marginRight: vw * 1,
  },
  inputContainer: {
    paddingVertical: vh*1.6,
    borderWidth: 1,
    borderColor: colors.input.greyBorder,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: vh * 1,
    borderRadius: vh * 1,
    paddingHorizontal: vw * 3,
    // marginHorizontal: vw*4,
    justifyContent: "space-between"
  },
  placeholderText:{
    color: colors.input.greyBorder,
    fontSize: vh*1.7,
    // width: vw*80,
  },
});
export default styles;
