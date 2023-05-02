import React, {useRef, useState} from 'react';
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
import { useGetFriendRequestQuery, useGetMyFriendsQuery } from '../../../../state/friends';

const FriendRequest = props => {
  const pagerRef = useRef();
  const [friendPage, setFriendPage] = useState(0);
  const [page,setPage] =useState(0)
  const requestArray = ['My Connections', 'Incoming', 'Outgoing'];
  const requestRef = useRef(null);
  const addFriendRef = useRef(null);
  const friendsData=useGetMyFriendsQuery()
  const friendRequest= useGetFriendRequestQuery({requestType: page==1?"received": "sent"})
  // console.log("friendRequest",pagerRef?.current);

  const renderConnectionCard = ({item}) => {
    return (
      <FriendRequestCard
        name={item?.friend?.fullName}
        job={'Last Entry on mm/dd/yyyy'}
        request={'Remove'}
        onPress={() => props.navigation.navigate('FriendDetails')}
      />
    );
  };
  const renderIncomingCard = () => {
    return (
      <FriendRequestCard
        name={'Kamila Thompson '}
        onAccept={() => requestRef.current.show()}
        job={'Content Writer'}
        onPress={() => props.navigation.navigate('FriendDetails')}
      />
    );
  };
  const renderOutgoingCard = () => {
    return (
      <FriendRequestCard
        name={'Kamila Thompson '}
        job={'Content Writer'}
        request={'Cancel'}
        onPressRequest={() => addFriendRef.current.show()}
        onPress={() => props.navigation.navigate('FriendDetails')}
      />
    );
  };
  const handleFriendReached=()=>{
    if(friendsData?.friends?.length>8){
      setFriendPage(friendPage+1)
    }
  }
  const updateData=(data)=>{
setPage(data)

  }
  return (
    <ScreenWrapper style={styles.container}>
      <SearchInput placeholder={"Search.."} />
      <PageViewButton data={requestArray} reference={pagerRef} updateData={updateData}/>

      <PagerView
        ref={pagerRef}
        style={styles.pagerView}
        initialPage={0}
        scrollEnabled={false}
      >
        <View key="1">
          <FlatList
            data={friendsData?.data?.friends}
            key={'myconnectionArray'}
            keyExtractor={(item, index) => index}
            renderItem={renderConnectionCard}
            showsVerticalScrollIndicator={false}
            onEndReached={handleFriendReached}
            contentContainerStyle={styles.contentContainer}
          />
        </View>
        <View key="2">
          <FlatList
            data={friendRequest?.data?.friendRequests}
            key={'incomingArray'}
            keyExtractor={(item, index) => index}
            renderItem={renderIncomingCard}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.contentContainer}
          />
        </View>
        <View key="3">
          <FlatList
            data={friendRequest?.data?.friendRequests}
            key={'outgoingArray'}
            keyExtractor={(item, index) => index}
            renderItem={renderOutgoingCard}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.contentContainer}
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
