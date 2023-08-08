import {
    StyleSheet
} from 'react-native'
import vw from './Units/vw';
import vh from './Units/vh';
import { colors } from '../../../utils/appTheme';

export default styles = StyleSheet.create({
    modal: {
        height: 100 * vh,
        width: 100 * vw
    },
    cancelButton: {
        height: 6 * vh,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cancelText: {
        fontSize: 2.5 * vh,
        textAlign: 'center',
        color: 'red',
        paddingBottom: 4 * vw,
    },
    backDrop: {
        height: 100 * vh,
        width: 100 * vw,
        backgroundColor: 'rgba(0,0,0,0.2)'
        // backgroundColor: colors.general.white
    },
    itemsScroll: {
        flex: 1
    },
    modalContentContainer: {
        height: 70 * vh,
        width: 80 * vw,
        backgroundColor: colors.general.black,

        position: 'absolute',
        top: 12 * vh,
        left: 10 * vw,
        borderRadius: 3 * vw,
        padding: 2 * vw,
    },
    pickerButton: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red'
    },
    Heading: {
        color: colors.general.white,
        fontSize: 2.5 * vh,
        paddingTop: 2 * vw,
        paddingBottom: 2 * vw,
        textAlign: 'center',
        // fontFamily: fonts.Nunito.Regular,
    },
    searchInput: {
        width: 70 * vw,
      
    },
    mainpopupImg: {
        width: 23 * vw,
        height: 14 * vh,
        resizeMode: 'contain',
        alignSelf: 'center',
        position: 'relative',
        marginTop: -7 * vh,
        zIndex: 9999,
    },
    closeBtn: {
        position: 'absolute',
        right: 2 * vw,
        top: 3.5 * vw,
        height: 6 * vw,
        width: 6 * vw,
        alignItems: "center",
        zIndex: 999999

    },

    inputField: {
        width: 60 * vw,
        // fontFamily: fonts.Nunito.Regular,
        fontSize: 2.0 * vh,
        color: colors.general.white,
        height: 5 * vh
    }
})