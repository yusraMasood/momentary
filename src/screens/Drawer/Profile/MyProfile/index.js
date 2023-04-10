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

  const [getProfile] =useGetProfileQuery()
  useEffect(()=>{
    getProfile()
  },[])
  const profileArray = [
    {
      title: 'Name',
      value: 'Elsa Robert',
    },
    {
      title: 'Phone No',
      value: '0000-000-0000000',
    },
    {
      title: 'Email',
      value: 'elsa@email.com',
    },
    // {
    //     title:"",
    //     value:""
    // },
  ];
  // const renderProfile = ({item}) => {
  //   return (
  //     <View style={styles.itemContainer}>
  //       <RobotoRegular style={styles.titleText}>{item?.title}</RobotoRegular>
  //       <RobotoRegular style={styles.valueText}>{item?.value}</RobotoRegular>
  //     </View>
  //   );
  // };
  return (
    <ScreenWrapper style={styles.container}>
      <Image source={generalImages.userImage} style={styles.userImg} />
      <RippleHOC onPress={()=>props.navigation.navigate("ChangePassword")}>
      <RobotoMedium style={styles.passwordText}>Change Password</RobotoMedium>
      </RippleHOC>
      <View>
        <ContentDataComponent
        array={profileArray}
        />
      {/* <FlatList 
      data={profileArray} 
      renderItem={renderProfile} 
      key={"profileArray"}
      keyExtractor={(item,index)=>index}
      columnWrapperStyle={styles.columnWrapperStyle}
      numColumns={2}
      /> */}
      </View>
      <CustomButton alignStyle={styles.btnContainer}
      onPress={()=> props.navigation.navigate("EditProfile")}
      text={"Edit Profile"}/>
  
    </ScreenWrapper>
  );
};
export default MyProfile;
