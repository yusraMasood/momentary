import React from 'react';
import {View,FlatList} from 'react-native';
import StoreCard from '../../../../components/Cards/StoreCard';
import SearchInput from '../../../../components/Inputs/SearchInput';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
import styles from './styles';

const LibraryCollection = () => {

    const libraryArray=[
        {
            title:"Random Thoughts",
            date:"01-01-2022"
        },
        {
            title:"Interesting Observation",
            date:"01-01-2022"
        },
        {
            title:"Funniest Thing",
            date:"01-01-2022"
        },
        {
            title:"April Fools",
            date:"01-01-2022"
        },
        {
            title:"Good News",
            date:"01-01-2022"
        },
        {
            title:"New Puppy",
            date:"01-01-2022"
        }
    ]
    const renderLibraryCard=({item})=>{
        return(
            <StoreCard
            style={styles.card}
            name={item?.title}
            date={item?.date}
            

            
            />
        )
    }
  return (
    <ScreenWrapper style={styles.container}>
      <SearchInput placeholder={'Search ..'} />
      <FlatList
      data={libraryArray}
      contentContainerStyle={styles.contentContainer}
      key={"LibraryCollectionArray"}
      keyExtractor={(item,index)=> index}
      renderItem={renderLibraryCard}
      
      />
    </ScreenWrapper>
  );
};

export default LibraryCollection;
