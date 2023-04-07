import React, {useLayoutEffect} from 'react';
import {View, Image, FlatList, TextInput} from 'react-native';
import { generalImages } from '../../../assets/images';
import FriendNetworkCard from '../../Cards/FriendNetworkCard';
import styles from './styles';

const UserPosts = props => {
  
  const renderFriendCard = () => {
    return (
      <FriendNetworkCard
        onPress={() => props.navigation.navigate('PostByLocation')}
        location={'Approximate Locations'}
        hashtags={"#trends #fashion"}
        clickText={'Add To library'}
        name={'Amelia Isabell'}
        image={generalImages.userImage}
        style={styles.friendNetworkStyle}
      />
    );
  };
  return (
      <FlatList
        data={[1, 2, 3, 4, 5]}
        key={'friendArar'}
        keyExtractor={(item, index) => index}
        contentContainerStyle={styles.flatListContainer}
        renderItem={renderFriendCard}
      />
  );
};
export default UserPosts;
