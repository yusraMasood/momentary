import {StyleSheet} from 'react-native';
import {fonts} from '../../../assets/fonts';
import {colors} from '../../../utils/appTheme';
import {vh, vw} from '../../../utils/dimensions';

const styles = StyleSheet.create({input:{
        borderWidth:1,
        height: vh*8,
        textAlign:"center",
        fontSize: vh*3,
        width: vw*12,
        // fontFamily: fonts.pragmatica.regular,
        borderColor: colors.greyInputBorder,
        color: colors.themeRed
    },
  
 
});

export default styles;
