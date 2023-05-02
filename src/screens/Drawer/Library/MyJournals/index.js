import React,{useState} from 'react';
import {View, Image, FlatList} from 'react-native';
import {generalImages} from '../../../../assets/images';
import CustomButton from '../../../../components/Buttons/CustomButton';
import BookPrintJournalCard from '../../../../components/Cards/BookPrintJournalCard';
import JournalInGridCard from '../../../../components/Cards/JournalInGridCard';
import SearchInput from '../../../../components/Inputs/SearchInput';
import ListGridComponent from '../../../../components/ReusableComponent/ListGridComponent';
import RobotoMedium from '../../../../components/Texts/RobotoMedium';
import RobotoRegular from '../../../../components/Texts/RobotoRegular';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
import styles from './styles';
import { useGetJournalsQuery } from '../../../../state/journal';

const MyJournals = (props) => {
  const [search,setSearch] =useState("")
  const [list, setList] = useState(false);
  const [page,setPage]=useState(1)
  const journalApi =useGetJournalsQuery({
    keyword: search,
    page,
    limit:5 
  },
  // {
  //   selectFromResult
  // }
  
  )
  
  // const [journalData,setJournalData] =useState(journalApi?.data?.journal)
console.log("journalApi  ",journalApi);
  const renderHeader = () => {
    return (
      <View>
        <SearchInput placeholder={'Search '}
        value={search}
        onChangeText={setSearch}
        style={styles.searchInput} />
    <ListGridComponent list={list} setList={setList} 
    onPress={()=> props.navigation.navigate("AddNewJournal")}
    />
      </View>
    );
  };
  const renderEmpty = () => {
    return (
      <View style={styles.emptyContainer}>
        <RobotoMedium style={styles.emptyText}>No Journal Found</RobotoMedium>
        <CustomButton text={'Create Journal '} />
      </View>
    );
  };
  const renderBookPrint = () => {
    return (
      <BookPrintJournalCard
      onPress={()=> props.navigation.navigate("ViewAllEntries")}
      />
    
    );
  };
  const handleOnEndReached=()=>{
    // if()
    setPage(page+1)
  }
  const renderList=()=>{
    return(
      <FlatList
        data={[1, 2]}
        ListEmptyComponent={renderEmpty}
        ListHeaderComponent={renderHeader}
        keyExtractor={(item, index) => index}
        key={'bookPrintingScreenArray'}
        // contentContainerStyle={styles.contentContainer}
        renderItem={renderBookPrint}
      onEndReached={handleOnEndReached}

      />
    )
  }
  const renderJournalGrid = () => {
    return (
      <JournalInGridCard
      onPress={()=> props.navigation.navigate("ViewAllEntries")}
      />
    
    );
  };
  const renderGrid=()=>{
    return(
      <FlatList
      data={[1, 2,3,4]}
      ListEmptyComponent={renderEmpty}
      ListHeaderComponent={renderHeader}
      keyExtractor={(item, index) => index}
      columnWrapperStyle={styles.columnStyle}
      numColumns={2}
      key={'bookPrintingGridScreenArray'}
      // contentContainerStyle={styles.contentContainer}
      renderItem={renderJournalGrid}
      onEndReached={handleOnEndReached}
    />
    )
  }
  return (
    <ScreenWrapper style={styles.container}>
    {list? renderList(): renderGrid()}
      
    </ScreenWrapper>
  );
};
export default MyJournals;
