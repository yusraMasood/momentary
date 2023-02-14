import React from 'react'
import { FlatList, View,Image } from 'react-native'
import { generalImages } from '../../../assets/images'
import RobotoMedium from '../../Texts/RobotoMedium'
import RobotoRegular from '../../Texts/RobotoRegular'
import styles from './styles'

const LibraryCard=()=>{
    const renderImages=()=>{
        return(
            <View style={styles.imageContainer}>
                <Image source={generalImages.bookcover} style={styles.bookImage}/>
            </View>
        )
    }
    return(
        <View>
            <View style={styles.headingContainer}>
                <RobotoMedium style={styles.headingText}>All Entries</RobotoMedium>
                <RobotoRegular style={styles.viewText}>View All</RobotoRegular>
            </View>
            <FlatList
            data={[1,2,3,4]}
            horizontal={true}
            renderItem={renderImages}
            />

        </View>
    )
}
export default LibraryCard