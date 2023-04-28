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
    if (props?.onAccept) {
      props?.onAccept();
    }
    hide();
  };
  const handleSubmitSearch=()=>{
    // console.log(hashtagData);

    if(hashtagData?.data?.hashTags.length==0)
    {
      if (!setting?.hashtags.includes(search)) {
        // props.setMyHashtags([...props.myhashtags, search]);
        dispatch(saveSetting({...setting,hashtags:[...setting?.hashtags,search] }))
      }

    }
    
  }
  // console.log("props.myhashtags",props.myhashtags);
  return (
    <PopupWrapper reference={popup} childrenStyle={styles.container} contentContainerStyle={styles.contentContainer}>
        <RobotoMedium style={styles.hashtagHeading}>Add Hashtags</RobotoMedium>
        <View style={styles.hashtagContainer}>

        <InputField
        inputContainerIcon={styles.contentInput}
        inputContainerStyle={styles.inputContainer}
        // label={"search"}
        placeholder={"Search here..."}
        onSubmitEditing={handleSubmitSearch}
        onEndEditing={handleSubmitSearch}
        value={search}
        onChangeText={setSearch}
        />
        <RippleHOC onPress={handleSubmitSearch}>
          <RobotoRegular style={styles.searchText}>Search</RobotoRegular>
        </RippleHOC>

        </View>
        <View style={styles.hashtagsMainContainer}>
          <Hashtags isLoading={hashtagData?.isLoading}
          setMyHashtags={props.setMyHashtags}
          myhashtags={props.myhashtags}
          array={hashtagData?.data?.hashTags}
          searchText={search}          
          />
        </View>
        <CustomButton text={"Publish"}
        onPress={onYes}
        textStyle={styles.btnText} alignStyle={styles.alignBtn} style={styles.btnPublish}/>

    </PopupWrapper>
  );
};
export default HashtagPopup;
