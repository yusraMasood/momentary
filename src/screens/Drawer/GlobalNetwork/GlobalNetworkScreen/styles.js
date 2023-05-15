import {StyleSheet} from 'react-native';
import {colors} from '../../../../utils/appTheme';
import {vh, vw} from '../../../../utils/dimensions';

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: vw * 4,
    // backgroundColor: "white"
  },
  mapView:{
    height: vh*100,
    // width: vw*100
},
markerIcon:{
  height: vh*10,
  width: vh*10,
  resizeMode: "contain"
}

});
export default styles;
