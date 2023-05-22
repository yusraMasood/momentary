import React, {useRef, useState,useEffect} from 'react';
import {View, FlatList} from 'react-native';
import PagerView from 'react-native-pager-view';
import {generalImages} from '../../../../assets/images';
import PageViewButton from '../../../../components/Buttons/PageViewButton';
import FriendRequestCard from '../../../../components/Cards/FriendRequestCard';
import SearchInput from '../../../../components/Inputs/SearchInput';
import PublishQuestionPopup from '../../../../components/popups/PublishQuestionPopup';
import SuccessPopup from '../../../../components/popups/SuccessPopup';
import DamionRegular from '../../../../components/Texts/DamionRegular';
import RippleHOC from '../../../../components/wrappers/Ripple';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
import styles from './styles';
import {
  useGetFriendRequestQuery,
  useGetMyFriendsQuery,
  usePostAddFriendMutation,
  usePostRemoveFriendMutation,
} from '../../../../state/friends';
import EmptyComponent from '../../../../components/EmptyComponent';
import {Toast, showToast} from '../../../../Api/APIHelpers';
import ListLoader from '../../../../components/Loaders/ListLoader';
import moment from 'moment';

const FriendRequest = props => {
  const pagerRef = useRef();
  const [friendPage, setFriendPage] = useState(1);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(0);
  const [friendRequestPage,setFriendRequestPage] =useState(1)
  const [refreshing, setRefreshing] = useState(false);
  const [friendRequestData,setFriendRequestData] =useState([])
  const requestArray = ['My Connections', 'Incoming', 'Outgoing'];
  const [myFriendsData,setMyFriendsData] =useState([])
  const requestRef = useRef(null);
  const addFriendRef = useRef(null);
  const myFriends = useGetMyFriendsQuery({keyword: search,page:friendPage,limit:10,
  });

  const friendRequest = useGetFriendRequestQuery({
    requestType: page == 1 ? 'received' : 'sent',
    keyword: search,
    page:friendRequestPage,
    limit:10
  });
// useEffect(()=>{
//   // friendsData?.refetch()
//   // friendRequest?.refetch()

// },[page])
useEffect(() => {
  if(!myFriends?.isFetching){
    if(friendPage===1)
    {
      setMyFriendsData(myFriends?.data?.friends)

      
    }
    else{
      setMyFriendsData([...myFriendsData,...myFriends?.data?.friends])
    }
  }
 
}, [myFriends?.data]);
useEffect(() => {
  if(!friendRequest?.isFetching){
    if(friendRequestPage===1)
    {
      setFriendRequestData(friendRequest?.data?.friendRequests) 
    }
    else{
      setFriendRequestData([...friendRequestData,...friendRequest?.data?.friendRequests])
    }
  }
 
}, [friendRequest?.data]);

const updateData = data => {
  setPage(data);
};
const renderEmpty = () => {
  return <EmptyComponent text={'No Connections to show'} />;
};
const handleFriendRequestRefresh = () => {
  setRefreshing(true);
  // friendRequestPage(1)
  friendRequest?.refetch()
  
  setRefreshing(false);
};
const handleFriendDataRefresh = () => {
  setRefreshing(true);
  // setFriendPage(1)
  myFriends?.refetch()

  setRefreshing(false);
};
const handleFriendReached = () => {
  if (myFriends?.data?.friends?.length > 9) {
    if(friendPage<=myFriends?.data?.totalPages){
    setFriendPage(friendPage + 1);

  }
  }
};
const handleFriendRequestReached=()=>{
  if (friendRequest?.data?.friendRequests?.length > 9) {
    if(friendRequestPage<=friendRequest?.data?.totalPages){
      setFriendRequestPage(friendRequestPage + 1);

  }
  }
}




  const renderConnectionCard = ({item}) => {
    // console.log(" item",item);
    return (
      <FriendRequestCard
        name={item?.friend?.fullName}
        image={item?.friend?.image?.thumbnail}
        job={`Last Entry on ${moment(item?.lastFeedTime).format("DD/MM/YYYY")}`}
        request={'Remove'}
        friendRequestId={item?.friend?._id}
        onPress={() => props.navigation.navigate('FriendDetails', {id: item?.friend?._id})}
        refetch={myFriends?.refetch}
        loader={myFriends?.isLoading}

      />
    );
  };


  const renderIncomingCard = ({item}) => {
    return (
      <FriendRequestCard
        name={item?.friend?.fullName}
        image={item?.friend?.image?.thumbnail}
        friendRequestId={item?._id}
        refetch={friendRequest?.refetch}
        job={item?.description}
        onPress={() => props.navigation.navigate('FriendDetails', {id: item?.friend?._id})}
        loader={friendRequest?.isLoading}
      />
    );
  };
  const renderOutgoingCard = ({item}) => {
    return (
      <FriendRequestCard
        name={item?.friend?.fullName}
        image={item?.friend?.image?.thumbnail}
        job={item?.description}
        refetch={friendRequest?.refetch}
        friendRequestId={item?._id}
        request={'Cancel'}
        onPressRequest={() => addFriendRef.current.show()}
        onPress={() => props.navigation.navigate('FriendDetails', {id: item?.friend?._id})}
        loader={friendRequest?.isLoading}
      />
    );
  };
  
 
  
  const renderFooter=()=>{
    if(myFriends?.isLoading)
    {
      return(
        <ListLoader/>
      )
    }
    if(friendRequest?.isLoading)
    {
      return(
        <ListLoader/>
      )
    }
    return(
      <View>

      </View>
    )
    
  }

  return (
    <ScreenWrapper style={styles.container}>
      <SearchInput
        placeholder={'Search..'}
        value={search}
        onChangeText={setSearch}
      />
      <PageViewButton
        data={requestArray}
        reference={pagerRef}
        updateData={updateData}
      />

      <PagerView
        ref={pagerRef}
        style={styles.pagerView}
        initialPage={0}
        scrollEnabled={false}
      >
        <View key="1">
          <FlatList
            onRefresh={handleFriendDataRefresh}
            refreshing={refreshing}
            data={
              myFriends?.isLoading ? [1, 2, 3] : myFriendsData
            }
            key={'myconnectionArray'}
            keyExtractor={(item, index) => index}
            renderItem={renderConnectionCard}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={renderFooter}
            onEndReached={handleFriendReached}
            contentContainerStyle={styles.contentContainer}
            ListEmptyComponent={renderEmpty}
          />
        </View>
        <View key="2">
          <FlatList
            onRefresh={handleFriendRequestRefresh}
            refreshing={refreshing}
            data={
              friendRequest?.isLoading
                ? [1, 2, 3]
                : friendRequestData
            }
            key={'incomingArray'}
            keyExtractor={(item, index) => index}
            ListFooterComponent={renderFooter}
            onEndReached={handleFriendRequestReached}

            renderItem={renderIncomingCard}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.contentContainer}
            ListEmptyComponent={renderEmpty}
          />
        </View>
        <View key="3">
          <FlatList
            onRefresh={handleFriendRequestRefresh}
            data={
              friendRequest?.isLoading
                ? [1, 2, 3]
                : friendRequestData
            }
            refreshing={refreshing}
            key={'outgoingArray'}
            keyExtractor={(item, index) => index}
            ListFooterComponent={renderFooter}

            renderItem={renderOutgoingCard}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.contentContainer}
            ListEmptyComponent={renderEmpty}
          />
        </View>
      </PagerView>
      <PublishQuestionPopup
        reference={requestRef}
        title={'Abigale Wilson'}
        desc={'Lorem ipsum dolor sit amet, consectetur\nadipiscing elit. '}
        image={generalImages.userImage}
        btnYes={'Reject'}
        btnNo={'Accept'}
        btnStyle={styles.btnStyle}
        contentStye={styles.popupContainer}
      />
      <SuccessPopup
        reference={addFriendRef}
        styleContent={styles.contentSuccess}
        image={generalImages.userImage}
        btnText={'Add Friend'}
        onAccept={() => props.navigation.navigate('MyEntries')}
        title={'Abigale Wilson'}
        btnStyle={styles.btnStyle}
        desc={'Lorem ipsum dolor sit amet, consectetur \nadipiscing elit. '}
      />
    </ScreenWrapper>
  );
};
export default FriendRequest;
