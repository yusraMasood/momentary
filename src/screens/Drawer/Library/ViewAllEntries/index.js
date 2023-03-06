import React,{useRef} from 'react';
import {View, FlatList} from 'react-native';
import BasicButton from '../../../../components/Buttons/BasicButton';
import CustomButton from '../../../../components/Buttons/CustomButton';
import FriendNetworkCard from '../../../../components/Cards/FriendNetworkCard';
import SearchInput from '../../../../components/Inputs/SearchInput';
import PublishQuestionPopup from '../../../../components/popups/PublishQuestionPopup';
import SuccessPopup from '../../../../components/popups/SuccessPopup';
import RobotoMedium from '../../../../components/Texts/RobotoMedium';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
import styles from './styles';

const ViewAllEntries = (props) => {
  const deleteRef=useRef(null)
  const successRef=useRef(null)

  const renderFriendCard = () => {
    return (
      <FriendNetworkCard
        onPress={() => props.navigation.navigate('MyProfile')}
        location={" Exact location of user"}
        hashtags={"#trends #fashion"}
        clickText={"Remove Entry"}
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
        <SearchInput placeholder={"Search .."}/>
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
  return (
    <ScreenWrapper style={styles.container}> 
      <FlatList
        data={[1, 2, 3, 4, 5]}
          ListHeaderComponent={renderHeader}
        key={'friendArar'}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index}
        ListFooterComponent={renderFooter}
        contentContainerStyle={styles.flatListContainer}
        renderItem={renderFriendCard}
      />
      <PublishQuestionPopup
          reference={deleteRef}
          title={'Delete Journal'}
          desc={"Are you sure you want to delete journal?"}     
          onAccept={()=> successRef.current.show()}
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
