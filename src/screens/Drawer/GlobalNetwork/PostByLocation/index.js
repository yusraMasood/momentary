import React,{useState} from 'react';
import {View, Image,TextInput} from 'react-native';
import {generalImages, icons} from '../../../../assets/images';
import RobotoMedium from '../../../../components/Texts/RobotoMedium';
import RobotoRegular from '../../../../components/Texts/RobotoRegular';
import ContentContainer from '../../../../components/wrappers/ContentContainer';
import RippleHOC from '../../../../components/wrappers/Ripple';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
import { colors } from '../../../../utils/appTheme';
import styles from './styles';

const PostByLocation = () => {
  const bookImageArray = [1, 2, 3];
  const [like,setLike] =useState(false)
  const [comment,setComment] =useState(false)
  const [share,setShare] =useState(false)

  return (
    <ScreenWrapper style={styles.container}>
      <ContentContainer >
      <View style={styles.userDetailsContainer}>
        <View>
          <RobotoRegular style={styles.nameText}>Anonymous123</RobotoRegular>
          <View style={styles.editContainer}>
            <Image source={icons.edit} style={styles.editIcon} />
            <RobotoRegular style={styles.dateText}>
              {''}January 31, 2022 - 03:00 pm
            </RobotoRegular>
          </View>
        </View>
        <View style={styles.editContainer}>
          <Image source={icons.mapPin} style={styles.locationIcon} />
          <RobotoRegular style={styles.dateText}>
            Approximate Locations
          </RobotoRegular>
        </View>
      </View>
      <RobotoRegular style={styles.descText}>
        Lorem ipsum dolor sit amet, consectetur are it adipiscing elit. Aenean
        euismod bibendum laoreet. Proin gravida dolor sitom
      </RobotoRegular>
      <RobotoMedium style={styles.hashtagText}>#trends #fashion</RobotoMedium>
      <Image source={generalImages.books} style={styles.bookImage} />
      <View style={styles.bookImagecontainer}>
        {bookImageArray.map((value, item) => {
          return (
            <View style={styles.smallBookImageContainer}>
              <Image
                source={generalImages.books}
                style={styles.bookSmallImage}
              />
            </View>
          );
        })}
        </View>
        <View style={styles.likeCountContainer}>
          <View style={styles.likeContainer}>
            <Image source={icons.like} style={styles.likeIcon}/>
            <RobotoMedium style={styles.likeText}>105K</RobotoMedium>
          </View>
          <RobotoMedium style={styles.likeText}>25K Comments . 10K Shares</RobotoMedium>
        </View>

        <View style={styles.likeMainContainer}>
          <RippleHOC  style={styles.likeBtnContaienr}>
            <Image source={icons.likeBtn} style={styles.iconLike}/>
            <RobotoMedium style={[styles.commentText, like && styles.likeFocusIcon]}>Like</RobotoMedium>
          </RippleHOC>
          <RippleHOC style={styles.likeBtnContaienr}>
            <Image source={icons.commentBtn} style={styles.iconLike}/>
            <RobotoMedium style={styles.commentText}>Comment</RobotoMedium>
          </RippleHOC> 
           <RippleHOC style={styles.likeBtnContaienr}>
            <Image source={icons.share} style={styles.iconLike}/>
            <RobotoMedium style={styles.commentText}>Share</RobotoMedium>
          </RippleHOC>

        </View>
        <View style={styles.textInputContainer}>
        <Image source={generalImages.userImage} style={styles.userImage}/>
        <View style={styles.inputContainer}>
        <TextInput
        placeholder='Write a comment..'
        placeholderTextColor={colors.input.greyPlaceholder}
        style={styles.input}
        />
        <Image source={icons.send} style={styles.sendIcon}/>
        </View>
      </View>
        </ContentContainer>
    </ScreenWrapper>
  );
};
export default PostByLocation;
