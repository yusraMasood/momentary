import React, {useLayoutEffect, useRef} from 'react';
import {View, FlatList} from 'react-native';
import CustomButton from '../../../../components/Buttons/CustomButton';
import NoteCard from '../../../../components/Cards/NoteCard';
import SearchInput from '../../../../components/Inputs/SearchInput';
import EntryDetailPopup from '../../../../components/popups/EntryDetailPopup';
import DamionRegular from '../../../../components/Texts/DamionRegular';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
import styles from './styles';

const AddEntryInJournal = props => {
  const gridArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const entryDetailRef = useRef(null);

  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerTitle: () => {
        return (
          <DamionRegular style={styles.titleCenterText}>
            My First Journal
          </DamionRegular>
        );
      },
    });
  }, [props.navigation]);
  const renderGridNotes = ({item, index}) => {
    return (
      <View>
        <NoteCard
          onPress={() => entryDetailRef.current.show()}
          index={index}
          listStyle={[styles.listNoteContainer]}
          deleteIconStyle={styles.deleteIcon}
        />
      </View>
    );
  };
  const renderHeader = () => {
    return <SearchInput placeholder={'Search '} />;
  };
  const renderFooter = () => {
    return <CustomButton text={'Add Entries'} />;
  };
  return (
    <ScreenWrapper style={styles.container}>
      <FlatList
        data={gridArray}
        renderItem={renderGridNotes}
        ListHeaderComponent={renderHeader}
        columnWrapperStyle={styles.column}
        ListFooterComponent={renderFooter}
        key={'journalGridArray'}
        numColumns={2}
        keyExtractr={(item, index) => index}
      />
      <EntryDetailPopup
      reference={entryDetailRef}
      />
      
    </ScreenWrapper>
  );
};
export default AddEntryInJournal;
