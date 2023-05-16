import React,{useState} from 'react';
import {View, Image,TextInput} from 'react-native';
import {generalImages, icons} from '../../../../assets/images';
import LikeCommentCard from '../../../../components/Cards/LikeCommentCard';
import RobotoMedium from '../../../../components/Texts/RobotoMedium';
import RobotoRegular from '../../../../components/Texts/RobotoRegular';
import ContentContainer from '../../../../components/wrappers/ContentContainer';
import RippleHOC from '../../../../components/wrappers/Ripple';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
import { colors } from '../../../../utils/appTheme';
import styles from './styles';
import ContentLoader from '../../../../components/Loaders/ContentLoader';
import { useGetEntryByIdQuery, usePostCommentEntryMutation } from '../../../../state/entry';
import moment from 'moment';
import RenderHtmlComponent from '../../../../components/ReusableComponent/RenderHtmlComponent';
import CommentInput from '../../../../components/Inputs/CommentInput';
import { Toast } from '../../../../Api/APIHelpers';

const PostByLocation = (props) => {
  // console.log("props?.route?.params?.id",props?.route?.params?.id);
  const [comment,setComment] =useState("")
  const [postCommentEntry,commentDetails] =usePostCommentEntryMutation()

  const {data: entryDetails, isLoading,isFetching,error} =useGetEntryByIdQuery(props?.route?.params?.id)
  const bookImageArray = [1, 2, 3];
  // const [like,setLike] =useState(false)
  // const [comment,setComment] =useState(false)
  // const [share,setShare] =useState(false)
  console.log("entryDetails",entryDetails);

  const addComment=()=>{
    if(comment==="")
    {
     return Toast.error("Please Write Comment before submitting..")
    }
    postCommentEntry({id: props?.route?.params?.id,parentComment:null, content: comment}).then((res)=>{
      console.log("res",res);
      if(res?.data)
      {
        Toast.success("Comment added Successfully")

      }
    })

    
  }

  const renderImages=()=>{
   
    return(
      <View>
         {entryDetails?.journalEntry?.images.length>0 &&
        <Image source={entryDetails?.journalEntry?.images[0]?.thumbnail?{uri:entryDetails?.journalEntry?.images[0]?.thumbnail}:generalImages.defaultImage} style={styles.bookImage} />
         }
         
      <View style={styles.bookImagecontainer}>
        {entryDetails?.journalEntry?.images.length>1&&entryDetails?.journalEntry?.images.slice(1).map((value, item) => {
          return (
            <View style={styles.smallBookImageContainer}>
              <Image
                source={value?.thumbnail?{uri: value?.thumbnail}: generalImages.defaultImage}
                style={styles.bookSmallImage}
              />
            </View>
          );
        })}
        </View>
      
      </View>
      
      
    )
  }

  return (
    <ScreenWrapper style={styles.container}>
      <ContentContainer >
        {isLoading?
      <ContentLoader/>:
        <View>
           <View style={styles.userDetailsContainer}>
        <View>
          <RobotoRegular style={styles.nameText}>{entryDetails?.journalEntry?.user?.fullName}</RobotoRegular>
          <View style={styles.editContainer}>
            <Image source={icons.edit} style={styles.editIcon} />
            <RobotoRegular style={styles.dateText}>
              {/* {''}January 31, 2022 - 03:00 pm */}
              {moment(entryDetails?.journalEntry?.createdAt).format("MMMM DD, YYYY - HH:MM A")}
            </RobotoRegular>
          </View>
        </View>
        <View style={styles.editContainer}>
          <Image source={icons.mapPin} style={styles.locationIcon} />
          <RobotoRegular style={styles.dateText} numberOfLines={1}>
            {entryDetails?.journalEntry?.location?.name}
          </RobotoRegular>
        </View>
      </View>
     <RenderHtmlComponent content={entryDetails?.journalEntry?.content}/>
     {entryDetails?.journalEntry?.hashtags?.slice(0, 2).map((value, index) => {
              return (
                <RobotoMedium style={styles.hashtagText} >
                  #{value}
                </RobotoMedium>
              );
            })}
      {/* <RobotoMedium style={styles.hashtagText}>#trends #fashion</RobotoMedium> */}
      {renderImages()}
     
      
        <LikeCommentCard
        totalLikes={entryDetails?.journalEntry?.totalLikes}
        totalComments={entryDetails?.journalEntry?.totalComments}
        totalShares={entryDetails?.journalEntry?.totalShares}
        isLiked={entryDetails?.journalEntry?.isLike}
        comments={entryDetails?.journalEntry?.comments}
        id={props?.route?.params?.id}
        entryDetail={entryDetails?.journalEntry}
        />
       <CommentInput 
       value={comment} 
       onChangeText={setComment}
       addComment={addComment}
       />
        </View>
      }
     
    
        </ContentContainer>
    </ScreenWrapper>
  );
};
export default PostByLocation;
