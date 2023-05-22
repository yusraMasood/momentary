import React, {useEffect, useState} from 'react';
import {View, Image, FlatList} from 'react-native';
import {generalImages, icons} from '../../../../assets/images';
import BasicButton from '../../../../components/Buttons/BasicButton';
import CustomButton from '../../../../components/Buttons/CustomButton';
import LibraryCard from '../../../../components/Cards/LibraryCard';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
import styles from './styles';
import {useGetLibraryQuery} from '../../../../state/journal';
import RobotoRegular from '../../../../components/Texts/RobotoRegular';
import RippleHOC from '../../../../components/wrappers/Ripple';
import RobotoMedium from '../../../../components/Texts/RobotoMedium';
import LibraryHeader from '../../../../components/ReusableComponent/LibraryHeader';
import ContentContainer from '../../../../components/wrappers/ContentContainer';
import EmptyComponent from '../../../../components/EmptyComponent';

const LibraryScreen = props => {
  const [refreshing, setRefreshing] = useState(false);
  const {data, refetch, error} = useGetLibraryQuery({page: 1, limit: 5});
  const handleDataRefresh = () => {
    setRefreshing(true);
    refetch();
    setRefreshing(false);
  };
  useEffect(() => {}, []);

  const renderEntryCard = ({item}) => {
    // console.log('item?._id', item?._id);
    return (
      <LibraryCard
        image={item?.images.length > 0 ? item?.images[0]?.thumbnail : null}
        onPress={() => props.navigation.navigate('EditEntry', {id: item?._id})}
      />
    );
  };
  const renderJournalCard = ({item}) => {
    // console.log("item", item?.images);
    return (
      <LibraryCard
        image={item?.image?.thumbnail}
        onPress={() =>
          props.navigation.navigate('ViewAllEntries', {id: item?._id})
        }
      />
    );
  };
  const renderGlobalCard = ({item}) => {
    // console.log("item", item?.images);
    return (
      <LibraryCard
        image={item?.images.length > 0 ? item?.images[0]?.thumbnail : null}
        onPress={() =>
          props.navigation.navigate('PostByLocation', {id: item?._id})
        }
      />
    );
  };
  const renderNetworkCard = ({item}) => {
    // console.log("item", item?.images);
    return (
      <LibraryCard
        image={item?.images.length > 0 ? item?.images[0]?.thumbnail : null}
        onPress={() =>
          props.navigation.navigate('PostByLocation', {id: item?._id})
        }
      />
    );
  };
  const renderInPrintCard = ({item}) => {
    // console.log("item", item?.images);
    return <LibraryCard />;
  };

  const renderEmpty = () => {
    return <EmptyComponent text="No Items to show" />;
  };
  const renderFooter = () => {
    return (
      <View style={styles.buttonContainer}>
        <CustomButton
          text="Add New Journal"
          style={styles.btn}
          textStyle={styles.btnText}
          onPress={() => props.navigation.navigate('AddNewJournal')}
        />
        <BasicButton
          text=" Add New Entry"
          style={styles.btn}
          textStyle={styles.btnText}
          onPress={() => props.navigation.navigate('NewEntry')}
        />
      </View>
    );
  };
  return (
    <ScreenWrapper style={styles.container}>
      {error ? (
        <RobotoMedium>Something went wrong</RobotoMedium>
      ) : (
        <ContentContainer>
          <RippleHOC
            onPress={() => props.navigation.navigate('LibraryCollection')}
            style={styles.inputContainer}
          >
            <RobotoRegular style={styles.placeholderText}>
              Search Here
            </RobotoRegular>
            <Image source={icons.search} style={styles.imgIcon} />
          </RippleHOC>
          <LibraryHeader
            heading={'All Entries'}
            onPress={() => props.navigation.navigate('MyEntries')}
          />
          <FlatList
            onRefresh={handleDataRefresh}
            refreshing={refreshing}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            // ListHeaderComponent={renderEntryHeader}
            data={data?.library?.journalEntries}
            contentContainerStyle={styles.contentContainerStyle}
            renderItem={renderEntryCard}
            keyExtractor={(item, index) => index}
            ListEmptyComponent={renderEmpty}
            key={'renderEntryArrayinLibrary'}
            // ListFooterComponent={renderFooter}
          />
          <LibraryHeader
            heading={'Journals'}
            onPress={() => props.navigation.navigate('MyJournals')}
          />
          <FlatList
            onRefresh={handleDataRefresh}
            showsHorizontalScrollIndicator={false}
            refreshing={refreshing}
            data={data?.library?.journals}
            ListEmptyComponent={renderEmpty}
            contentContainerStyle={styles.contentContainerStyle}
            renderItem={renderJournalCard}
            horizontal={true}
            keyExtractor={(item, index) => index}
            key={'renderJournalArrayinLibrary'}
          />
          <LibraryHeader
            heading={'Favorite Connect Content'}
            onPress={() =>
              props.navigation.navigate('LibraryGlobalContent', {
                type: 'Favorite Connect Content',
                type: 'myNetwork',
              })  
            }
          />
          <FlatList
            onRefresh={handleDataRefresh}
            showsHorizontalScrollIndicator={false}
            refreshing={refreshing}
            data={data?.library?.networkFavoriteFeeds}
            renderItem={renderNetworkCard}
            horizontal={true}
            ListEmptyComponent={renderEmpty}
            keyExtractor={(item, index) => index}
            contentContainerStyle={styles.contentContainerStyle}
            key={'renderFavFriendArrayinLibrary'}
          />
          <LibraryHeader
            heading={'Favorite Global Content'}
            onPress={() =>
              props.navigation.navigate('LibraryGlobalContent', {
                type: 'Favorite Global Content',
                type: 'public',
              })
            }
          />
          <FlatList
            onRefresh={handleDataRefresh}
            refreshing={refreshing}
            data={data?.library?.globalFavoriteFeeds}
            horizontal={true}
            renderItem={renderGlobalCard}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index}
            ListEmptyComponent={renderEmpty}
            contentContainerStyle={styles.contentContainerStyle}
            key={'renderFavGlobalArrayinLibrary'}
          />
          <LibraryHeader
            heading={'Now In Print'}
            //  onPress={()=> props.navigation.navigate('MyEntries')}
            view={true}
          />
          <FlatList
            onRefresh={handleDataRefresh}
            refreshing={refreshing}
            showsHorizontalScrollIndicator={false}
            data={data?.library?.inPrint}
            renderItem={renderInPrintCard}
            horizontal={true}
            keyExtractor={(item, index) => index}
            contentContainerStyle={styles.contentContainerStyle}
            ListEmptyComponent={renderEmpty}
            key={'renderinPrintArrayinLibrary'}
            // ListFooterComponent={renderFooter}
          />
          {renderFooter()}
        </ContentContainer>
      )}
    </ScreenWrapper>
  );
};
export default LibraryScreen;
