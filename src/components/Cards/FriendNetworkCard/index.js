import React from 'react';
import {Image, View,useWindowDimensions} from 'react-native';
import {generalImages, icons} from '../../../assets/images';
import PoppinsRegular from '../../Texts/PoppinsRegular';
import RobotoMedium from '../../Texts/RobotoMedium';
import RobotoRegular from '../../Texts/RobotoRegular';
import RenderHtml from 'react-native-render-html';
import RippleHOC from '../../wrappers/Ripple';
import styles from './styles';
import moment from 'moment';
import { Toast } from '../../../Api/APIHelpers';
import { usePostAddToLibraryMutation, usePostDeleteEntryMutation } from '../../../state/entry';
import { vw } from '../../../utils/dimensions';
import CustomSkeleton from '../../Loaders/CustomSkeleton';
import vh from '../../AddressField/AddressPicker/Units/vh';
const FriendNetworkCard = (props) => {
  const [postDeleteEntry, message] = usePostDeleteEntryMutation();
  const [postAddToLibrary,addtoLibraryMessage]= usePostAddToLibraryMutation()
  // const {width} = useWindowDimensions();
  const source = {
    html: `${props.content}`,
  };
  const defaultTextProps = {
    numberOfLines: 4,
  };
  const deleteEntry = () => {
    postDeleteEntry(props.id).then((res)=>{
      if(res?.data?.message)
      {
        Toast.success(res?.data?.message)
        if (props.refetch) {
          props.refetch();
        }
      }
      if(res?.error?.data)
      {
        Toast.error(res?.data?.data)
      }
      
    });

   
  };
  console.log("addtoLibraryMessage",addtoLibraryMessage);
  const addToLibrary=()=>{
    console.log(props.id);
    postAddToLibrary(props.id).then((res)=>{
      console.log("tresss",res);
      if(res?.data?.message)
      {
        Toast.success(res?.data?.message)
        if (props.refetch) {
          props.refetch();
        }
      }
      if(res?.error?.data)
      {
        Toast.success(res?.data?.data)
      }
      
    });

  }
  const onClickText=()=>{
    console.log(props.clickText);
    if(props.clickText=="Remove Entry")
    {
      // deleteEntry()

    }
    // if()
    else{
      console.log("jrojro");
      addToLibrary()

    }
  }
  return (
    <View style={[styles.container,props.style]}>
      {props.loader?
    <CustomSkeleton
    height={15}
    width={88}
    marginTop={vh*2}
    />  :

    <View>
       <RippleHOC onPress={props.onPressFriend} style={styles.userDetailsContainer}>
        
        {props.image &&<View style={styles.userImageContainer}>
          <Image source={props.image?props.image:generalImages.userImage} style={styles.userImage} />
        </View>}
        
        <View>
          {props.name &&<RobotoRegular style={styles.nameText}>{props.name}</RobotoRegular>}
          <View style={styles.editContainer}>
            <Image source={icons.edit} style={styles.editIcon} />
            <RobotoRegular style={styles.dateText}>
              {""}{moment(props.createdAt).format("MMMM DD, YYYY - HH:MM A")}
            </RobotoRegular>
          </View>
        </View>
        <View style={styles.editContainer}>
          <Image source={icons.mapPin} style={styles.locationIcon} />
          <RobotoRegular style={styles.dateText} numberOfLines={1}>
           {props.location}
          </RobotoRegular>
        </View>
      </RippleHOC>
      <RenderHtml
          contentWidth={vw*80}
          // allowedStyles={{height: 100}}
          source={source}
          baseStyle={styles.htmlBaseStyle}
          defaultTextProps={defaultTextProps}
          tagsStyles={{
            p: styles.descText,
            b: styles.descText,
            div: styles.descText,
            i: styles.descText,
            u: styles.descText,
            s: styles.descText,
            // div: styles.descText,

            // h1:styles.descText,
            // h2:styles.descText,
            // h3:styles.descText,
            // h4:styles.descText,
            // h5:styles.descText,
            // h6:styles.descText,
            // h7:styles.descText,
          }}
        />
      <RippleHOC onPress={props.onPress}>
 
     
      <View style={styles.hashtagContainer}>

      {props.hashtags.slice(0,2).map((value,index)=>{
        return(
      <RobotoRegular style={styles.hashtagsText}> 
        #{value}
      </RobotoRegular>

        )
      })}
      </View>
      </RippleHOC>
      {
        props.clickText &&

      <RippleHOC onPress={onClickText} style={styles.alignComment}>
      <RobotoMedium style={styles.headerText}>{props.clickText}</RobotoMedium>
      </RippleHOC>
      }

      {/* <View style={styles.alignComment}>
        <View style={styles.commentContainer}>
          <Image source={icons.comment} style={styles.commentIcon} />
          <PoppinsRegular style={styles.commentText}>Comment</PoppinsRegular>
        </View>
      </View> */}

      </View>
    }
    
     
    </View>
  );
};
export default FriendNetworkCard;
