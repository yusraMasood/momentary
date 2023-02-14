import React from 'react'
import { View,Image, FlatList } from 'react-native'
import CustomButton from '../../../../components/Buttons/CustomButton'
import LibraryCard from '../../../../components/Cards/LibraryCard'
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper'
import styles from './styles'

const LibraryScreen =()=>{
    const headingArray=["All Entries","Journals","Favorite Connect Content","Favorite Global Content"]

    const renderCards=({item})=>{
        return(
<LibraryCard
heading={item}

/>

        )
    }
    const renderFooter=()=>{
        return(
            <CustomButton text="Add New Journal"/>
        )
    }
    return(
        <ScreenWrapper style={styles.container}>
            <FlatList
            data={headingArray}
            renderItem={renderCards}
            ListFooterComponent={renderFooter}
            />

        </ScreenWrapper>
    )
}
export default LibraryScreen