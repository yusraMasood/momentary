import React, {useState, useEffect} from 'react';
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
  const [refreshing, setRefreshing] = useState(false);
  const [page, setPage] = useState(1);
  const [journalData, setJournalData] = useState([]);
  const {data, isFetching, isLoading, error, refetch} = useGetJournalsQuery({
    keyword: search,
    page,
    limit: 5,
  });
  // console.log("data",data);
  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      // The screen is focused
      refetch();
      // Call any action
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [props.navigation]);

  useEffect(() => {
    if (!isFetching) {
      if (page === 1) {
        setJournalData(data?.journal);
      } else {
        setJournalData([...journalData, ...data?.journal]);
      }
    }
  }, [data]);
  const handleJournalRefresh = () => {
    setRefreshing(true);
    refetch();
    setRefreshing(false);
  };

  // const [journalData,setJournalData] =useState(data)
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
        <CustomButton
          text={'Create Journal '}
          onPress={() => props.navigation.navigate('AddNewJournal')}
        />
      </View>
    );
  };
  const renderBookPrint = ({item}) => {
    return (
      <View>
        {isLoading ? (
          <CustomSkeleton height={23} width={92} marginTop={vh * 2} />
        ) : (
          <BookPrintJournalCard
            title={item?.title}
            image={item?.image?.thumbnail}
            date={item?.createdAt}
            onPress={() =>
              props.navigation.navigate('ViewAllEntries', {id: item?._id})
            }
          />
        )}
      </View>
    );
  };
  const handleOnEndReached = () => {
    if (journalData.length > 10) {
      if (data?.totalPages !== page) {
        setPage(page + 1);
      }
    }
  };
  const renderListFooter=()=>{
    return(
      <View>
        {isFetching && [1,2].map((value,index)=>{
          return(
            <CustomSkeleton
            height={23} width={92} marginTop={vh * 2} 
            />
            
          )
        })}
      </View>
    )
  }
  
  const renderGridFooter=()=>{
    return(
      <View style={styles.footerContainer}>
        {isFetching && [1,2].map((value,index)=>{
          return(
            <CustomSkeleton
            height={20.7} width={40} marginTop={vh * 2}
          />
            
          )
        })}
      </View>
    )
  }
  const renderList = () => {
    return (
      <FlatList
        data={isLoading ? [1, 2, 3, 4, 5] : journalData}
        onRefresh={handleJournalRefresh}
        refreshing={refreshing}
        ListEmptyComponent={renderEmpty}
        ListHeaderComponent={renderHeader}
        keyExtractor={(item, index) => index}
        key={'bookPrintingScreenArray'}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={renderListFooter}

        // contentContainerStyle={styles.contentContainer}
        renderItem={renderBookPrint}
        onEndReached={handleOnEndReached}
      />
    );
  };
  const renderJournalGrid = ({item}) => {
    return (
      <View>
        {isLoading ? (
          <CustomSkeleton height={20.7} width={40} marginTop={vh * 2} />
        ) : (
          <JournalInGridCard
            title={item?.title}
            image={item?.image?.thumbnail}
            date={item?.createdAt}
            onPress={() =>
              props.navigation.navigate('ViewAllEntries', {id: item?._id})
            }
          />
        )}
      </View>
    );
  };
  const renderGrid = () => {
    return (
      <FlatList
        data={isLoading ? [1, 2, 3, 4, 5] : journalData}
        refreshing={refreshing}
        ListEmptyComponent={renderEmpty}
        onRefresh={handleJournalRefresh}
        ListFooterComponent={renderGridFooter}
        ListHeaderComponent={renderHeader}
        keyExtractor={(item, index) => index}
        showsVerticalScrollIndicator={false}
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
