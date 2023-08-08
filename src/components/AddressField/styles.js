import {StyleSheet} from 'react-native';
import vh from './AddressPicker/Units/vh';
import vw from './AddressPicker/Units/vw';
import { colors } from '../../utils/appTheme';


export default styles = StyleSheet.create({
  main: { 
    marginTop: vh * 1,
    // elevation: 1, 
  },
  icon: {
    width: 5 * vw,
    height: 4 * vw,
    tintColor: colors.input.greyBorder,
    resizeMode: 'contain',
  },
  imageContainer: {
    width: 5 * vw,
    marginTop: -1.5 * vw,
    paddingLeft: 1 * vw,
  },
});
