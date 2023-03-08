import React, {useLayoutEffect} from 'react';
import {View, Image, FlatList, TextInput} from 'react-native';
import {generalImages, icons} from '../../../../assets/images';
import FriendNetworkCard from '../../../../components/Cards/FriendNetworkCard';
import DamionRegular from '../../../../components/Texts/DamionRegular';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
import styles from './styles';

const LibraryFavouriteContent = props => {
  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerTitle: () => {
        return (
          <DamionRegular style={styles.titleCenterText}>
            {props.route?.params?.type}
          </DamionRegular>
        );
      },
    });
  }, [props.navigation]);
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
    <ScreenWrapper style={styles.container}>
      <FlatList
        data={[1, 2, 3, 4, 5]}
        key={'friendArar'}
        keyExtractor={(item, index) => index}
        contentContainerStyle={styles.flatListContainer}
        renderItem={renderFriendCard}
      />
    </ScreenWrapper>
  );
};
export default LibraryFavouriteContent;
