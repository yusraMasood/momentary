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
import { useGetHashtagsQuery } from '../../../state/entry';

const HashtagPopup = props => {
  const popup = useRef(null);
  const [search,setSearch] =useState("")
  const hashtagData =useGetHashtagsQuery({tag: search})

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
  return (
    <PopupWrapper reference={popup} childrenStyle={styles.container} contentContainerStyle={styles.contentContainer}>
        <RobotoMedium style={styles.hashtagHeading}>Add Hashtags</RobotoMedium>
        <InputField
        inputContainerIcon={styles.contentInput}
        inputContainerStyle={styles.inputContainer}
        label={"search"}
        placeholder={"Search here..."}
        onSubmitEditing={hashtagData?.refetch}
        onEndEditing={hashtagData?.refetch}
        value={search}
        onChangeText={setSearch}
        />
        <View style={styles.hashtagsMainContainer}>
          <Hashtags isLoading={hashtagData?.isLoading}
          setMyHashtags={props.setMyHashtags}
          myhashtags={props.myhashtags}
          array={hashtagData?.data?.hashTags}
          
          />
        </View>
        <CustomButton text={"Publish"}
        onPress={onYes}
        textStyle={styles.btnText} alignStyle={styles.alignBtn} style={styles.btnPublish}/>

    </PopupWrapper>
  );
};
export default HashtagPopup;
