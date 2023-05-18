import React, { useEffect } from 'react';
import {View, FlatList, Image} from 'react-native';
import {generalImages} from '../../../../assets/images';
import CustomButton from '../../../../components/Buttons/CustomButton';
import ContentDataComponent from '../../../../components/ReusableComponent/ContentDataComponent';
import RobotoMedium from '../../../../components/Texts/RobotoMedium';
import RippleHOC from '../../../../components/wrappers/Ripple';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
import styles from './styles';
import { useGetProfileQuery } from '../../../../state/account';
import { userProfile } from '../../../../state/auth';

const MyProfile = (props) => {

  const {data:profile,isLoading, isFetching, isError} =useGetProfileQuery()
  const profileData=userProfile()
  const profileArray = [
    {
      title: 'Name',
      value: profile?.user?.fullName,
    },
    {
      title: 'Phone No',
      value: profile?.user?.phone,
    },
    {
      title: 'Email',
      value: profile?.user?.email,
    },
  ];
  console.log(" profile", profile,profileData);
  return (
    <ScreenWrapper style={styles.container}>
      <Image source={profile?.user?.image?.thumbnail?{uri:profile?.user?.image?.thumbnail}: generalImages.userImage} style={styles.userImg} />
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
