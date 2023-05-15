import React, {useLayoutEffect,useState,useCallback} from 'react';
import {View, Image, FlatList, TextInput,RefreshControl} from 'react-native';
import { generalImages } from '../../../assets/images';
import FriendNetworkCard from '../../Cards/FriendNetworkCard';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import EmptyComponent from '../../EmptyComponent';

const UserPosts = props => {
  const [refreshing,setRefreshing] =useState()
  const navigation =useNavigation()
  
  const renderFriendCard = ({item}) => {
    console.log(" item ",item);
    return (
      <FriendNetworkCard
      onPressFriend={()=>navigation.navigate('FriendDetails',{id: item?.user?._id})}
        onPress={() => navigation.navigate('PostByLocation')}
        clickText={props.clickText}
        name={item?.user?.fullName}
        content={item?.content}
        location={item?.location?.name}
        hashtags={item?.hashtags}
        createdAt={item?.createdAt}
        image={generalImages.userImage}
        style={styles.friendNetworkStyle}
        id={item?._id}
        friendId={item?.friend?._id}
      />
    );
  };
  const renderEmpty=()=>{
    return(
      <EmptyComponent text="No friends Posts to show "/>
    )
  }
  const onRefresh = useCallback(() => {
    setRefreshing(true)
    props?.refetch();
    setRefreshing(false)
  }, []);
  return (
      <FlatList
        data={props.array}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        key={'friendArar'}
        keyExtractor={(item, index) => index}
        contentContainerStyle={styles.flatListContainer}
        renderItem={renderFriendCard}
        ListEmptyComponent={renderEmpty}
      />
  );
};
export default UserPosts;
