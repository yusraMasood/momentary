import React,{useState} from 'react'
import { View,Image } from 'react-native'
import { generalImages } from '../../../assets/images'
import RobotoRegular from '../../Texts/RobotoRegular'
import RippleHOC from '../../wrappers/Ripple'
import styles from './styles'
import ListLoader from '../../Loaders/ListLoader'
import ButtonLoading from '../../Loaders/ButtonLoading'
import { Toast } from '../../../Api/APIHelpers'
import { usePostAddFriendMutation, usePostRemoveFriendMutation, usePostRemoveFriendRequestMutation, } from '../../../state/friends'

const FriendRequestCard=(props)=>{
    const [postAddFriend, addfriend] = usePostAddFriendMutation();
    const [postRemoveFriend] =usePostRemoveFriendMutation()
    const [postRemoveFriendRequest]= usePostRemoveFriendRequestMutation()
    const [removeFriendLoader,setRemoveFriendLoader] =useState(false)

    const respondRequest = ( action) => {
        postAddFriend({id:props.friendRequestId, action}).then(res => {
        console.log("response accept or decline Request",res);

          if (res?.data) {
            Toast.success(res?.data?.message);
            props?.refetch();
            
          }
          if (res?.error?.data) {
            // console.log("erro");
            Toast.error(res?.error?.data);
          }
        });
      };
      
  const removeFriend=()=>{
    setRemoveFriendLoader(true)
    console.log(props.friendRequestId);

    postRemoveFriend(props.friendRequestId).then((res)=>{
        console.log("response remove friend",res);
    setRemoveFriendLoader(false)

      if (res?.data) {
        Toast.success(res?.data?.message);
        props?.refetch();
      }
      if (res?.error?.data) {

        Toast.error(res?.error?.data);
      }

    })



  }
  const cancelRequest=()=>{
    setRemoveFriendLoader(true)
    postRemoveFriendRequest(props.friendRequestId).then((res)=>{
        console.log("response cancel Request",res);
    setRemoveFriendLoader(false)

        if (res?.data) {
          Toast.success(res?.data?.message);
          props?.refetch();
        }
        if (res?.error?.data) {
          Toast.error(res?.error?.data);
        }
  
      })

  }
    return(
        <View>
            {props.loader?
            
        <ListLoader/>

        :
        <View  style={styles.friendContainer}>
            
        <RippleHOC onPress={props.onPress}  style={styles.imageWithNameContainer}>
    <View style={styles.imageContainer}>
        <Image source={props.image?{uri: props.image}: generalImages.userImage} style={styles.userImage}/>
    </View>
    <View style={styles.nameContainer}> 
        <RobotoRegular style={styles.nameText}>{props.name}</RobotoRegular>
        <RobotoRegular style={styles.jobText}>{props.job}</RobotoRegular>

    </View>
    </RippleHOC>
    {props.request ?(
         removeFriendLoader?
         <ButtonLoading/>:
           <RippleHOC onPress={()=> props.request=="Cancel"?cancelRequest(): removeFriend()}>
           <RobotoRegular style={styles.requestBtnText}>{props.request}</RobotoRegular>
       </RippleHOC>
    )
    :
<View>
    {addfriend?.isLoading?
<ButtonLoading/>
    :
    <View style={styles.requestContainer}>
        
    <RippleHOC onPress={()=> respondRequest("accept")}>
    <RobotoRegular style={styles.acceptText}>Accept</RobotoRegular>
    </RippleHOC>
    <RippleHOC onPress={()=> respondRequest("decline")}>
    <RobotoRegular style={styles.rejectText}>Decline</RobotoRegular>
    </RippleHOC>
</View>

}
   
    </View>
  
    
}
</View>

        }
       
    </View>
    )
}
export default FriendRequestCard