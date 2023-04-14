import React, {useLayoutEffect} from 'react';
import {View, Image, FlatList, TextInput} from 'react-native';
import { generalImages } from '../../../assets/images';
import FriendNetworkCard from '../../Cards/FriendNetworkCard';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

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
