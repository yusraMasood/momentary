import React, { useEffect ,useState,useCallback} from 'react';
import {View, FlatList, Image,RefreshControl} from 'react-native';
import {generalImages} from '../../../../assets/images';
import CustomButton from '../../../../components/Buttons/CustomButton';
import ContentDataComponent from '../../../../components/ReusableComponent/ContentDataComponent';
import RobotoMedium from '../../../../components/Texts/RobotoMedium';
import RippleHOC from '../../../../components/wrappers/Ripple';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
import styles from './styles';
import { useGetProfileQuery } from '../../../../state/account';
import { userProfile } from '../../../../state/auth';
import ContentContainer from '../../../../components/wrappers/ContentContainer';

const MyProfile = (props) => {
  const [refreshing,setRefreshing] =useState(false)

  const profileMessage =useGetProfileQuery()

  const profile= userProfile()


  const profileArray = [
    {
      title: 'Name',
      value: profile?.fullName,
    },
    {
      title: 'Phone No',
      value: profile?.phone,
    },
    {
      title: 'Email',
      value: profile?.email,
    },
  ];
  const onRefresh = useCallback(() => {
    setRefreshing(true)
   profileMessage?.refetch();
   setRefreshing(false)

  }, []);
  return (
    <ScreenWrapper style={styles.container}>
      <ContentContainer
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
      <Image source={profile?.image?.thumbnail?{uri:profile?.image?.thumbnail}: generalImages.userImage} style={styles.userImg} />
      <RippleHOC onPress={()=>props.navigation.navigate("ChangePassword")}>
      <RobotoMedium style={styles.passwordText}>Change Password</RobotoMedium>
      </RippleHOC>
      <View>
        <ContentDataComponent
        // loader={isLoading}
        array={profileArray}
        />
      </View>
      <CustomButton alignStyle={styles.btnContainer}
      onPress={()=> props.navigation.navigate("EditProfile")}
      text={"Edit Profile"}/>
  </ContentContainer>
    </ScreenWrapper>
  );
};
export default MyProfile;
