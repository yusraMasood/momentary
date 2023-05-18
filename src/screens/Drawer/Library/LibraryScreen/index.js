import React,{useState} from 'react';
import {View, Image, FlatList} from 'react-native';
import {generalImages, icons} from '../../../../assets/images';
import BasicButton from '../../../../components/Buttons/BasicButton';
import CustomButton from '../../../../components/Buttons/CustomButton';
import LibraryCard from '../../../../components/Cards/LibraryCard';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
import styles from './styles';
import { useGetLibraryQuery } from '../../../../state/journal';
import RobotoRegular from '../../../../components/Texts/RobotoRegular';
import RippleHOC from '../../../../components/wrappers/Ripple';
import RobotoMedium from '../../../../components/Texts/RobotoMedium';

const LibraryScreen = props => {
  const [refreshing,setRefreshing] =useState(false)
  const {data,refetch,error}= useGetLibraryQuery()
  const handleDataRefresh=()=>{
    setRefreshing(true)
    refetch()
    setRefreshing(false)

  }
  

  const headingArray = [
    {
      heading: 'All Entries',
      images: data?.library?.journalEntries,
      
      onPress: () => props.navigation.navigate('MyEntries'),
    },
    {
      heading: 'Journals',
      images: data?.library?.journals,
      onPress: () => props.navigation.navigate('MyJournals'),
    },
    {
      heading: 'Favorite Connect Content',
      images: data?.library?.networkFavoriteFeeds,

      onPress: () =>
        props.navigation.navigate('LibraryGlobalContent', {
          type: 'Favorite Connect Content',
          type:"myNetwork"
        }),
    },
    {
      heading: 'Favorite Global Content',
      images: data?.library?.globalFavoriteFeeds,
      onPress: () =>
        props.navigation.navigate('LibraryGlobalContent', {
          type: 'Favorite Global Content',
          type:"public"

        }),
    },
    {
      heading: 'Now In Print',
      images: data?.library?.inPrint,
    },
  ];

  const renderCards = ({item}) => {
    // console.log("item", item?.images);
    return (
      <LibraryCard
        heading={item?.heading}
        images={item?.images}
        onPress={item?.onPress}
      />
    );
  };
  const renderHeader=()=>{
    return(
      <RippleHOC onPress={()=> props.navigation.navigate("LibraryCollection")} style={styles.inputContainer}>
      <RobotoRegular  style={styles.placeholderText}>
   Search Here 
      </RobotoRegular>


    <Image source={icons.search} style={styles.imgIcon} />

    </RippleHOC>
    )
  }
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
      {error?
    <RobotoMedium>
      Something went wrong 
    </RobotoMedium>  
    :
    <FlatList
      onRefresh={handleDataRefresh}
      refreshing={refreshing}
      data={headingArray}
      renderItem={renderCards}
      ListHeaderComponent={renderHeader}
      keyExtractor={(item, index) => index}
      key={'libraryscreenarray'}
      ListFooterComponent={renderFooter}
    />

    }
    </ScreenWrapper>
  );
};
export default LibraryScreen;
