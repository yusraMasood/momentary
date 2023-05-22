import React,{useEffect,useState} from 'react';
import {View, Image, FlatList} from 'react-native';
import {generalImages} from '../../../../assets/images';
import CustomButton from '../../../../components/Buttons/CustomButton';
import BookPrintJournalCard from '../../../../components/Cards/BookPrintJournalCard';
import RobotoMedium from '../../../../components/Texts/RobotoMedium';
import RobotoRegular from '../../../../components/Texts/RobotoRegular';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
import styles from './styles';
import { useGetJournalsQuery } from '../../../../state/journal';

const BookPrinting = (props) => {
  const [page,setPage] =useState(1)
  const [journalData, setJournalData] = useState([]);
  const {data, isFetching, isLoading, error, refetch} = useGetJournalsQuery({
    page:1,
    limit: 5,
  });
  useEffect(() => {
    if (!isFetching) {
      if (page === 1) {
        setJournalData(data?.journal);
      } else {
        setJournalData([...journalData, ...data?.journal]);
      }
    }
  }, [data]);
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
