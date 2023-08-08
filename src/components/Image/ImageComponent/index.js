import React from 'react'
import { View ,Image} from 'react-native'
import { generalImages } from '../../../assets/images'
import styles from './styles'

const ImageComponent =(props)=>{
    return(
        <View style={styles.imageContainer}>
            <Image
            source={props.uri?{uri:props.uri}: generalImages.bookcover}
            style={styles.image}
            />
        </View>
    )
}
export default ImageComponent