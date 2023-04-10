import React, {useState} from 'react';
import {View, Image, FlatList} from 'react-native';
import { generalImages } from '../../../assets/images';
import NoteCard from '../../Cards/NoteCard';
import SearchInput from '../../Inputs/SearchInput';
import RobotoMedium from '../../Texts/RobotoMedium';
import RippleHOC from '../../wrappers/Ripple';
import ListGridComponent from '../ListGridComponent';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const GridComponent = props => {
  const navigation =useNavigation()
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
        onPress={() => navigation.navigate('ViewEntry')}
      />
    );
  };
  const renderAddEntry = () => {
    return (
      <View>
        <RippleHOC
          onPress={() =>
            navigation.navigate('NewEntry', {type: 'New Entry'})
          }
          style={styles.addEntryContainer}>
          <RobotoMedium style={styles.entryText}>Add Entry</RobotoMedium>
        </RippleHOC>
        <Image source={generalImages.girl} style={styles.girlImg} />
      </View>
    );
  };
  const renderAddEntryCard = () => {
    return (
      <View>
        <FlatList
          data={[1, 2, 3, 4]}
          key={'listArray'}
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
            <RippleHOC
              onPress={() =>
                props.navigation.navigate('NewEntry', {type: 'New Entry'})
              }
              style={styles.alignEntryText}>
              <RobotoMedium style={styles.lastEntryText}>
                Add Entry
              </RobotoMedium>
            </RippleHOC>
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
        contentContainerStyle={styles.contentContainer}
        key={'gridArray'}
        numColumns={2}
        keyExtractr={(item, index) => index}
      />
    );
  };
  return (
    <View style={styles.container}>
      {renderHeader()}
      {list ? renderAddEntryCard() : renderGridCard()}
    </View>
  );
};
export default GridComponent;
