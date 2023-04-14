import React, { useEffect } from 'react';
import {View, FlatList, Image} from 'react-native';
import {generalImages} from '../../../../assets/images';
import CustomButton from '../../../../components/Buttons/CustomButton';
import ContentDataComponent from '../../../../components/ReusableComponent/ContentDataComponent';
import RobotoMedium from '../../../../components/Texts/RobotoMedium';
import RobotoRegular from '../../../../components/Texts/RobotoRegular';
import RippleHOC from '../../../../components/wrappers/Ripple';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
import styles from './styles';
import { useGetProfileQuery } from '../../../../state/account';

const MyProfile = (props) => {

  const {data,isLoading, isFetching, isError} =useGetProfileQuery()
  console.log(data);
  // console.log("message",message);
  useEffect(()=>{
    // getProfile()
  },[])
  const profileArray = [
    {
      title: 'Name',
      value: data?.user?.firstName,
    },
    {
      title: 'Phone No',
      value: data?.user?.phone,
    },
    {
      title: 'Email',
      value: data?.user?.email,
    },
  ];
  return (
    <ScreenWrapper style={styles.container}>
      <Image source={data?.user?.image?.thumbnail?{uri:data?.user?.image?.thumbnail}: generalImages.userImage} style={styles.userImg} />
      <RippleHOC onPress={()=>props.navigation.navigate("ChangePassword")}>
      <RobotoMedium style={styles.passwordText}>Change Password</RobotoMedium>
      </RippleHOC>
      <View>
        <ContentDataComponent
        loader={isLoading}
        array={profileArray}
        />
      </View>
      <CustomButton alignStyle={styles.btnContainer}
      onPress={()=> props.navigation.navigate("EditProfile")}
      text={"Edit Profile"}/>
  
    </ScreenWrapper>
  );
};
export default MyProfile;
