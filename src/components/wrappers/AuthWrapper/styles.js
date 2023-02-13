import { StyleSheet } from 'react-native';
import { colors } from '../../../utils/appTheme';
import { vh, vw } from '../../../utils/dimensions';

const styles=StyleSheet.create({
container:{
    flex:1,
    // height: vh*100,
// backgroundColor: "red"
    // backgroundColor: colors.white,
},
headerImage:{
  height: vh*23,
  width: vw*100,
  resizeMode: "contain",
  // position: "absolute",
  // backgroundColor: "red",
  // top: 0,
},
childrenContainer:{
  flex:1
  // height: vh*100
},
footerImage:{
  // position: "absolute",
  // bottom: -vh*0.5,
  marginTop: vh*2,
  height: vh*22,
  // backgroundColor: "red",
  width: vw*90,
  resizeMode: "contain"
},
footerContainer:{
  flex:1,
  // justifyContent: "flex-end"
},
})
export default styles