import React, {useState, useEffect} from 'react';
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

const MyEntries = props => {
  const [search, setSearch] = useState('');
  const [list, setList] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [page, setPage] = useState(1);

  const entriesApi = useGetEntriesQuery({
    keyword: search,
    page,
    limit: 5,
  });
  // const entriesApi= usePaginatedQuery("getEntries")
  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      entriesApi?.refetch();
    });
    return unsubscribe;
  }, [props.navigation]);

  // console.log();
  const handleOnEndReached = () => {
    if (entriesApi?.data?.journalEntries.length > 4) {
      if(entriesApi?.data?.totalPages!=page)
      {
        setPage(page + 1);
      }
    }
  };
  const onPressNew = () => {
    if (entriesApi?.data?.journalEntries.length > 0) {
      props.navigation.navigate('NewEntry', {
        lastItem: entriesApi?.data?.journalEntries[0],
      });
    }
  };
  const handleEntriesRefresh = () => {
    setRefreshing(true);
    entriesApi?.refetch();
    setRefreshing(false);
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
          <CustomSkeleton
            height={15}
            width={93}
            marginLeft={vw * 2}
            marginTop={vh * 2}
          />
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
            <RippleHOC onPress={onPressNew} style={styles.alignEntryText}>
              <RobotoMedium style={styles.lastEntryText}>
                Add Entry
              </RobotoMedium>
            </RippleHOC>
            <Image source={generalImages.girl} style={styles.girlImgGrid} />
          </View>
        ) : (
          <View>
            {entriesApi?.isLoading ? (
              <CustomSkeleton
                height={15}
                width={40}
                marginTop={vh * 2}
                marginRight={vw * 4}
                marginLeft={vw * 4}
              />
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
        <RippleHOC onPress={onPressNew} style={styles.addEntryContainer}>
          <RobotoMedium style={styles.entryText}>Add Entry</RobotoMedium>
        </RippleHOC>
        <Image source={generalImages.girl} style={styles.girlImg} />
      </View>
    );
  };
  const renderEmpty = () => {
    return <EmptyComponent text="No Entries to show" />;
  };

  const renderAddEntryCard = () => {
    return (
      <View>
        <FlatList
          onRefresh={handleEntriesRefresh}
          refreshing={refreshing}
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
        onRefresh={handleEntriesRefresh}
        refreshing={refreshing}
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
