import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/appTheme';
import {vh, vw} from '../../../utils/dimensions';

const styles = StyleSheet.create({
  noteContainer: {
    marginTop: vh * 1.7,
    backgroundColor: colors.themeColor.grey,
    paddingVertical: vh * 1,
    paddingHorizontal: vw * 2,
    borderRadius: vh * 1,
    // height: vh*30
  },
  checkboxContainer: {
    marginVertical: vh * 0,
    position: 'absolute',
    right: vw * -2,
  },
  checkbox: {
    height: vh * 2,
    width: vw * 4,
  },
  alignPin: {
    // alignItems: 'flex-end',
    position: 'absolute',
    right :vw*2,
    top:vh*3,

    // backgroundColor: "red"
  },
  pinIcon: {
    height: vh * 2.6,

    width: vh * 2.6,
    resizeMode: 'contain',
  },
  titleDescContainer: {
    // marginTop: vh * 1.5,
    flex:1
  },
  healthyText: {
    color: colors.text.offwhite,
    // paddingTop: vh*1.5,
    fontSize: vh * 2.3,
    paddingBottom: vh * 1,
  },
  descText: {
    color: colors.text.grey,
    fontSize: vh * 1.9,
    // paddingTop: vh*0.5,
    // height: vh*6

  },
  hashtagDeeleteContainer: {
    flexDirection: 'row',
    // marginTop: vh*1,
    // backgroundColor: "red",
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  hashtagContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  hashtagText: {
    color: colors.themeColor.yellow,
    fontSize: vh * 1.85,
    // marginRight: vw*1,
    width: vw * 15,
  },
  deleteIcon: {
    height: vh * 1.9,
    width: vh * 1.9,
    resizeMode: 'contain',
  },
  deleteContainer:{
    position: "absolute",
    bottom: vh*2,
    right: vw*2
  },
  evenContainer: {
    marginTop: vh * 3,
    backgroundColor: 'red',
  },
  alignFooter:{
    // alignItems: "flex-end"
    flex:1,
    marginTop: vh*1,
    justifyContent: "flex-end",
    paddingBottom: vh*1
  },
  htmlBaseStyle:{
    // height: vh*15
    
  }
});

export default styles;
