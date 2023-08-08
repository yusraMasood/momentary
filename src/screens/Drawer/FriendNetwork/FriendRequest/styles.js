import { StyleSheet } from 'react-native'
import { vh, vw } from '../../../../utils/dimensions'

const styles =StyleSheet.create({
container:{
    paddingHorizontal: vw*4,
},
pagerView: {
    flex: 1,
    width: '100%',
    marginTop: vh * 2,
  },
  popupContainer:{
    height: vh*34
  },
  btnStyle:{
    paddingHorizontal: vw*12,
  },
  contentSuccess:{
    height: vh*29
  },
  btnStyle:{
    paddingHorizontal: vw*9
  }
})

export default styles 