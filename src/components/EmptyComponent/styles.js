import { StyleSheet } from 'react-native';
import { colors } from '../../utils/appTheme';
import { vh } from '../../utils/dimensions';
const styles = StyleSheet.create({

  emptyContainer:{
    alignItems:"center",
    marginTop: vh*2,
  },
  emptyText:{
    fontSize: vh*2,
    color: colors.general.white
  },

});
export default styles;