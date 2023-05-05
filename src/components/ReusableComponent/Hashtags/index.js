import React, {useState} from 'react';
import {View, Image, FlatList} from 'react-native';
import {icons} from '../../../assets/images';
import RobotoBold from '../../Texts/RobotoBold';
import styles from './styles';
import EmptyComponent from '../../EmptyComponent';
import RippleHOC from '../../wrappers/Ripple';
import {saveSetting, useSetting} from '../../../state/entry';
import {useDispatch} from 'react-redux';
import InputField from '../../Inputs/InputField';
import RobotoRegular from '../../Texts/RobotoRegular';
import { Toast } from '../../../Api/APIHelpers';

const Hashtags = props => {
  const dispatch = useDispatch();
  const setting = useSetting();
  const [search,setSearch]=useState("")
  const handleSubmitHashtags = () => {
    // console.log("sjsjios",search);
    console.log(props?.hashtags.includes(search));
    if(search =="")
    {
     return Toast.error("Please write hashtag before submitting...")
    }
    if (!props?.hashtags.includes(search)) {
      console.log(search);
      // console.log("hdhdiuhid");
     
      props.setHashtags([...props.hashtags, search]);
     
    }
    setSearch("")
  };
  const deleteItem = (value) => {
    const tempDelete = [...props.hashtags];
    const indexItem = tempDelete.findIndex(item => item == value);
    tempDelete.splice(indexItem, 1);
    props.setHashtags(tempDelete);
  };

  return (
    <View>
      <View style={styles.searchContainer}>
        <InputField
          inputContainerIcon={styles.contentInput}
          inputContainerStyle={styles.inputContainer}
          // label={"search"}
          placeholder={'Enter Hashtag'}
          onSubmitEditing={handleSubmitHashtags}
          // onEndEditing={handleSubmitHashtags}
          value={search}
          onChangeText={setSearch}
        />
        <RippleHOC onPress={handleSubmitHashtags}>
          <RobotoRegular style={styles.searchText}>Add</RobotoRegular>
        </RippleHOC>
      </View>
      {/* <RobotoBold style={styles.myTagText}>My Tags</RobotoBold> */}
      <View style={styles.hashtagsMainContainer}>
        {props?.hashtags.map((item, index) => {
          return (
            <View style={styles.hashtagContainer}>
              <RippleHOC
                onPress={() => deleteItem(item)}
                style={styles.crossIconContainer}
              >
                <Image source={icons.cross} style={styles.crossimg} />
              </RippleHOC>

              <RobotoBold style={styles.hashtagText}>#{item}</RobotoBold>
            </View>
          );
        })}
      </View>
    </View>
  );
};
export default Hashtags;
