import React from 'react';
import {View, Image, FlatList,TextInput} from 'react-native';
import { generalImages, icons } from '../../../../assets/images';
import FriendNetworkCard from '../../../../components/Cards/FriendNetworkCard';
import RobotoMedium from '../../../../components/Texts/RobotoMedium';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
import { colors } from '../../../../utils/appTheme';
import styles from './styles';

const FriendNetworkScreen = () => {
  const renderFriendCard = () => {
    return <FriendNetworkCard 
    
    />;
  };
const renderHeader=()=>{
    return(
        <View style={styles.headerContainer}>
            <RobotoMedium style={styles.headerText}>My Friends</RobotoMedium>
        </View>
    )
}
  return (
    <ScreenWrapper style={styles.container}>

      <FlatList data={[1, 2, 3, 4, 5]} 
      ListHeaderComponent={renderHeader}
      contentContainerStyle={styles.flatListContainer}
      renderItem={renderFriendCard} />
      <View style={styles.textInputContainer}>
        <Image source={generalImages.userImage} style={styles.userImage}/>
        <View style={styles.inputContainer}>
        <TextInput
        placeholder='Write a comment..'
        placeholderTextColor={colors.input.greyPlaceholder}
        style={styles.input}
        />
        <Image source={icons.send} style={styles.sendIcon}/>
        </View>
      </View>
    </ScreenWrapper>
  );
};
export default FriendNetworkScreen;
