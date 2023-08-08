import {
    StyleSheet,
} from 'react-native'

import vw from '../Units/vw'
import vh from '../Units/vh'
import { colors } from '../../../../utils/appTheme'
// import fonts from '../../../../Assets/fonts'


export default styles = StyleSheet.create({
    itemContainer: {
        padding: 1 * vw,
        borderBottomWidth: 1,
        borderBottomColor: colors.input.greyBorder,
        paddingVertical: 2 * vw,
    },
    itemText: {
        color: colors.input.greyBorder,
        fontSize: 2 * vh,
        // fontFamily: fonts.Nunito.Regular
    },
})