import React, {useLayoutEffect,useState,useCallback} from 'react';
import {View, Image, FlatList, TextInput,RefreshControl} from 'react-native';
import { generalImages } from '../../../assets/images';
import FriendNetworkCard from '../../Cards/FriendNetworkCard';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import EmptyComponent from '../../EmptyComponent';
import CustomSkeleton from '../../Loaders/CustomSkeleton';
import { vh, vw } from '../../../utils/dimensions';

const UserPosts = props => {
  const [refreshing,setRefreshing] =useState()
  const navigation =useNavigation()
  
  const renderFriendCard = ({item}) => {
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
        // friendId={item?.friend?._id}
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
  const handleOnEndReached=()=>{
    console.log(" hgello");
    if (props.array.length > 6) {
    console.log(" hgello 2",props.page<=props?.totalPages,props.page,props?.totalPages);

      if(props.page<=props?.totalPages )
      {
    console.log(" hgello 3");

        props.setPage(props.page + 1);
      }
    }
  }
  const renderFooter=()=>{
    <View>
    {props.isFetching && [1,2,3,4].map((value,index)=>{
      return(
        <CustomSkeleton
        height={88}
        width={30}
        marginTop={vh * 2}
        // marginRight={vw * 4}
        marginLeft={vw * 2}
      />
        
      )
    })}
  </View>
  }
  return (
      <FlatList
        data={props.array}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        key={'friendArar'}
        keyExtractor={(item, index) => index}
        onEndReached={handleOnEndReached}
        contentContainerStyle={styles.flatListContainer}
        renderItem={renderFriendCard}
        ListEmptyComponent={renderEmpty}
        ListFooterComponent={renderFooter}
      />
  );
};
export default UserPosts;
