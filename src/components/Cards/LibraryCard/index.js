import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { FlatList, View,Image } from 'react-native'
import { generalImages } from '../../../assets/images'
import RobotoMedium from '../../Texts/RobotoMedium'
import RobotoRegular from '../../Texts/RobotoRegular'
import RippleHOC from '../../wrappers/Ripple'
import styles from './styles'
import EmptyComponent from '../../EmptyComponent'

const LibraryCard=(props)=>{
    // console.log("props?.images", props?.images);
    const navigation =useNavigation()
    const renderImages=({item})=>{
        // console.log(" item?._id",item);
        return(
            <RippleHOC onPress={()=> navigation.navigate(props.heading==="Journals"?"ViewAllEntries":props.heading==="All Entries"?"EditEntry": "PostByLocation",{id: item?._id })} style={styles.imageContainer}>
                <Image source={item?.image?.thumbnail?{uri: item?.image?.thumbnail} : generalImages.defaultImage} style={styles.bookImage}/>
            </RippleHOC>
        )
    }
    const renderEmpty=()=>{
        return(
            <EmptyComponent text={"No items to show"}/>
        )
    }
    // console.log(props?.images?.length);
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
            ListEmptyComponent={renderEmpty}
            renderItem={renderImages}
            />

        </View>
    )
}
export default LibraryCard