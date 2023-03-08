import React from 'react';
import {View, Image, FlatList,TextInput} from 'react-native';
import { generalImages, icons } from '../../../../assets/images';
import FriendNetworkCard from '../../../../components/Cards/FriendNetworkCard';
import SearchInput from '../../../../components/Inputs/SearchInput';
import RobotoMedium from '../../../../components/Texts/RobotoMedium';
import RippleHOC from '../../../../components/wrappers/Ripple';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
import { colors } from '../../../../utils/appTheme';
import styles from './styles';

const FriendNetworkScreen = (props) => {
  const renderFriendCard = () => {
    return <FriendNetworkCard 
    onPress={()=> props.navigation.navigate("FriendDetails")}
    location={"Approximate Locations"}
    // hashtags={"#trends #fashion"}
    clickText={"Add To library"}
    name={"Amelia Isabell"}
    image={generalImages.userImage}
    style={styles.friendNetworkStyle}
    
    />;
  };
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
  return (
    <ScreenWrapper style={styles.container}>

      <FlatList data={[1, 2, 3, 4, 5]} 
      ListHeaderComponent={renderHeader}
      key={"friendArar"}
      keyExtractor={(item,index)=> index}
      contentContainerStyle={styles.flatListContainer}
      renderItem={renderFriendCard} />
      {/* <View style={styles.textInputContainer}>
        <Image source={generalImages.userImage} style={styles.userImage}/>
        <View style={styles.inputContainer}>
        <TextInput
        placeholder='Write a comment..'
        placeholderTextColor={colors.input.greyPlaceholder}
        style={styles.input}
        />
        <Image source={icons.send} style={styles.sendIcon}/>
        </View>
      </View> */}
    </ScreenWrapper>
  );
};
export default FriendNetworkScreen;
