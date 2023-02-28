import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/appTheme';
import {vh, vw} from '../../../utils/dimensions';

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: vw*4,
    borderWidth: 1,
 
    borderRadius: vh * 1,
    marginTop: vh * 2.4,
    borderColor: colors.input.greyBorder,
    paddingHorizontal: vw * 2,
    paddingTop: vh * 1.3,
    paddingBottom: vh*2.6,
    // paddingRight

    // alignItems: "center"
  },
  innerContainer:{
    flexDirection: 'row',
    // paddingVertical: vh * 2,
    paddingTop: vh*0.8,
    paddingHorizontal: vw * 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  silverText: {
    color: colors.text.offwhite,
    fontSize: vh * 1.9,
    paddingBottom: vh * 0.5,
  },
  dateText: {
    color: colors.text.grey,
    fontSize: vh * 1.6,
  },
  amountText: {
    color: colors.themeColor.yellow,
    fontSize: vh * 2.8,
  },
  pendingText: {
    color: colors.text.offwhite,
    fontSize: vh * 1.5,
  },
  pending: {
    backgroundColor: colors.status.yellow,
  },
  delivered:{
    backgroundColor: colors.status.green,

  },
  inprocess:{
    backgroundColor: colors.status.blue,

  },
  statusContainer: {
    paddingVertical: vh * 0.3,
    paddingHorizontal: vw * 2.1,
    // backgroundColor: 'red',
    borderRadius: vh * 2,
  },
  leftIcon:{
    height: vh*1.1,
    width: vh*1.1,
    resizeMode: "contain"
  },
  arrowContainer:{
    alignItems: "flex-end"
  }
});

export default styles;
