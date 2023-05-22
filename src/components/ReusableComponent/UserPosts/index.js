import React, {useLayoutEffect, useState, useCallback} from 'react';
import {View, Image, FlatList, TextInput, RefreshControl} from 'react-native';
import {generalImages} from '../../../assets/images';
import FriendNetworkCard from '../../Cards/FriendNetworkCard';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import EmptyComponent from '../../EmptyComponent';
import CustomSkeleton from '../../Loaders/CustomSkeleton';
import {vh, vw} from '../../../utils/dimensions';

const UserPosts = props => {
  const [refreshing, setRefreshing] = useState();
  const navigation = useNavigation();

  const renderFriendCard = ({item}) => {
    console.log(" item",item?.content);
    return (
      <FriendNetworkCard
        onPressFriend={() =>
          navigation.navigate('FriendDetails', {id: item?.user?._id})
        }
        onPress={() => navigation.navigate('PostByLocation')}
        clickText={item?.isfavorite?"Added to Library": props.clickText}
        name={item?.user?.fullName}
        content={item?.content}
        location={item?.location?.name}
        hashtags={item?.hashtags}
        createdAt={item?.createdAt}
        image={generalImages.userImage}
        style={styles.friendNetworkStyle}
        id={item?._id}
        loader={props.isLoading}
        // friendId={item?.friend?._id}
      />
    );
  };
  const renderEmpty = () => {
    return <EmptyComponent text="No friends Posts to show " />;
  };
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    props?.refetch();
    setRefreshing(false);
  }, []);
  const handleOnEndReached = () => {
    if (props?.array?.length > 6) {
      if (props.page <= props?.totalPages) {
        props.setPage(props.page + 1);
      }
    }
  };
  const renderFooter = () => {
    <View>
      {props.isFetching &&
        [1, 2, 3, 4].map(() => {
          return <CustomSkeleton height={15} width={88} marginTop={vh * 2} />;
        })}
    </View>;
  };
  return (
    <FlatList
      data={props.isLoading ? [1, 2, 3, 4] : props.array}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      key={'UserPostsArray'}
      keyExtractor={(item, index) => item?._id}
      onEndReached={handleOnEndReached}
      contentContainerStyle={styles.flatListContainer}
      renderItem={renderFriendCard}
      ListEmptyComponent={renderEmpty}
      ListFooterComponent={renderFooter}
    />
  );
};
export default UserPosts;
