import React from 'react';
import {View, Image, FlatList} from 'react-native';
import {generalImages} from '../../../../assets/images';
import CustomButton from '../../../../components/Buttons/CustomButton';
import BookPrintJournalCard from '../../../../components/Cards/BookPrintJournalCard';
import RobotoMedium from '../../../../components/Texts/RobotoMedium';
import RobotoRegular from '../../../../components/Texts/RobotoRegular';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
import styles from './styles';

const BookPrinting = (props) => {
  // console.warn("djopjdod");
  const renderBookPrint = () => {
    return (
      <BookPrintJournalCard
      onPress={()=> props.navigation.navigate("BookPrintingSelectType")}
      />
    
    );
  };
  const renderEmpty = () => {
    return (
      <View style={styles.emptyContainer}>
        <RobotoMedium style={styles.emptyText}>No Journal Found</RobotoMedium>
        <CustomButton text={'Create Journal '} />
      </View>
    );
  };
  return (
    <ScreenWrapper style={styles.container}>
      <View style={styles.headingContainer}>
        <RobotoRegular style={styles.journalText}>
          Select a journal to proceed
        </RobotoRegular>
      </View>
      <FlatList
        data={[1, 2]}
        ListEmptyComponent={renderEmpty}
        keyExtractor={(item, index) => index}
        key={'bookPrintingScreenArray'}
        contentContainerStyle={styles.contentContainer}
        renderItem={renderBookPrint}
      />
    </ScreenWrapper>
  );
};
export default BookPrinting;
