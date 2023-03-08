import {StyleSheet} from 'react-native';
import { colors } from '../../../utils/appTheme';
import { vh, vw } from '../../../utils/dimensions';

const styles = StyleSheet.create({
  container:{
    height: vh*22
  },
  successText:{
    color: colors.text.offwhite,
    fontSize: vh*2.3,
    paddingBottom: vh*0.7,
  },
  userImage:{
    height: vh*9,
    width: vw*18,
    borderRadius: vh*5,
    resizeMode: "contain"
  },
  descText:{
    color: colors.text.grey,
    // width: vw*50,
    fontSize: vh*1.8,
    // textAlign: "center"
  },
  childrenStyle:{
    paddingTop: vh*1,
    paddingHorizontal: vw*4,
  },
  alignBtn:{
    alignItems: "center"
},
nextBtn:{
    paddingVertical: vh*1.2,
    paddingHorizontal: vw*14.9,
    borderRadius: vh*1.2,
}
});

export default styles;