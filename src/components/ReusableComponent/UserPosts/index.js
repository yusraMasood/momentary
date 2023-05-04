import React, {useLayoutEffect} from 'react';
import {View, Image, FlatList, TextInput} from 'react-native';
import { generalImages } from '../../../assets/images';
import FriendNetworkCard from '../../Cards/FriendNetworkCard';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import EmptyComponent from '../../EmptyComponent';

const UserPosts = props => {
  const navigation =useNavigation()
  
  const renderFriendCard = () => {
    return (
      <FriendNetworkCard
      onPressFriend={()=>navigation.navigate('FriendDetails')}
        onPress={() => navigation.navigate('PostByLocation')}
        location={'Approximate Locations'}
        hashtags={"#trends #fashion"}
        clickText={'Add To library'}
        name={'Amelia Isabell'}
        image={generalImages.userImage}
        style={styles.friendNetworkStyle}
      />
    );
  };
  const renderEmpty=()=>{
    return(
      <EmptyComponent text="No friends Posts to show "/>
    )
  }
  return (
      <FlatList
        data={props.array}
        key={'friendArar'}
        keyExtractor={(item, index) => index}
        contentContainerStyle={styles.flatListContainer}
        renderItem={renderFriendCard}
        ListEmptyComponent={renderEmpty}
      />
  );
};
export default UserPosts;
