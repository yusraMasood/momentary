import React,{useState} from 'react';
import {View, FlatList} from 'react-native';
import StoreCard from '../../../../components/Cards/StoreCard';
import SearchInput from '../../../../components/Inputs/SearchInput';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
import styles from './styles';
import { useGetLibraryQuery } from '../../../../state/journal';
import ContentContainer from '../../../../components/wrappers/ContentContainer';

const LibraryCollection = (props) => { 
  const [search,setSearch] =useState("")
  const [page,setPage]=useState(1)
  const [refreshing,setRefreshing] =useState(false)
  const {data,refetch,error,originalArgs,isLoading}= useGetLibraryQuery({page,
    limit: 10,
    keyword:search}
    )
  const handleDataRefresh=()=>{
    setRefreshing(true)
    refetch()
    setRefreshing(false)

  }
  console.log(" data library collection", data,originalArgs);
  const renderLibraryCard = ({item}) => {
    return (
      <StoreCard 
      loader={isLoading}
      style={styles.card}
      name={item?.content}
      date={item?.createdAt}
      onPress={() =>
        props.navigation.navigate('PostByLocation', {id: item?._id})
      }

       />
    );
  };
  const renderJournalCard=({item})=>{
    return(
      <StoreCard 
      loader={isLoading}
      style={styles.card}
      heading={item?.title}
      date={item?.createdAt}
      onPress={() =>
        props.navigation.navigate('ViewAllEntries', {id: item?._id})
      }
       />
    );

  }
  return (
    <ScreenWrapper style={styles.container}>
      <ContentContainer>
      <SearchInput placeholder={'Search ..'}
      value={search}
      onChangeText={setSearch}
      
      />
      <FlatList
        data={isLoading?[1,2,3,4]:data?.library?.globalFavoriteFeeds}
        // contentContainerStyle={styles.contentContainer}
        key={'globalFavoriteFeedsLBA'}
        keyExtractor={(item, index) => index}
        renderItem={renderLibraryCard}
      />
      <FlatList
        data={isLoading?[1,2,3,4]:data?.library?.inPrint}
        // contentContainerStyle={styles.contentContainer}
        key={'InPrintArrayLBA'}
        keyExtractor={(item, index) => index}
        renderItem={renderLibraryCard}
      />
      <FlatList
        data={isLoading?[1,2,3,4]:data?.library?.journalEntries}
        // contentContainerStyle={styles.contentContainer}
        key={'JournalEntriesLBA'}
        keyExtractor={(item, index) => index}
        renderItem={renderLibraryCard}
      />
      <FlatList
        data={isLoading?[1,2,3,4]:data?.library?.journals}
        // contentContainerStyle={styles.contentContainer}
        key={'journalsLBA'}
        keyExtractor={(item, index) => index}
        renderItem={renderJournalCard}
      />
      <FlatList
        data={isLoading?[1,2,3,4]:data?.library?.networkFavoriteFeeds}
        // contentContainerStyle={styles.contentContainer}
        key={'networkFavoriteFeedsLBA'}
        keyExtractor={(item, index) => index}
        renderItem={renderLibraryCard}
      />
      </ContentContainer>
    </ScreenWrapper>
  );
};

export default LibraryCollection;
