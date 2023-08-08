import React, {useRef, useImperativeHandle,useState} from 'react';
import {Image, ImageBackground, View} from 'react-native';
import {generalImages, icons} from '../../../assets/images';
import CustomButton from '../../Buttons/CustomButton';
import InputField from '../../Inputs/InputField';
import Hashtags from '../../ReusableComponent/Hashtags';
import RobotoBold from '../../Texts/RobotoBold';
import RobotoMedium from '../../Texts/RobotoMedium';
import RippleHOC from '../../wrappers/Ripple';
import PopupWrapper from '../PopupWrapper';
import styles from './styles';
import { saveSetting, useGetHashtagsQuery, useSetting } from '../../../state/entry';
import RobotoRegular from '../../Texts/RobotoRegular';
import { useDispatch } from 'react-redux';

const HashtagPopup = props => {
  const popup = useRef(null);
  const [search,setSearch] =useState("")
  const dispatch =useDispatch()
  const setting =useSetting()
  const hashtagData =useGetHashtagsQuery({keyword: search})
  const [hashtagsArray,setHashtagsArray] =useState([])

  useImperativeHandle(props?.reference, () => ({
    hide: hide,
    show: show,
  }));

  const show = () => {
    popup?.current?.show();
  };

  const hide = () => {
    popup?.current?.hide();
  };

  const onYes = () => {
    dispatch(saveSetting({...setting, hashtags:hashtagsArray }))
    // props.setMyHashtags([...props.myhashtags,])
    if (props?.onAccept) {
      props?.onAccept();
    }
    hide();
  };
  const handleSubmitSearch=()=>{

   
      if (!setting?.hashtags.includes(search)) {
        // props.setMyHashtags([...props.myhashtags, search]);
        // dispatch(saveSetting({...setting,hashtags:[...setting?.hashtags,search] }))

      }
    
  }
  const deleteItem = value => {
    const tempDelete = [...setting?.hashtags];
    const indexItem = tempDelete.findIndex(item => item == value);
    tempDelete.splice(indexItem, 1);
    dispatch(saveSetting({...setting,hashtags: tempDelete}))
  };
  return (
    <PopupWrapper reference={popup} childrenStyle={styles.container} contentContainerStyle={styles.contentContainer}>
        <RobotoMedium style={styles.hashtagHeading}>Add Hashtags</RobotoMedium>

        <View style={styles.hashtagsMainContainer}>
          <Hashtags 
          isLoading={hashtagData?.isLoading}
          
          hashtags={props.myhashtags} 
          setHashtags={props.setMyHashtags}      
          />
        </View>
        <CustomButton text={"Publish"}
        onPress={onYes}
        textStyle={styles.btnText} alignStyle={styles.alignBtn} style={styles.btnPublish}/>

    </PopupWrapper>
  );
};
export default HashtagPopup;
