import React, {useRef, useImperativeHandle} from 'react';
import {FlatList, Image, ImageBackground, View} from 'react-native';
import {generalImages, icons} from '../../../assets/images';
import CustomButton from '../../Buttons/CustomButton';
import CustomCheckBox from '../../CustomCheckbox';
import SearchInput from '../../Inputs/SearchInput';
import RobotoMedium from '../../Texts/RobotoMedium';
import RobotoRegular from '../../Texts/RobotoRegular';
import RippleHOC from '../../wrappers/Ripple';
import PopupWrapper from '../PopupWrapper';
import styles from './styles';

const MyNetworkPopup = props => {
  const popup = useRef(null);
  const addPeopleArray = [1,2,3
  ];

  useImperativeHandle(props?.reference, () => ({
    hide: hide,
    show: show,
  }));

  const show = () => {
    popup?.current?.show();
  };

  const hide = () => {
    popup?.current?.hide();
  };

  const onYes = () => {
    if (props?.onAccept) {
      props?.onAccept();
    }
    hide();
  };
  // const renderPeopleCard = () => {
  //   return (
  //     <View style={styles.userSelectContainer}>

  //       <View style={styles.userContainer}>
  //         <Image source={generalImages.userImage} style={styles.userImage} />
  //       </View>
  //       <View style={styles.crossContainer}>
  //         <Image source={icons.cross} style={styles.crossImg}/>
  //       </View>
  //       <RobotoRegular style={styles.usernameText}>Elsa Robert</RobotoRegular>
  //     </View>
  //   );
  // };

  // const renderSelectPeople = () => {
  //   return (
  //     <View style={styles.friendSelectContainer}>
  //       <CustomCheckBox />
  //       <View style={styles.userContainer}>
  //         <Image source={generalImages.userImage} style={styles.userImage} />
  //       </View>
  //       <RobotoRegular style={styles.usernameText}>Elsa Robert</RobotoRegular>
  //     </View>
  //   );
  // };

  return (
    <PopupWrapper
      reference={popup}
      childrenStyle={styles.container}
      contentContainerStyle={styles.popupContainer}
    >
      <SearchInput
        placeholder={'Search'}
        inputStyle={styles.TextInput}
        style={styles.input}
      />
      <RobotoMedium style={styles.selectedText}>Selected</RobotoMedium>
      {/* <FlatList
          data={addPeopleArray}
          renderItem={renderPeopleCard}
          keyExtractor={(item,index)=>item?.name}
          key={"storyArray"}
          // numColumns={3}
          contentContainerStyle={styles.contentContainer}
          horizontal={true}
        /> */}
        <View style={styles.peopleContainer}>
      {addPeopleArray.map((item, value) => {
        return (
          <View style={styles.userSelectContainer}>
            <View style={styles.userContainer}>
              <Image
                source={generalImages.userImage}
                style={styles.userImage}
              />
            </View>
            <View style={styles.crossContainer}>
              <Image source={icons.cross} style={styles.crossImg} />
            </View>
            <RobotoRegular style={styles.usernameText}>
              Elsa Robert
            </RobotoRegular>
          </View>
        );
      })}
      </View>
      <View style={styles.friendContainer}>
        <RobotoMedium style={styles.selectedText}>Friends</RobotoMedium>
        <RobotoRegular style={styles.selectText}>Select All</RobotoRegular>
      </View>
      {/* <FlatList data={[1, 2, 3]} renderItem={renderSelectPeople} /> */}
      {addPeopleArray.map((item,index)=>{
        return(
          <View style={styles.friendSelectContainer}>
            <View style={styles.checkboxWithUserImageContainer}>
          <CustomCheckBox />
          <View style={styles.userContainer}>
            <Image source={generalImages.userImage} style={styles.userImage} />
          </View>
          </View>
          <RobotoRegular style={styles.usernameText}>Elsa Robert</RobotoRegular>
        </View>

        )
      })}
      <CustomButton
        text={'Next'}
        onPress={onYes}
        alignStyle={styles.alignBtn}
        style={styles.nextBtn}
      />
    </PopupWrapper>
  );
};
export default MyNetworkPopup;
