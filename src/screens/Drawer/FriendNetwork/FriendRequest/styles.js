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
})

export default styles 