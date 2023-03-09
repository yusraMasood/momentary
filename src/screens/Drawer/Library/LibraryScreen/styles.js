import {StyleSheet} from 'react-native';
import {vh, vw} from '../../../../utils/dimensions';

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
});
export default styles;
