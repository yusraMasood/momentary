import React,{useState,useRef} from 'react'
 import { View,Image,TextInput,Share } from 'react-native'
import { generalImages, icons } from '../../../assets/images'
import { colors } from '../../../utils/appTheme'
import RobotoMedium from '../../Texts/RobotoMedium'
import RippleHOC from '../../wrappers/Ripple'
import styles from './styles'
import RobotoRegular from '../../Texts/RobotoRegular'
import { usePostCommentEntryMutation, usePostLikeEntryMutation, usePostShareEntryMutation } from '../../../state/entry'
import { Toast } from '../../../Api/APIHelpers'
import CommentInput from '../../Inputs/CommentInput'
import SharePopup from '../../popups/SharePopup'
import MyNetworkPopup from '../../popups/MyNetworkPopup'
import useEntry from '../../../hooks/useEntry'


 const LikeCommentCard=(props)=>{
  const [visiblity,setVisiblity]=useState("")
  const [postShareEntry] = usePostShareEntryMutation()
  const {shareEntry} =useEntry()

  const [postCommentEntry] =usePostCommentEntryMutation()
  const [postLikeEntry,message]=usePostLikeEntryMutation()
    const [like,setLike] =useState(false)
    const [selectedPeople,setSelectedPeople] =useState([])
    const [selectedPeopleId,setSelectedPeopleId] =useState([])
  const [comment,setComment] =useState("")
  const shareRef=useRef(null)
  const networkRef=useRef(null)
  
  const onPressLike=()=>{
    postLikeEntry(props?.id).then(res=>{
      if(res?.data)
      {
        setLike(!like)
      }
      else{
        Toast.error("Something went wrong")
      }
    })
  }
  // const addComment=()=>{
  //   if(comment==="")
  //   {
  //    return Toast.error("Please Write Comment before submitting..")
  //   }
  //   postCommentEntry({id: props?.id, comment}).then((res)=>{
  //     console.log("res",res);
  //     if(res?.data)
  //     {
  //     }
  //   })
  // }
  const onSpecificPeople=()=>{
    networkRef.current.show()
    // setVisiblity("")

  }
  const onGlobalPeople=()=>{
    // setVisiblity("public")
    shareEntry({journalEntry: props.entryDetail,privacy:"public"})

  }
  const onMyNetwork=()=>{
    // setVisiblity("myNetwork")
    shareEntry({journalEntry: props.entryDetail,privacy:"myNetwork", selectedPeopleId})
    // networkRef.current.show()
  }
    return(
        <View style={styles.container}>
             <View style={styles.likeCountContainer}>
          <View style={styles.likeContainer}>
            <Image source={icons.like} style={styles.likeIcon}/>
            <RobotoMedium style={styles.likeText}>{props.totalLikes}</RobotoMedium>
          </View>
          <RobotoMedium style={styles.likeText}>{props.totalComments} Comments . {props.totalShares} Shares</RobotoMedium>
        </View>

        <View style={styles.likeMainContainer}>
          <RippleHOC onPress={onPressLike}  style={styles.likeBtnContaienr}>
            <Image source={like? icons?.like: icons.likeBtn} style={[styles.iconLike]}/>
            <RobotoMedium style={[styles.commentText, like && styles.likeFocusIcon]}>{like? "Liked":"Like"}</RobotoMedium>
          </RippleHOC>
          <RippleHOC style={styles.likeBtnContaienr}>
            <Image source={icons.commentBtn} style={styles.iconLike}/>
            <RobotoMedium style={styles.commentText}>Comment</RobotoMedium>
          </RippleHOC> 
           <RippleHOC onPress={()=> shareRef.current.show()}  style={styles.likeBtnContaienr}>
            <Image source={icons.share} style={styles.iconLike}/>
            <RobotoMedium style={styles.commentText}>Share</RobotoMedium>
          </RippleHOC>

        </View>
          {[1,2,3,4,5,6,7].map((value,index)=>{
            return(
              <View style={styles.commentMainContainer}>
                <Image source={generalImages?.userImage} style={styles.userImage}/>
                <View style={styles.commentInnerContainer}>
                  <RobotoRegular style={styles.usernameText}>Oliver James</RobotoRegular>
                  <RobotoRegular style={styles.userCommentText}> 
                  Lorem ipsum dolor sit amet, consectetur are it adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sitom
                  </RobotoRegular>
                  </View>
              </View>
            )
          })}
      <SharePopup
      reference={shareRef}
      onPressSpecific={onSpecificPeople}
      onPressNetwork={onMyNetwork}
      onPressGlobal={onGlobalPeople}

      />     
      <MyNetworkPopup
      reference={networkRef}
      onAccept={onMyNetwork}
      selectedPeople={selectedPeople}
      setSelectedPeople={setSelectedPeople}
      selectedPeopleId={selectedPeopleId}
      setSeelectedPeopleId={setSelectedPeopleId} 
      
      />
      {/* <CommentInput/> */}
        </View>
    )
 }
 export default LikeCommentCard