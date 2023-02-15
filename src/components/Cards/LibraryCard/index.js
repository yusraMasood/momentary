import React from 'react'
import { FlatList, View,Image } from 'react-native'
import { generalImages } from '../../../assets/images'
import RobotoMedium from '../../Texts/RobotoMedium'
import RobotoRegular from '../../Texts/RobotoRegular'
import styles from './styles'

const LibraryCard=(props)=>{
    const renderImages=({item})=>{
        return(
            <View style={styles.imageContainer}>
                <Image source={item?item: generalImages?.bookcover} style={styles.bookImage}/>
            </View>
        )
    }
    return(
        <View>
            <View style={styles.headingContainer}>
                <RobotoMedium style={styles.headingText}>{props?.heading}</RobotoMedium>
                <RobotoRegular style={styles.viewText}>View All</RobotoRegular>
            </View>
            <FlatList
            data={props?.images}
            horizontal={true}
            renderItem={renderImages}
            />

        </View>
    )
}
export default LibraryCard