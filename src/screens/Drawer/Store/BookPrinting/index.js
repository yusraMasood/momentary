import React from 'react';
import {View, Image, FlatList} from 'react-native';
import { generalImages } from '../../../../assets/images';
import CustomButton from '../../../../components/Buttons/CustomButton';
import RobotoMedium from '../../../../components/Texts/RobotoMedium';
import RobotoRegular from '../../../../components/Texts/RobotoRegular';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
import styles from './styles';

const BookPrinting = () => {
  
const renderBookPrint=()=>{
    return(
        <View style={styles.cardContainer}>
            <View style={styles.journalContainer}>
                <RobotoMedium style={styles.headingText}>My First Journal</RobotoMedium>
                <RobotoRegular style={styles.dateText}>January 12, '22</RobotoRegular>
            </View>
            <View style={styles.bookImageContainer}>
                <Image source={generalImages.books} style={styles.bookImage}/>
            </View>
        </View>
    )
}
const renderEmpty=()=>{
    return(
        <View style={styles.emptyContainer}>
            <RobotoMedium style={styles.emptyText}>No Journal Found</RobotoMedium>
            <CustomButton text={"Create Journal "}/>
        </View>
    )
}
  return (
    <ScreenWrapper style={styles.container}>
    <View style={styles.headingContainer}>
<RobotoRegular style={styles.journalText}>Select a journal to proceed</RobotoRegular>
</View>
<FlatList
data={[1,2]}
ListEmptyComponent={renderEmpty}
contentContainerStyle={styles.contentContainer}
renderItem={renderBookPrint}
/>

    </ScreenWrapper>
  );
};
export default BookPrinting;
