import React, {useState} from 'react';
import {View, Image, FlatList} from 'react-native';
import {icons} from '../../../assets/images';
import RobotoBold from '../../Texts/RobotoBold';
import styles from './styles';
import EmptyComponent from '../../EmptyComponent';
import RippleHOC from '../../wrappers/Ripple';

const Hashtags = props => {
  // const [myhashtags,props.setMyHashtags]=useState([])
  console.log(props.myhashtags);

  const deleteItem = value => {
    // console.log('my hashtags', props.myhashtags);
    const tempDelete = [...props.myhashtags];
    // console.log('temp delete', tempDelete);
    const indexItem = tempDelete.findIndex(item => item?._id == value?._id);
    console.log('indexItem', indexItem);
    tempDelete.splice(indexItem, 1);
    console.log('tempDelete', tempDelete);
    props.setMyHashtags(tempDelete);
  };

  const renderHashtags = ({item}) => {
    return (
      <View style={styles.hashtagContainer}>
        {/* <Image source={icons.cross} style={styles.crossimg}/> */}
        <RippleHOC
          onPress={() => {
            if (!props.myhashtags.includes(item)) {
              props.setMyHashtags([...props.myhashtags, item]);
            }
          }}>
          <RobotoBold style={styles.hashtagText}>#{item?.tag}</RobotoBold>
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

        <RobotoBold style={styles.hashtagText}>#{item?.tag}</RobotoBold>
      </View>
    );
  };
  const renderEmpty = () => {
    return <EmptyComponent text="No Hashtags Found" />;
  };
  return (
    <View>
      <FlatList
        data={props.isLoading ? [1, 2, 3, 4] : props.array}
        numColumns={4}
        contentContainerStyle={styles.contentContainerStyle}
        columnWrapperStyle={styles.columnStyle}
        key={'hashtagArray'}
        keyExtractor={(item, index) => item?._id}
        ListEmptyComponent={renderEmpty}
        renderItem={renderHashtags}
      />
      <RobotoBold style={styles.myTagText}>My Tags</RobotoBold>
      <FlatList
        data={props.myhashtags}
        numColumns={4}
        contentContainerStyle={styles.contentContainerStyle}
        // columnWrapperStyle={{justifyContent: 'space-between'}}
        key={'myhashtagArray'}
        keyExtractor={(item, index) => item?._id}
        ListEmptyComponent={renderEmpty}
        renderItem={renderMyHashtags}
      />
    </View>
  );
};
export default Hashtags;
