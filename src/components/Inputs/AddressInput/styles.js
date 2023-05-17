import { StyleSheet } from 'react-native'
import vh from '../../AddressField/AddressPicker/Units/vh'
import vw from '../../AddressField/AddressPicker/Units/vw'
import { colors } from '../../../utils/appTheme'

const styles = StyleSheet.create({
    inputContainer: {
        paddingVertical: vh*1.6,
        borderWidth: 1,
        borderColor: colors.input.greyBorder,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: vh * 1,
        borderRadius: vh * 3,
        paddingHorizontal: vw * 3,
        marginHorizontal: vw*4,
        justifyContent: "space-between"
      },
      placeholderText:{
        color: colors.input.greyBorder,
        fontSize: vh*1.7,
        width: vw*80,
      },
      imgIcon: {
        height: vh * 1.9,
        width: vh * 1.9,
        resizeMode: 'contain',
        marginRight: vw * 1,
      },
    // addressContainer:{
    //     backgroundColor: colors.general.white,
    //     borderRadius: vh*2,
    //     paddingVertical: vh*2,
    //     marginTop: vh*2,
    //     marginHorizontal: vw*4,
    //     paddingHorizontal: vw*4,
    //     flexDirection: "row",
    //     alignItems: "center",
    // //    ...tgene
    // },
    mapIcon:{
        height: vh*1.8,
        width: vh*1.8,
        resizeMode: "contain",
        marginRight: vw*4,
    },
    locationTextContainer:{
        fontSize: vh*1.7,
        color: colors.general.black,
        // backgroundColor: "red",
        width: vw*60
    },
})
export default styles