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

const FriendRequest = props => {
  const pagerRef = useRef();
  const [friendPage, setFriendPage] = useState(1);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(0);
  const [friendRequestPage,setFriendRequest] =useState(1)
  const [refreshing, setRefreshing] = useState(false);
  const requestArray = ['My Connections', 'Incoming', 'Outgoing'];
  const requestRef = useRef(null);
  const addFriendRef = useRef(null);
  const friendsData = useGetMyFriendsQuery({keyword: search,page:friendPage,limit:10,
  });
  const friendRequest = useGetFriendRequestQuery({
    requestType: page == 1 ? 'received' : 'sent',
    keyword: search,
    page:friendRequestPage,
    limit:10
  });
  console.log(friendsData);
useEffect(()=>{
  friendsData?.refetch()
  friendRequest?.refetch()

},[page])




  const renderConnectionCard = ({item}) => {
    return (
      <FriendRequestCard
        name={item?.friend?.fullName}
        image={item?.friend?.image?.thumbnail}
        job={'Last Entry on mm/dd/yyyy'}
        request={'Remove'}
        friendRequestId={item?._id}
        onPress={() => props.navigation.navigate('FriendDetails')}
        refetch={friendsData?.refetch}
        loader={friendsData?.isLoading}
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
        job={'Content Writer'}
        onPress={() => props.navigation.navigate('FriendDetails')}
        loader={friendRequest?.isLoading}
      />
    );
  };
  const renderOutgoingCard = ({item}) => {
    return (
      <FriendRequestCard
        name={item?.friend?.fullName}
        image={item?.friend?.image?.thumbnail}
        job={'Content Writer'}
        refetch={friendRequest?.refetch}
        friendRequestId={item?._id}
        request={'Cancel'}
        onPressRequest={() => addFriendRef.current.show()}
        onPress={() => props.navigation.navigate('FriendDetails')}
        loader={friendRequest?.isLoading}
      />
    );
  };
  const handleFriendReached = () => {
    if (friendsData?.friends?.length > 8) {
      setFriendPage(friendPage + 1);
    }
  };
  const updateData = data => {
    setPage(data);
  };
  const renderEmpty = () => {
    return <EmptyComponent text={'No Connections to show'} />;
  };
  const handleFriendRequestRefresh = () => {
    setRefreshing(true);
    friendRequest?.refetch();
    setRefreshing(false);
  };
  const handleFriendDataRefresh = () => {
    setRefreshing(true);
    friendRequest?.refetch();
    setRefreshing(false);
  };
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
              friendsData?.isLoading ? [1, 2, 3] : friendsData?.data?.friends
            }
            key={'myconnectionArray'}
            keyExtractor={(item, index) => index}
            renderItem={renderConnectionCard}
            showsVerticalScrollIndicator={false}
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
                : friendRequest?.data?.friendRequests
            }
            key={'incomingArray'}
            keyExtractor={(item, index) => index}
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
                : friendRequest?.data?.friendRequests
            }
            refreshing={refreshing}
            key={'outgoingArray'}
            keyExtractor={(item, index) => index}
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
