import React, {useState,useCallback} from 'react';
import {View, Image, TextInput,RefreshControl} from 'react-native';
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
import {useGetFeedDetailsQuery, usePostSendFriendRequestMutation} from '../../../../state/friends';
import CustomButton from '../../../../components/Buttons/CustomButton';
import RippleHOC from '../../../../components/wrappers/Ripple';
import ButtonLoading from '../../../../components/Loaders/ButtonLoading';

const PostByLocation = props => {
  // console.log("post by id",props?.route?.params?.id);
  const [comment, setComment] = useState('');
  const [refreshing,setRefreshing] =useState(false)
  const [postCommentEntry, commentDetails] = usePostCommentEntryMutation();
  const [postSendFriendRequest, requestInfo]= usePostSendFriendRequestMutation()
  const [requestSent,setRequestSent] =useState(false)

  const {
    data: postDetail, 
    isLoading,
    isFetching,
    error,
    refetch,
  } = useGetFeedDetailsQuery(props?.route?.params?.id);
  // console.log("postDetail error",postDetail);
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
  const sendFriendRequest=()=>{
    // console.log("ddpdjodjopd",postDetail);
    postSendFriendRequest({friend: postDetail?.feed?.user?._id}).then((res)=>{
      console.log("send friend request",res);
      if(res?.data){
        showToast(res?.data?.message)
        setRequestSent(true)
      }
      if(res?.error)
      {
        Toast.error(res?.error?.data?.message)
      }

    })


  }

  const renderImages = () => {
    return (
      <View>
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
            postDetail?.feed?.images.slice(1).map((value, item) => {
              return (
                <View style={styles.smallBookImageContainer}>
                  <Image
                    source={
                      value?.thumbnail
                        ? {uri: value?.thumbnail}
                        : generalImages.defaultImage
                    }
                    style={styles.bookSmallImage}
                  />
                </View>
              );
            })}
        </View>
      </View>
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
  return (
    <ScreenWrapper style={styles.container}>
      <ContentContainer
        //  onRefresh={handlePostRefresh}
        //  refreshing={refreshing}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {isLoading ? (
          <ContentLoader />
        ) :error?
        <RobotoRegular style={styles.nameText}>{error?.data?.message}</RobotoRegular>
        : (
          <View>
             {/* <CustomButton text="Add Friend"/> */}
            <View style={styles.userDetailsContainer}>
              {
                requestInfo.isLoading?
<ButtonLoading/>
:
              <RippleHOC onPress={sendFriendRequest}>
                
            <Image source={requestSent?icons.requestSent:  icons.addfriend} style={styles.addFriendIcon}/>
              </RippleHOC>
              }
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
            {/* <RobotoMedium style={styles.hashtagText}>#trends #fashion</RobotoMedium> */}
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
              isReacted={postDetail?.feed?.isReacted}
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
      />
      </View>
    </ScreenWrapper>
  );
};
export default PostByLocation;
