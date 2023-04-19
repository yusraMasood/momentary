import {StyleSheet} from 'react-native';
import { colors } from '../../../utils/appTheme';
import { vh, vw } from '../../../utils/dimensions';

const styles = StyleSheet.create({
    successText:{
        color: colors.text.offwhite,
        fontSize: vh*2.3,
        paddingBottom: vh*2,
      },
      descText:{
        color: colors.text.grey,
        // width: vw*50,
        // textAlign: "center",
        fontSize: vh*1.94,
        // marginBottom: vh*2.5
        // textAlign: "center"
      },
      btnContainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        
      },
      buttonStyle:{
        paddingHorizontal: vw*15,
        paddingVertical: vh*1.3
      },
      childrenContainer:{
        paddingHorizontal: vw*6,
        paddingTop: vh*3,
      },
      container:{
        height: vh*26
      },
      userImage:{
        height: vh*9,
        width: vh*9,
        borderRadius: vh*8,
        resizeMode: "contain"
      }
});

export default styles;