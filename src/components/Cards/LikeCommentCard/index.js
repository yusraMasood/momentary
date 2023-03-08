import React,{useState} from 'react'
 import { View,Image,TextInput } from 'react-native'
import { generalImages, icons } from '../../../assets/images'
import { colors } from '../../../utils/appTheme'
import RobotoMedium from '../../Texts/RobotoMedium'
import RippleHOC from '../../wrappers/Ripple'
import styles from './styles'


 const LikeCommentCard=(props)=>{
    const [like,setLike] =useState(false)
  const [comment,setComment] =useState(false)
  const [share,setShare] =useState(false)
    return(
        <View>
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
           <RippleHOC onPress={props.onPressShare} style={styles.likeBtnContaienr}>
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
        </View>
    )
 }
 export default LikeCommentCard