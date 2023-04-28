import React, {useState} from 'react';
import {View, Image, FlatList} from 'react-native';
import {icons} from '../../../assets/images';
import RobotoBold from '../../Texts/RobotoBold';
import styles from './styles';
import EmptyComponent from '../../EmptyComponent';
import RippleHOC from '../../wrappers/Ripple';
import { saveSetting, useSetting } from '../../../state/entry';
import { useDispatch } from 'react-redux';

const Hashtags = props => {
  const dispatch =useDispatch()
  const setting =useSetting()
  console.log(setting);

  const deleteItem = value => {
    const tempDelete = [...setting?.hashtags];
    const indexItem = tempDelete.findIndex(item => item == value);
    tempDelete.splice(indexItem, 1);
    // props.setMyHashtags(tempDelete);
    dispatch(saveSetting({...setting,hashtags: tempDelete}))
  };

  const renderHashtags = ({item}) => {
    return (
      <View style={styles.hashtagContainer}>
        <RippleHOC
          onPress={() => {
            if (!setting?.hashtags.includes(item)) {
              // props.setMyHashtags([...props.myhashtags, item]);
              dispatch(saveSetting({...setting,hashtags:[...setting?.hashtags,item] }))
            }
          }}>
          <RobotoBold style={styles.hashtagText}>#{item}</RobotoBold>
        </RippleHOC>
      </View>
    );
  };
  const renderMyHashtags = ({item}) => {
    return (
      <View style={styles.hashtagContainer}>
        <RippleHOC
          onPress={() => deleteItem(item)}
          style={styles.crossIconContainer}>
          <Image source={icons.cross} style={styles.crossimg} />
        </RippleHOC>

        <RobotoBold style={styles.hashtagText}>#{item}</RobotoBold>
      </View>
    );
  };
  const renderEmpty = () => {
    return <EmptyComponent text="No Hashtags Found" />;
  };
  return (
    <View>
      {/* <FlatList
        data={props.isLoading ? [1, 2, 3, 4] : props.array}
        numColumns={4}
        contentContainerStyle={styles.contentContainerStyle}
        columnWrapperStyle={styles.columnStyle}
        key={'hashtagArray'}
        keyExtractor={(item, index) => item?._id}
        ListEmptyComponent={renderEmpty}
        renderItem={renderHashtags}
      /> */}
      <View style={styles.hashtagsMainContainer}>

     
      {
        props.array.map((item,index)=>{
          return(
            <View style={styles.hashtagContainer}>
            <RippleHOC
              onPress={() => {
                if (!setting?.hashtags.includes(item)) {
                  dispatch(saveSetting({...setting,hashtags:[...setting?.hashtags,item] }))
                }
              }}>
              <RobotoBold style={styles.hashtagText}>#{item}</RobotoBold>
            </RippleHOC>
          </View>

          )
        })
      }
       </View>
      <RobotoBold style={styles.myTagText}>My Tags</RobotoBold>
          <View style={styles.hashtagsMainContainer}>
          {
        setting?.hashtags.map((item,index)=>{
          return(
            <View style={styles.hashtagContainer}>
            <RippleHOC
              onPress={() => deleteItem(item)}
              style={styles.crossIconContainer}>
              <Image source={icons.cross} style={styles.crossimg} />
            </RippleHOC>
    
            <RobotoBold style={styles.hashtagText}>#{item}</RobotoBold>
          </View>

          )
        })
      }
      </View>
    </View>
  );
};
export default Hashtags;
