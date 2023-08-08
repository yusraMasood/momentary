import React, {useRef, useImperativeHandle, useState} from 'react';
import {FlatList, Image, ImageBackground, View} from 'react-native';
import {generalImages, icons} from '../../../assets/images';
import CustomButton from '../../Buttons/CustomButton';
import CustomCheckBox from '../../CustomCheckbox';
import SearchInput from '../../Inputs/SearchInput';
import RobotoMedium from '../../Texts/RobotoMedium';
import RobotoRegular from '../../Texts/RobotoRegular';
import PopupWrapper from '../PopupWrapper';
import styles from './styles';
import {useGetMyFriendsQuery} from '../../../state/friends';
import ButtonLoading from '../../Loaders/ButtonLoading';
import RippleHOC from '../../wrappers/Ripple';

const MyNetworkPopup = props => {
  const [search, setSearch] = useState('');
  const {data, isLoading} = useGetMyFriendsQuery({keyword: search});
  const [select, setSelect] = useState(false);
  const popup = useRef(null);
  const [checkbox,setCheckbox]=useState()

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
  const deleteItem = value => {
    console.log(" value", value);
    const tempDelete = [...props.selectedPeople];
    const indexItem = tempDelete.findIndex(
      item => item?._id == value?._id,
    );
    tempDelete.splice(indexItem, 1);
    props.setSelectedPeople(tempDelete);

    //delete ids
    const tempDeeleteId = [...props.selectedPeopleId];
    const indexItemId = tempDeeleteId.findIndex(
      item => item == value?._id,
    );
    tempDeeleteId.splice(indexItemId, 1);
    props.setSeelectedPeopleId(tempDeeleteId);
    props.value = false;
  };
  const renderPeopleCard = ({item}) => {
    return (
      <View style={styles.userSelectContainer}>
        <View style={styles.userContainer}>
          <Image
            source={
              item?.image?.thumbnail
                ? {uri: item?.image?.thumbnail}
                : generalImages.userImage
            }
            style={styles.userImage}
          />
        </View>
        <RippleHOC
          onPress={() => deleteItem(item)}
          style={styles.crossContainer}
        >
          <Image source={icons.cross} style={styles.crossImg} />
        </RippleHOC>
        <RobotoRegular style={styles.usernameText}>
          {item?.fullName}
        </RobotoRegular>
      </View>
    );
  };

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
  const selectPeopleOnce=()=>{
    if(select)
    {
      props.setSelectedPeople([])
      props.setSeelectedPeopleId([])
      setSelect(false)

    }
    else{
      // props.setSelectedPeople(data?.friends)
      const tempFriends=[]
      data?.friends.map((value)=>{
        tempFriends.push(value?.friend)
      })
      props.setSelectedPeople(tempFriends)
      const tempIds=[]
      data?.friends.map((value)=>{
        tempIds.push(value?.friend?._id)
      })
      props.setSeelectedPeopleId(tempIds)
      setSelect(true)
    }
    
  }
  const onPressCheck=(item)=>{
 console.log(" item,item",item);
   

    
    if (props.selectedPeopleId.includes(item?.friend?._id)) {
      deleteItem(item?.friend)
          
        }
          else{
            props.setSelectedPeople([...props.selectedPeople,item?.friend])
          props.setSeelectedPeopleId([...props.selectedPeopleId,item?.friend?._id])
            



          }
        
  }
  // console.log(" get my all friends", data?.friends);
  
  // console.log("selectedPeopleId", props.selectedPeopleId);
  // const merge = () =>
  // data?.friends.map((a) => ({
  //   id: a?.friend?.id,
  //   isAvaliable: !!props.selectedPeopleId.find((b) => b === a?.friend?.id),
  // }));
  // console.log("merge",merge);

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
        value={search}
        onChangeText={setSearch}
      />
      {isLoading ? (
        <ButtonLoading />
      ) : (
        <View>
          <RobotoMedium style={styles.selectedText}>Selected</RobotoMedium>
          <FlatList
            data={props.selectedPeople}
            renderItem={renderPeopleCard}
            keyExtractor={(item, index) => item?.name}
            key={'storyArray'}
            contentContainerStyle={styles.contentContainer}
            horizontal={true}
          />
          <View style={styles.peopleContainer}></View>
          <View style={styles.friendContainer}>
            <RobotoMedium style={styles.selectedText}>Friends</RobotoMedium>
            <RippleHOC onPress={selectPeopleOnce}>
              <RobotoRegular style={styles.selectText}>
                {select ? 'Selected All' : 'Select All'}
              </RobotoRegular>
            </RippleHOC>
          </View>
          {data?.friends.slice(0, 3).map((item, index) => {
            return (
              <View style={styles.friendSelectContainer}>
                <View style={styles.checkboxWithUserImageContainer}>
                  <RippleHOC
                    style={[styles.checkboxRipple, props.style]}
                    onPress={()=> onPressCheck(item)}
                  >
                    <View style={[styles.checkboxContainer]}>
                      {props.selectedPeopleId.includes(item?.friend?._id) && (
                        <Image source={icons.tick} style={styles.tickImg} />
                      )} 
                    </View>
                  </RippleHOC>
                  <View style={styles.userContainer}>
                    <Image
                      source={
                        item?.friend?.image?.thumbnail
                          ? {uri: item?.friend?.image?.thumbnail}
                          : generalImages.userImage
                      }
                      style={styles.userImage}
                    />
                  </View>
                </View>
                <RobotoRegular style={styles.usernameText}>
                  {item?.friend?.fullName}
                </RobotoRegular>
              </View>
            );
          })}
          <CustomButton
            text={'Next'}
            onPress={onYes}
            alignStyle={styles.alignBtn}
            style={styles.nextBtn}
          />
        </View>
      )}
    </PopupWrapper>
  );
};
export default MyNetworkPopup;
{
  /* {addPeopleArray.map((item, value) => {
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
      })} */
}
