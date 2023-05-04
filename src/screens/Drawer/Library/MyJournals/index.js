import React, {useState,useEffect} from 'react';
import {View, Image, FlatList} from 'react-native';
import {generalImages} from '../../../../assets/images';
import CustomButton from '../../../../components/Buttons/CustomButton';
import BookPrintJournalCard from '../../../../components/Cards/BookPrintJournalCard';
import JournalInGridCard from '../../../../components/Cards/JournalInGridCard';
import SearchInput from '../../../../components/Inputs/SearchInput';
import ListGridComponent from '../../../../components/ReusableComponent/ListGridComponent';
import RobotoMedium from '../../../../components/Texts/RobotoMedium';
import RobotoRegular from '../../../../components/Texts/RobotoRegular';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
import styles from './styles';
import {useGetJournalsQuery} from '../../../../state/journal';
import CustomSkeleton from '../../../../components/Loaders/CustomSkeleton';
import {vh} from '../../../../utils/dimensions';

const MyJournals = props => {
  const [search, setSearch] = useState('');
  const [list, setList] = useState(false);
  const [page, setPage] = useState(1);
  const journalApi = useGetJournalsQuery(
    {
      keyword: search,
      page,
      limit: 5,
    },
    // {
    //   selectFromResult
    // }
  );
  useEffect(()=>{
    const unsubscribe = props.navigation.addListener('focus', () => {
      // The screen is focused
      journalApi.refetch()
      // Call any action
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;

  },[props.navigation])

  // const [journalData,setJournalData] =useState(journalApi?.data?.journal)
  console.log('journalApi  ', journalApi);
  const renderHeader = () => {
    return (
      <View>
        <SearchInput
          placeholder={'Search '}
          value={search}
          onChangeText={setSearch}
          style={styles.searchInput}
        />
        <ListGridComponent
          list={list}
          setList={setList}
          // onPress={() => props.navigation.navigate('AddNewJournal',{id:item?._id})}
        />
      </View>
    );
  };
  const renderEmpty = () => {
    return (
      <View style={styles.emptyContainer}>
        <RobotoMedium style={styles.emptyText}>No Journal Found</RobotoMedium>
        <CustomButton text={'Create Journal '} 
        onPress={()=> props.navigation.navigate("AddNewJournal")}
        />
      </View>
    );
  };
  const renderBookPrint = ({item}) => {
    return (
      <View>
        {journalApi?.isLoading ? (
          <CustomSkeleton height={23} width={92} marginTop={vh * 2} />
        ) : (
          <BookPrintJournalCard
            title={item?.title}
            image={item?.image?.thumbnail}
            date={item?.createdAt}
            onPress={() => props.navigation.navigate('ViewAllEntries',{id:item?._id})}
          />
        )}
      </View>
    );
  };
  const handleOnEndReached = () => {
    if (journalApi?.data?.journal.length > 10) {
if(journalApi?.data?.totalPages!==page)
{
  setPage(page + 1);

}
    }
  };
  const renderList = () => {
    return (
      <FlatList
        data={
          journalApi?.isLoading ? [1, 2, 3, 4, 5] : journalApi?.data?.journal
        }
        ListEmptyComponent={renderEmpty}
        ListHeaderComponent={renderHeader}
        keyExtractor={(item, index) => index}
        key={'bookPrintingScreenArray'}
        // contentContainerStyle={styles.contentContainer}
        renderItem={renderBookPrint}
        onEndReached={handleOnEndReached}
      />
    );
  };
  const renderJournalGrid = ({item}) => {
    return (
      <View>
        {journalApi?.isLoading ? (
          <CustomSkeleton height={20.7} width={40} marginTop={vh * 2} />
        ) : (
          <JournalInGridCard
            title={item?.title}
            image={item?.image?.thumbnail}
            date={item?.createdAt}
            onPress={() => props.navigation.navigate('ViewAllEntries',{id:item?._id})}
          />
        )}
      </View>
    );
  };
  const renderGrid = () => {
    return (
      <FlatList
        data={
          journalApi?.isLoading ? [1, 2, 3, 4, 5] : journalApi?.data?.journal
        }
        ListEmptyComponent={renderEmpty}
        ListHeaderComponent={renderHeader}
        keyExtractor={(item, index) => index}
        columnWrapperStyle={styles.columnStyle}
        numColumns={2}
        key={'bookPrintingGridScreenArray'}
        // contentContainerStyle={styles.contentContainer}
        renderItem={renderJournalGrid}
        onEndReached={handleOnEndReached}
      />
    );
  };
  return (
    <ScreenWrapper style={styles.container}>
      {list ? renderList() : renderGrid()}
    </ScreenWrapper>
  );
};
export default MyJournals;
