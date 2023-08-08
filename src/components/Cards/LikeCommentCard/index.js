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
import SuccessPopup from '../../popups/SuccessPopup'
import { useNavigation } from '@react-navigation/native'
import useProfile from '../../../hooks/useProfile'
import { userProfile } from '../../../state/auth'


 const LikeCommentCard=(props)=>{
  const navigation =useNavigation()
  const profile=userProfile()
  const [visiblity,setVisiblity]=useState("")
  const [postShareEntry] = usePostShareEntryMutation()
  const {shareEntry} =useEntry()

  const [postCommentEntry] =usePostCommentEntryMutation()
  const [postLikeEntry,message]=usePostLikeEntryMutation()
    const [like,setLike] =useState(props.isReacted)
    const [selectedPeople,setSelectedPeople] =useState([])
    const [selectedPeopleId,setSelectedPeopleId] =useState([])
  const [comment,setComment] =useState("")
  const shareRef=useRef(null)
  const networkRef=useRef(null)
  const successRef=useRef(null)
  // console.log("props reactions", props.reactions,profile);
  const onPressLike=()=>{
    postLikeEntry(props?.id).then(res=>{
      console.log("res",res);
      if(res?.data)
      {
       props.refetch()
        setLike(!like)
        
      }
      else{
        Toast.error("Something went wrong")
      }
    })
  }
  const onSpecificPeople=()=>{
    networkRef.current.show()

  }
  const onGlobalPeople=()=>{
    shareEntry({journalEntry: props.entryDetail,privacy:"public"}).then((res)=>{
      successRef.current.show()
    })

  }
  const onMyNetwork=()=>{
    shareEntry({journalEntry: props.entryDetail,privacy:"myNetwork", selectedPeopleId}).then((res)=>{
      successRef.current.show()
    })
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
        <View style={styles.commentOuterContainer}>
          {props.comments &&props.comments.map((value,index)=>{
            return(
              <View style={styles.commentMainContainer}>
                <Image source={value?.user?.image?.thumbnail?{uri: value?.user?.image?.thumbnail}:generalImages?.userImage} style={styles.userImage}/>
                <View style={styles.commentInnerContainer}>
                  <RobotoRegular style={styles.usernameText}>{value?.user?.fullName}</RobotoRegular>
                  <RobotoRegular style={styles.userCommentText}> 
                 {value?.content} </RobotoRegular>
                  </View>
              </View>
            )
          })}
          </View>
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
      <SuccessPopup
      reference={successRef}
      desc={"Entry is Shared Successfully! "}
      title={"Entry Shared"}
      onAccept={()=> navigation.goBack()}

      />
      {/* <CommentInput/> */}
        </View>
    )
 }
 export default LikeCommentCard