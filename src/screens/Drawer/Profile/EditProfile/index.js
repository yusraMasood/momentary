import React, {useRef,useState} from 'react';
import {View, FlatList, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {generalImages, icons} from '../../../../assets/images';
import CustomButton from '../../../../components/Buttons/CustomButton';
import InputField from '../../../../components/Inputs/InputField';
import RobotoMedium from '../../../../components/Texts/RobotoMedium';
import RobotoRegular from '../../../../components/Texts/RobotoRegular';
import RippleHOC from '../../../../components/wrappers/Ripple';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
import {linearColors} from '../../../../utils/appTheme';
import styles from './styles';
import { useGetProfileQuery, usePostImageMutation, usePostProfileMutation } from '../../../../state/account';
import ImagePicker from '../../../../components/Image/ImagePicker';
import { jsonToFormdata } from '../../../../Api/APIHelpers';

const EditProfile = props => {

  const {data} =useGetProfileQuery()
  const [postProfile,{isLoading,error}] =usePostProfileMutation()
  const [name,setName]=useState(data?.user?.firstName)
  const [phone,setPhone] =useState(data?.user?.phone)
  const [image,setImage] =useState({uri: data?.user?.image?.thumbnail})
  const [imageSelection,setImageSelection] =useState(false)
  const [postImage,message] =usePostImageMutation()
  const phoneRef = useRef(null);

  const onSubmit = () => {
    if(image){
      const formData = new FormData();
      formData.append('image', image);
      formData.append('entityType', "profile");
      postImage(formData).then((res)=>{
      })
    }
    postProfile({firstName:name,phone}).then((res)=>{
      // props.navigation.goBack();
    })
  };

  return (
    <ScreenWrapper style={styles.container}>
      <View>
        <Image source={image?.uri?{uri:image?.uri}: generalImages.userImage} style={styles.userImg} />
        <RippleHOC style={styles.cameraMainContainer} onPress={()=> setImageSelection(true)}>
        <LinearGradient colors={linearColors.yellow} style={styles.cameraContainer}>
          <Image source={icons.camera} style={styles.cameraStyle} />
        </LinearGradient>
        </RippleHOC>
      </View>
      <RippleHOC onPress={()=> props.navigation.navigate("ChangePassword")}>
      <RobotoMedium style={styles.passwordText}>Change Password</RobotoMedium>
      </RippleHOC>
      <InputField
        placeholder={'Enter Name'}
        label={'Name'}
        onSubmitEditing={() => phoneRef.current.focus()}
        value={name}
        onChangeText={setName}
      />
      <InputField
        reference={phoneRef}
        placeholder={'Enter Phone No'}
        value={phone}
        onChangeText={setPhone}
        label={'Phone No'}
        onSubmitEditing={onSubmit}
      />
      <View style={styles.itemContainer}>
        <RobotoRegular style={styles.titleText}>Email</RobotoRegular>
        <RobotoRegular style={styles.valueText}>{data?.user?.email}</RobotoRegular>
      </View>
      <CustomButton
        alignStyle={styles.btnContainer}
        onPress={onSubmit}
        text={'Update Profile'}
      />
      <ImagePicker
      image={image}
      setImage={setImage}
      imageSelection={imageSelection}
      setImageSelection={setImageSelection}
      type="profile"
      />
    </ScreenWrapper>
  );
};
export default EditProfile;
