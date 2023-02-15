import React from 'react';
import {View, Image, FlatList} from 'react-native';
import { generalImages } from '../../../../assets/images';
import CustomButton from '../../../../components/Buttons/CustomButton';
import LibraryCard from '../../../../components/Cards/LibraryCard';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
import styles from './styles';

const LibraryScreen = () => {
  const headingArray = [
    {
      heading: 'All Entries',
      images:[generalImages?.bookcover,generalImages?.bookcover2,generalImages?.bookCover9,generalImages?.bookCover3]
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
  ];

  const renderCards = ({item}) => {
    return <LibraryCard heading={item?.heading}
    images={item?.images}
     />;
  };
  const renderFooter = () => {
    return <CustomButton text="Add New Journal" />;
  };
  return (
    <ScreenWrapper style={styles.container}>
      <FlatList
        data={headingArray}
        renderItem={renderCards}
        ListFooterComponent={renderFooter}
      />
    </ScreenWrapper>
  );
};
export default LibraryScreen;
