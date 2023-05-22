import React, {useState, useCallback} from 'react';
import {View, Image, TextInput, RefreshControl} from 'react-native';
import {generalImages, icons} from '../../../../assets/images';
import LikeCommentCard from '../../../../components/Cards/LikeCommentCard';
import RobotoMedium from '../../../../components/Texts/RobotoMedium';
import RobotoRegular from '../../../../components/Texts/RobotoRegular';
import ContentContainer from '../../../../components/wrappers/ContentContainer';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
import styles from './styles';
import ContentLoader from '../../../../components/Loaders/ContentLoader';
import {usePostCommentEntryMutation} from '../../../../state/entry';
import moment from 'moment';
import RenderHtmlComponent from '../../../../components/ReusableComponent/RenderHtmlComponent';
import CommentInput from '../../../../components/Inputs/CommentInput';
import {Toast, showToast} from '../../../../Api/APIHelpers';
import ImageView from 'react-native-image-viewing';
import {
  useGetFeedDetailsQuery,
  usePostRemoveFriendRequestMutation,
  usePostSendFriendRequestMutation,
} from '../../../../state/friends';
import RippleHOC from '../../../../components/wrappers/Ripple';
import ButtonLoading from '../../../../components/Loaders/ButtonLoading';
import useProfile from '../../../../hooks/useProfile';

const PostByLocation = props => {
  const [comment, setComment] = useState('');
  const [visible, setIsVisible] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [postRemoveFriendRequest,removeRequestInfo]= usePostRemoveFriendRequestMutation()
  const [postCommentEntry, commentDetails] = usePostCommentEntryMutation();
  const [
    postSendFriendRequest,
    requestInfo,
  ] = usePostSendFriendRequestMutation();

  const {
    data: postDetail,
    isLoading,
    isFetching,
    error,
    refetch,
  } = useGetFeedDetailsQuery(props?.route?.params?.id);
  console.log("postDetail", postDetail?.feed);
  
  const addComment = () => {
    if (comment === '') {
      return Toast.error('Please Write Comment before submitting..');
    }
    postCommentEntry({
      id: props?.route?.params?.id,
      parentComment: null,
      content: comment,
    }).then(res => {
      if (res?.data) {
        refetch();
        Toast.success('Comment added Successfully');
        setComment('');
      } else {
        Toast.error(res?.error?.message);
      }
    });
  };
  const sendFriendRequest = () => {
    // console.log(postDetail?.feed?.user?.network?.requestType==="sent",postDetail?.feed?.user?.network?.requestType);
    postDetail?.feed?.user?.network?.requestType==="sent"?

    postRemoveFriendRequest(postDetail?.feed?.user?._id).then((res)=>{
      console.log("postDetail?.feed?.user?._id",postDetail?.feed?.user?._id)
          if (res?.data) {
            Toast.success(res?.data?.message);
            refetch();
          }
          if (res?.error?.data) {
            Toast.error(res?.error?.data);
          }
    
        })
    :postDetail?.feed?.user?.network===null?
    postSendFriendRequest({friend: postDetail?.feed?.user?._id}).then(res => {
      if (res?.data) {
        Toast.success(res?.data?.message);
        refetch()
      }
      if (res?.error) {
        Toast.error(res?.error?.data?.message);
      }
    }): null
  };

  const renderImages = () => {
    return (
      <RippleHOC onPress={() => setIsVisible(true)}>
        {postDetail?.feed?.images.length > 0 && (
          <Image
            source={
              postDetail?.feed?.images[0]?.thumbnail
                ? {uri: postDetail?.feed?.images[0]?.thumbnail}
                : generalImages.defaultImage
            }
            style={styles.bookImage}
          />
        )}
        <View style={styles.bookImagecontainer}>
          {postDetail?.feed?.images.length > 1 &&
            postDetail?.feed?.images.slice(1).map((value, index) => {
              return (
                <View style={styles.smallBookImageContainer}>
                  {index === 2 ? (
                    <View>
                      <Image
                        style={[styles.bookSmallImage]}
                        source={
                          value?.thumbnail
                            ? {uri: value?.thumbnail}
                            : generalImages.defaultImage
                        }
                      />
                      <View style={styles.imgStyle}>
                        <RobotoMedium style={styles.numberText}>
                          +{postDetail?.feed?.images.length - 2}
                        </RobotoMedium>
                      </View>
                    </View>
                  ) : (
                    <Image
                      source={
                        value?.thumbnail
                          ? {uri: value?.thumbnail}
                          : generalImages.defaultImage
                      }
                      style={styles.bookSmallImage}
                    />
                  )}
                </View>
              );
            })}
        </View>
      </RippleHOC>
    );
  };
  // const handlePostRefresh=()=>{
  //   setRefreshing(true);
  //   refetch();
  //   setRefreshing(false);
  // }
  const onRefresh = useCallback(() => {
    refetch();
  }, []);
  const userFriendRequest=()=>{
    if(requestInfo.isLoading)
    {
      return(
        <ButtonLoading />

      )
    }
    if(removeRequestInfo.isLoading)
    {
      return(
        <ButtonLoading />

      )
    }
    return(
      <RippleHOC onPress={sendFriendRequest}>
        {
          postDetail?.feed?.user?.network?.status!=="friend"&&
          <Image
            source={postDetail?.feed?.user?.network==null ? icons.addfriend:postDetail?.feed?.user?.network?.requestType==="sent"?icons.requestSent :icons.addfriend}
            style={styles.addFriendIcon}
          />

        }
      </RippleHOC>

    )
      
    
  }
  return (
    <ScreenWrapper style={styles.container}>
      <ContentContainer
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {isLoading ? (
          <ContentLoader />
        ) : error ? (
          <RobotoRegular style={styles.nameText}>
            {error?.data?.message}
          </RobotoRegular>
        ) : (
          <View>
            <View style={styles.userDetailsContainer}>
             {userFriendRequest()}
              <View>
                <RobotoRegular style={styles.nameText}>
                  {postDetail?.feed?.user?.fullName}
                </RobotoRegular>
                <View style={styles.editContainer}>
                  <Image source={icons.edit} style={styles.editIcon} />
                  <RobotoRegular style={styles.dateText}>
                    {moment(postDetail?.feed?.createdAt).format(
                      'MMMM DD, YYYY - HH:MM A',
                    )}
                  </RobotoRegular>
                </View>
              </View>

              <View style={styles.editContainer}>
                <Image source={icons.mapPin} style={styles.locationIcon} />
                <RobotoRegular style={styles.dateText} numberOfLines={1}>
                  {postDetail?.feed?.location?.name}
                </RobotoRegular>
              </View>
            </View>
            <RenderHtmlComponent content={postDetail?.feed?.content} />
            <View style={styles.hashtagMainContainer}>
              {postDetail?.feed?.hashtags?.slice(0, 2).map((value, index) => {
                return (
                  <RobotoMedium style={styles.hashtagText}>
                    #{value}
                  </RobotoMedium>
                );
              })}
            </View>
            {renderImages()}

            <LikeCommentCard
              totalLikes={postDetail?.feed?.reactions.length}
              totalComments={postDetail?.feed?.totalComments}
              totalShares={postDetail?.feed?.totalShares}
              isLiked={postDetail?.feed?.isLike}
              comments={postDetail?.feed?.comments}
              id={props?.route?.params?.id}
              entryDetail={postDetail?.feed}
              refetch={refetch}
              // isReacted={postDetail?.feed?.isReacted}
              reactions={postDetail?.feed?.reactions}
              
            />
          </View>
        )}
      </ContentContainer>
      <View style={styles.footerContainer}>
        <CommentInput
          value={comment}
          onChangeText={setComment}
          addComment={addComment}
          onSubmitEditing={addComment}
          loader={commentDetails?.isLoading}
          // image={profile?.image?.thumbnail}
        />
      </View>
      <ImageView
        images={postDetail?.feed?.images}
        imageIndex={0}
        visible={visible}
        onRequestClose={() => setIsVisible(false)}
      />
    </ScreenWrapper>
  );
};
export default PostByLocation;
