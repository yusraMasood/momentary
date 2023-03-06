import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { FlatList, View,Image } from 'react-native'
import { generalImages } from '../../../assets/images'
import RobotoMedium from '../../Texts/RobotoMedium'
import RobotoRegular from '../../Texts/RobotoRegular'
import RippleHOC from '../../wrappers/Ripple'
import styles from './styles'

const LibraryCard=(props)=>{
    const navigation =useNavigation()
    const renderImages=({item})=>{
        return(
            <RippleHOC onPress={()=> navigation.navigate("LibraryCollection")} style={styles.imageContainer}>
                <Image source={item?item: generalImages?.bookcover} style={styles.bookImage}/>
            </RippleHOC>
        )
    }
    return(
        <View>
            <View style={styles.headingContainer}>
                <RobotoMedium style={styles.headingText}>{props?.heading}</RobotoMedium>
                <RippleHOC onPress={props.onPress}>
                <RobotoRegular style={styles.viewText}>View All</RobotoRegular>
                </RippleHOC>
            </View>
            <FlatList
            data={props?.images}
            key={"librarycardArray"}
            keyExtractor={(item,index)=> index}
            horizontal={true}
            renderItem={renderImages}
            />

        </View>
    )
}
export default LibraryCard