import React from 'react';
import {View, FlatList, Image} from 'react-native';
import {generalImages} from '../../../../assets/images';
import CustomButton from '../../../../components/Buttons/CustomButton';
import RobotoMedium from '../../../../components/Texts/RobotoMedium';
import RobotoRegular from '../../../../components/Texts/RobotoRegular';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
import styles from './styles';

const MyProfile = () => {
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
  const renderProfile = ({item}) => {
    return (
      <View style={styles.itemContainer}>
        <RobotoRegular style={styles.titleText}>{item?.title}</RobotoRegular>
        <RobotoRegular style={styles.valueText}>{item?.value}</RobotoRegular>
      </View>
    );
  };
  return (
    <ScreenWrapper style={styles.container}>
      <Image source={generalImages.userImage} style={styles.userImg} />
      <RobotoMedium style={styles.passwordText}>Change Password</RobotoMedium>
      <View>
      <FlatList data={profileArray} renderItem={renderProfile} 
      key={"profileArray"}
      keyExtractor={(item,index)=>index}
      columnWrapperStyle={styles.columnWrapperStyle}
      numColumns={2}
      />
      </View>
      <CustomButton alignStyle={styles.btnContainer} text={"Edit Profile"}/>
  
    </ScreenWrapper>
  );
};
export default MyProfile;
