import React, {useState} from 'react';
import {View, Image, FlatList} from 'react-native';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
import styles from './styles';
import {useGetEntriesQuery} from '../../../../state/entry';
import SearchInput from '../../../../components/Inputs/SearchInput';
import ListGridComponent from '../../../../components/ReusableComponent/ListGridComponent';
import {generalImages} from '../../../../assets/images';
import RippleHOC from '../../../../components/wrappers/Ripple';
import RobotoMedium from '../../../../components/Texts/RobotoMedium';
import NoteCard from '../../../../components/Cards/NoteCard';
import NoteCardList from '../../../../components/Cards/NoteCardList';
import CustomSkeleton from '../../../../components/Loaders/CustomSkeleton';
import {vh, vw} from '../../../../utils/dimensions';
import EmptyComponent from '../../../../components/EmptyComponent';
import { usePaginatedQuery } from '@reduxjs/toolkit/query';

const MyEntries = props => {
  const [search, setSearch] = useState('');
  const [list, setList] = useState(true);
  const [page, setPage] = useState(1);

  const entriesApi = useGetEntriesQuery({
    keyword: search,
    page,
    limit: 5,
  });
  console.log("entriesApi",entriesApi);
  // const {
  //   data,
  //   isLoading,
  //   isFetchingNextPage,
  //   fetchNextPage,
  //   hasNextPage,
  // } = usePaginatedQuery('entriesData', {
  //   query: (page = 1) => `user/journal/entries/?page=${page}&pageSize=${PAGE_SIZE}`,
  //   getNextPageParam: lastPage => lastPage.nextPage,
  // });
  const handleOnEndReached = () => {
    if (entriesApi?.data?.journalEntries.length > 5) {
      if(entriesApi?.data?.totalPages!=page)
      {
        setPage(page + 1);

      }
    }
  };

  const renderHeader = () => {
    return (
      <View>
        <ListGridComponent list={list} setList={setList} />
      </View>
    );
  };
  const renderNotes = ({item, index}) => {
    return (
      <View>
        {entriesApi?.isLoading ? (
          <CustomSkeleton height={15} width={95} marginLeft={vw*3} marginTop={vh * 2} />
        ) : (
          <NoteCard
            isLoading={entriesApi?.isLoading}
            pin
            id={item?._id}
            hashtag={item?.hashtags}
            refetch={entriesApi?.refetch}
            delete
            content={item?.content}
            listStyle={[styles.noteGridContainer]}
            onPress={() =>
              props.navigation.navigate('EditEntry', {id: item?._id})
            }
          />
        )}
      </View>
    );
  };
  const renderGridNotes = ({item, index}) => {
    return (
      <View>
        {entriesApi?.data?.journalEntries.length - 1 == index ? (
          <View style={styles.lastEntryContainer}>
            <RippleHOC
              onPress={props.onPressNewEntry}
              style={styles.alignEntryText}
            >
              <RobotoMedium style={styles.lastEntryText}>
                Add Entry
              </RobotoMedium>
            </RippleHOC>
            <Image source={generalImages.girl} style={styles.girlImgGrid} />
          </View>
        ) : (
          <View>
            {entriesApi?.isLoading ? (
              <CustomSkeleton height={15} width={40} marginTop={vh * 2} />
            ) : (
              <NoteCard
                list={true}
                index={index}
                delete
                pin
                refetch={entriesApi?.refetch}
                id={item?._id}
                content={item?.content}
                descStyle={styles.descText}
                hashtag={item?.hashtags}
                listStyle={[styles.listNoteContainer]}
                // deleteIconStyle={styles.deleteIcon}
                onPress={() =>
                  props.navigation.navigate('EditEntry', {id: item?._id})
                }
              />
            )}
          </View>
        )}
      </View>
    );
  };
  const renderAddEntry = () => {
    return (
      <View>
        <RippleHOC
          onPress={props.onPressNewEntry}
          style={styles.addEntryContainer}
        >
          <RobotoMedium style={styles.entryText}>Add Entry</RobotoMedium>
        </RippleHOC>
        <Image source={generalImages.girl} style={styles.girlImg} />
      </View>
    );
  };
 const renderEmpty=()=>{
  return(
    <EmptyComponent text="No Entries to show"/>
  )
 }
  const renderAddEntryCard = () => {
    return (
      <View>
        <FlatList
          data={
            entriesApi?.isLoading
              ? [1, 2, 3, 4, 5]
              : entriesApi?.data?.journalEntries
          }
          key={'listArray'}
          //   numColumns={2}
          ListHeaderComponent={renderAddEntry}
          contentContainerStyle={styles.contentContainer}
          keyExtractr={(item, index) => index}
          ListEmptyComponent={renderEmpty}
          renderItem={renderNotes}
          onEndReached={handleOnEndReached}
        />
      </View>
    );
  };

  const renderGridCard = () => {
    return (
      <FlatList
        data={
          entriesApi?.isLoading
            ? [1, 2, 3, 4, 5]
            : entriesApi?.data?.journalEntries
        }
        renderItem={renderGridNotes}
        contentContainerStyle={styles.contentContainer}
        key={'gridArray'}
        numColumns={2}
        ListEmptyComponent={renderEmpty}
        keyExtractr={(item, index) => index}
        onEndReached={handleOnEndReached}
      />
    );
  };

  return (
    <ScreenWrapper style={styles.container}>
      <SearchInput
        placeholder={'Search '}
        style={styles.searchInput}
        value={search}
        onChangeText={setSearch}
      />
      {renderHeader()}
      {list ? renderAddEntryCard() : renderGridCard()}
    </ScreenWrapper>
  );
};
export default MyEntries;
