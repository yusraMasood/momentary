import React,{useEffect, useState} from 'react';
import {View, Image, FlatList,TextInput} from 'react-native';
import { generalImages, icons } from '../../../../assets/images';
import FriendNetworkCard from '../../../../components/Cards/FriendNetworkCard';
import SearchInput from '../../../../components/Inputs/SearchInput';
import UserPosts from '../../../../components/ReusableComponent/UserPosts';
import RobotoMedium from '../../../../components/Texts/RobotoMedium';
import RippleHOC from '../../../../components/wrappers/Ripple';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
import { colors } from '../../../../utils/appTheme';
import styles from './styles';
import { useGetFeedQuery } from '../../../../state/friends';

const FriendNetworkScreen = (props) => {
  const [page,setPage] =useState(1)
  const {data,isLoading,originalArgs,error, refetch} =useGetFeedQuery({
    page,
    limit:8,
    privacy:"myNetwork"
  })


  useEffect(()=>{
    const unsubscribe = props.navigation.addListener('focus', () => {
      refetch()
    });
    return unsubscribe;

  },[props.navigation])

const renderHeader=()=>{
    return(
      <View>
        <SearchInput placeholder={"Search Locations or Tags"}/>
        <View style={styles.alignContent}>
        <View style={styles.headerContainer}>
          <Image source={icons.user} style={styles.sendIcon}/>
          <View style={styles.headerContainer}>
            <RippleHOC  onPress={()=> props.navigation.navigate("MyProfile")}>
          <RobotoMedium style={styles.headerText}>Me</RobotoMedium>
            </RippleHOC>
          <RobotoMedium style={styles.dashText}>-</RobotoMedium>
          <RippleHOC onPress={()=> props.navigation.navigate("FriendRequest")}>
            <RobotoMedium style={styles.headerText}>My Friends</RobotoMedium>
            </RippleHOC>
            </View>
        </View>
        </View>
        </View>
    )
}
// console.log("hello,data?.feeds",data?.feeds);
  return (
    <ScreenWrapper style={styles.container}>
      {renderHeader()}
<UserPosts
clickText={'Add To library'}
isLoading={isLoading} array={data?.feeds} refetch={refetch}
page={page}
setPage={setPage}

/>
    </ScreenWrapper>
  );
};
export default FriendNetworkScreen;
