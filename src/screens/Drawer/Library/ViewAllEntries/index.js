import React,{useRef,useState} from 'react';
import {View, FlatList, useWindowDimensions,} from 'react-native';
import BasicButton from '../../../../components/Buttons/BasicButton';
import CustomButton from '../../../../components/Buttons/CustomButton';
import FriendNetworkCard from '../../../../components/Cards/FriendNetworkCard';
import SearchInput from '../../../../components/Inputs/SearchInput';
import PublishQuestionPopup from '../../../../components/popups/PublishQuestionPopup';
import SuccessPopup from '../../../../components/popups/SuccessPopup';
import RobotoMedium from '../../../../components/Texts/RobotoMedium';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';

import styles from './styles';
import { useGetEntriesQuery } from '../../../../state/entry';
import { usePostDeleteJournalMutation } from '../../../../state/journal';
import { Toast } from '../../../../Api/APIHelpers';
import EmptyComponent from '../../../../components/EmptyComponent';

const ViewAllEntries = (props) => {
  const [search,setSearch]=useState("")
  const {data,isError,isFetching,isLoading,isSuccess,error,refetch} = useGetEntriesQuery({
    keyword: search,
    page:1,
    limit: 5,
  });
  const [postDeleteJournal,deleteJournal]= usePostDeleteJournalMutation()
  console.log("journal delete ", deleteJournal);

  const deleteRef=useRef(null)
  const successRef=useRef(null)

  const renderFriendCard = ({item}) => {
    return (
      <FriendNetworkCard 
      content={item.content}
        onPress={() => props.navigation.navigate('MyProfile')}
        location={item?.location?.name}
        hashtags={item?.hashtags}
        createdAt={item?.createdAt}
        clickText={"Remove Entry"}
        id={item?._id}
        refetch={refetch}
        loader={isLoading}
      />
    );
  };
  const renderFooter=()=>{
    return(
      <View style={styles.buttonContainer}>
        <BasicButton text="Add Entries" onPress={()=> props.navigation.navigate("AddEntryInJournal")} style={styles.btn} textStyle={styles.btnText}/>
      <CustomButton text="Print Journal"  style={styles.btn} textStyle={styles.btnText}
      onPress={()=> props.navigation.navigate("AddNewJournal")}
      />
      
      </View>
    )
  }
  const renderHeader=()=>{
    return(
      <View>
        <SearchInput placeholder={"Search .."}
        value={search}
        onChangeText={setSearch}
        />
      <View style={styles.entriesContainer}>
        <RobotoMedium style={styles.entryText}>Entries</RobotoMedium>
        <CustomButton text={"Delete Journal"} style={styles.deleteBtn}
        textStyle={styles.btnText}
        onPress={()=> deleteRef.current.show()}
        />
      </View>
      </View>
    )
  }
  const onDeleteJournal=()=>{
    postDeleteJournal(props?.route?.params?.id).then((res)=>{
      if(res?.data?.message)
      {
        Toast.success(res?.data?.message)
        props.navigation.goBack()
      }
      if(res?.error?.data)
      {
        Toast.error("Something went wrong")
      }
    })
  }
  const renderEmpty=()=>{
    return(
      <EmptyComponent text="No entries in this Journal"/>
    )
  }
  return (
    <ScreenWrapper style={styles.container}> 
      <FlatList
        data={isLoading?[1,2,3,4,5]: data?.journalEntries}
          ListHeaderComponent={renderHeader}
        key={'friendArar'}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index}
        ListFooterComponent={renderFooter}
        contentContainerStyle={styles.flatListContainer}
        renderItem={renderFriendCard}
        ListEmptyComponent={renderEmpty}
      />
      <PublishQuestionPopup
          reference={deleteRef}
          title={'Delete Journal'}
          desc={"Are you sure you want to delete journal?"}     
          // onAccept={()=> successRef.current.show()}
          onAccept={onDeleteJournal}
          />
              <SuccessPopup
          reference={successRef}
          onAccept={() => props.navigation.goBack()}
          title={'Success'}
          desc={'Journal Entry Deleted Successfully.'}
        />
    </ScreenWrapper>
  );
};

export default ViewAllEntries;
