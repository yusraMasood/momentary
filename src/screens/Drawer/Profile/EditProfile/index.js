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
import { Toast, jsonToFormdata } from '../../../../Api/APIHelpers';
import { useInlineLoader } from '../../../../state/general';
import ButtonLoading from '../../../../components/Loaders/ButtonLoading';

const EditProfile = props => {

  const {data} =useGetProfileQuery()
  const [postProfile,{isLoading,error}] =usePostProfileMutation()
  const [name,setName]=useState(data?.user?.fullName)
  const [about,setAbout] =useState(data?.user?.about)
  const [phone,setPhone] =useState(data?.user?.phone)
  const [image,setImage] =useState( data?.user?.image)
  const [imageSelection,setImageSelection] =useState(false)
  const [postImage,message] =usePostImageMutation()
  const imageLoader =useInlineLoader()
  const phoneRef = useRef(null);

  console.log("image", image);
  const onSubmit = () => {
    postProfile({firstName:name,phone,aboutimage: image?._id}).then((res)=>{
      if(res?.data?.user)
      {
        Toast.success("Profile Updated Successfully")
        props.navigation.goBack()
      }
      else{
        Toast.error("Profile failed to update")
      }
      // props.navigation.goBack();
    })
  };

  return (
    <ScreenWrapper style={styles.container}>
      {
        imageLoader?
        <ButtonLoading/>:

      <View>
        <Image source={image?.thumbnail?{uri:image?.thumbnail}: generalImages.userImage} style={styles.userImg} />
        <RippleHOC style={styles.cameraMainContainer} onPress={()=> setImageSelection(true)}>
        <LinearGradient colors={linearColors.yellow} style={styles.cameraContainer}>
          <Image source={icons.camera} style={styles.cameraStyle} />
        </LinearGradient>
        </RippleHOC>
      </View>
      }
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
        placeholder={'Write About Yourself'}
        label={'About Yourself'}
        onSubmitEditing={() => phoneRef.current.focus()}
        value={about}
        onChangeText={setAbout}
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
      {
        isLoading?
        <ButtonLoading/>:
        <CustomButton
          alignStyle={styles.btnContainer}
          onPress={onSubmit}
          text={'Update Profile'}
        />

      }
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
