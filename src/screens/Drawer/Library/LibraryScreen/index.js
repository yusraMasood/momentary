import React from 'react';
import {View, Image, FlatList} from 'react-native';
import { generalImages } from '../../../../assets/images';
import BasicButton from '../../../../components/Buttons/BasicButton';
import CustomButton from '../../../../components/Buttons/CustomButton';
import LibraryCard from '../../../../components/Cards/LibraryCard';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
import styles from './styles';

const LibraryScreen = (props) => {
  const headingArray = [
    {
      heading: 'All Entries',
      images:[generalImages?.bookcover]
    },
    {
      heading: 'Journals',
      images:[generalImages?.bookcover4,generalImages?.bookcover9,generalImages?.bookcover,generalImages?.bookCover3]

    },
    {
      heading: 'Favorite Connect Content',
      images:[generalImages?.bookcover,generalImages?.bookcover5,generalImages?.bookcover9,generalImages?.bookCover3]

    },
    {
      heading: 'Favorite Global Content',
      images:[generalImages?.bookcover9,generalImages?.bookcover2,generalImages?.bookcover,generalImages?.bookCover3]

    },
    {
      heading: 'Now In Print',
      images:[generalImages?.bookCover3]

    },
  ];

  const renderCards = ({item}) => {
    return <LibraryCard heading={item?.heading}
    images={item?.images}
     />;
  };
  const renderFooter = () => {
    return (

    
    <View style={styles.buttonContainer}>
      <CustomButton text="Add New Journal"  style={styles.btn} textStyle={styles.btnText}
      onPress={()=> props.navigation.navigate("AddNewJournal")}
      />
      <BasicButton text=" Add New Entry" style={styles.btn} textStyle={styles.btnText}/>
      </View>
  )};
  return (
    <ScreenWrapper style={styles.container}>
      <FlatList
        data={headingArray}
        renderItem={renderCards}
        keyExtractor={(item,index)=> index}
             key={"libraryscreenarray"}
        ListFooterComponent={renderFooter}
      />
    </ScreenWrapper>
  );
};
export default LibraryScreen;
