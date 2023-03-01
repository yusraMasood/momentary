import React, {useRef,useState} from 'react';
import {View,FlatList} from 'react-native';
import PagerView from 'react-native-pager-view';
import FriendRequestCard from '../../../../components/Cards/FriendRequestCard';
import SearchInput from '../../../../components/Inputs/SearchInput';
import DamionRegular from '../../../../components/Texts/DamionRegular';
import RippleHOC from '../../../../components/wrappers/Ripple';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
import styles from './styles';

const FriendRequest = () => {
  const pagerRef = useRef();
  const [page, setPage] = useState(0);

  const renderFriendCard = () => {
    return <FriendRequestCard />;
  };
  return (
    <ScreenWrapper style={styles.container}>
      <SearchInput />
      {/* <PageViewButton
        data={[1, 2, 3, 4]}
        // updateData={onPressCategory}
        reference={pagerRef}
        // loader={refreshing}
      /> */}
      <RippleHOC
        onPress={() => {
          pagerRef.current.setPage(page + 1);
          //   setPageIndex();
        }}
        style={[styles.btnContainer]}
      >
        <View style={[styles.iconContainer,  styles.focusCategory]}>
          {/* <Image source={item?.image? {uri: base_urlImage+item?.image}: icons.placeholder} style={styles.iconStyle} /> */}
        </View>
        <DamionRegular style={styles.titleText}>
          {/* {item?.name} */}
        </DamionRegular>
      </RippleHOC>
      <PagerView
        ref={pagerRef}
        style={styles.pagerView}
        initialPage={0}
        scrollEnabled={false}
      >
        <View key="1">
          <FlatList
            data={[1, 2, 3, 4]}
            key={'serviceArrayScreen'}
            keyExtractor={(item, index) => item?._id}
            renderItem={renderFriendCard}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.contentContainer}
          />
        </View>
        <View key="2">
          <FlatList
            data={[1, 2, 3, 4]}
            key={'serviceArrayScreen'}
            keyExtractor={(item, index) => item?._id}
            renderItem={renderFriendCard}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.contentContainer}
          />
        </View>
        <View key="3">
          <FlatList
            data={[1, 2, 3, 4]}
            key={'serviceArrayScreen'}
            keyExtractor={(item, index) => item?._id}
            renderItem={renderFriendCard}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.contentContainer}
          />
        </View>
      </PagerView>
    </ScreenWrapper>
  );
};
export default FriendRequest;
