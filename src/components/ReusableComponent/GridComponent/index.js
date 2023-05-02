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
        <ListGridComponent list={list} setList={setList} />
      </View> 
    );
  };
  // const onPressNewEntry=()=>{
  //   if(updateDataAndNavigate)
  //   {
  //     props.updateDataAndNavigate(pr)
  //   }
  // }

  const renderNotes = ({item, index}) => {
    return (
      <NoteCard
        pin
        id={item?._id}
         hashtag={item?.hashtags}
        delete
        content={item?.content}
        // onPress={onPressNewEntry}
      />
    );
  };
  const renderGridNotes = ({item, index}) => {
    return (
      <View>
        {gridArray.length - 1 == index ? (
          <View style={styles.lastEntryContainer}>
            <RippleHOC
              onPress={props.onPressNewEntry}
              style={styles.alignEntryText}>
              <RobotoMedium style={styles.lastEntryText}>
                Add Entry
              </RobotoMedium>
            </RippleHOC>
            <Image source={generalImages.girl} style={styles.girlImgGrid} />
          </View>
        ) : (
          <NoteCard
            onPress={props.onPressNewEntry}
            list={true}
            index={index}
            delete
            pin
            id={item?._id}
            content={item?.content}
            hashtag={item?.hashtags}
            listStyle={[styles.listNoteContainer]}
            // deleteIconStyle={styles.deleteIcon}
          />
        )}
      </View>
    );
  };
  const renderAddEntry = () => {
    return (
      <View>
        <RippleHOC
          onPress={props.onPressNewEntry}
          style={styles.addEntryContainer}>
          <RobotoMedium style={styles.entryText}>Add Entry</RobotoMedium>
        </RippleHOC>
        <Image source={generalImages.girl} style={styles.girlImg} />
      </View>
    );
  };
  const handleOnEndReached=()=>{
    if(props.data.length>8)
    {
      props.setPage(props.page+1)
    }
  }
  const renderAddEntryCard = () => {
    return (
      <View>
        <FlatList
          data={props.data}
          key={'listArray'}
          //   numColumns={2}
          ListHeaderComponent={renderAddEntry}
          contentContainerStyle={styles.contentContainer}
          keyExtractr={(item, index) => index}
          renderItem={renderNotes}
          onEndReached={handleOnEndReached}
        />
      </View>
    );
  };


  const renderGridCard = () => {
    return (
      <FlatList
        data={props.data}
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
