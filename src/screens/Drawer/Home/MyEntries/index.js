import React, {useState} from 'react';
import {View, Image, FlatList} from 'react-native';
import {generalImages, icons} from '../../../../assets/images';
import SearchInput from '../../../../components/Inputs/SearchInput';
import RobotoMedium from '../../../../components/Texts/RobotoMedium';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
import styles from './styles';
import NoteCard from '../../../../components/Cards/NoteCard';
import ListGridComponent from '../../../../components/ReusableComponent/ListGridComponent';

const MyEntries = props => {
  const [list, setList] = useState(false);
  const gridArray = [1, 2, 3, 4, 5];
  const renderHeader = () => {
    return (
      <View>
        <SearchInput placeholder={'Search '} style={styles.searchInput} />
        <ListGridComponent list={list} setList={setList} />
      </View>
    );
  };

  const renderNotes = ({item, index}) => {
    // const even=index%2==0;
    return (
      <NoteCard
        pin
        hashtag={'#lifeGoals #Lifestyle'}
        delete
        onPress={() => props.navigation.navigate('ViewEntry')}
      />
    );
  };
  const renderAddEntry = () => {
    return (
      <View>
        <View style={styles.addEntryContainer}>
          <RobotoMedium style={styles.entryText}>Add Entry</RobotoMedium>
        </View>
        <Image source={generalImages.girl} style={styles.girlImg} />
      </View>
    );
  };
  const renderAddEntryCard = () => {
    return (
      <View>
        <FlatList
          data={[1, 2, 3, 4]}
          key={'gridArray'}
          //   numColumns={2}
          ListHeaderComponent={renderAddEntry}
          contentContainerStyle={styles.contentContainer}
          keyExtractr={(item, index) => index}
          renderItem={renderNotes}
        />
      </View>
    );
  };
  const renderGridNotes = ({item, index}) => {
    // console.log(gridArray.length - 1 == index, gridArray.length - 1, index);
    // const even=index%2==0;
    return (
      <View>
        {gridArray.length - 1 == index ? (
          <View style={styles.lastEntryContainer}>
            <View style={styles.alignEntryText}>
              <RobotoMedium style={styles.lastEntryText}>
                Add Entry
              </RobotoMedium>
            </View>
            <Image source={generalImages.girl} style={styles.girlImgGrid} />
          </View>
        ) : (
          <NoteCard
            onPress={() => props.navigation.navigate('ViewEntry')}
            list={true}
            index={index}
            delete
            pin
            hashtag={'#lifeGoals #Lifestyle'}
            listStyle={[styles.listNoteContainer]}
            deleteIconStyle={styles.deleteIcon}
          />
        )}
      </View>
    );
  };

  const renderGridCard = () => {
    return (
      <FlatList
        data={gridArray}
        renderItem={renderGridNotes}
        key={'gridArray'}
        numColumns={2}
        keyExtractr={(item, index) => index}
      />
    );
  };
  return (
    <ScreenWrapper style={styles.container}>
      {renderHeader()}
      {list ? renderAddEntryCard() : renderGridCard()}
    </ScreenWrapper>
  );
};
export default MyEntries;
