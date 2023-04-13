import React, {useRef, useImperativeHandle} from 'react';
import {Image, ImageBackground, View,Text} from 'react-native';
import {generalImages, icons} from '../../../assets/images';
import RobotoMedium from '../../Texts/RobotoMedium';
import RobotoRegular from '../../Texts/RobotoRegular';
import PopupWrapper from '../PopupWrapper';
import styles from './styles';

const EmojiSelectorPopup = props => {
  const popup = useRef(null);

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
  const onNo = () => {
    if (props?.onReject) {
      props?.onReject();
    }
    hide();
  };

  return (
    <PopupWrapper reference={popup} contentContainerStyle={styles.container} childrenStyle={styles.childrenContainer}>
 <View style={styles.view}>
            <Text style={styles.item} onPress={() => {
                hide()
                props.onSelect('😃')}}>
                😃
            </Text>
            <Text style={styles.item} onPress={() => {
                hide()
                props.onSelect('😄')}}>
                😄
            </Text>
            <Text style={styles.item} onPress={() => {
                hide()
                props.onSelect('😁')}}>
                😁
            </Text>
            <Text style={styles.item} onPress={() => {
                hide()
                props.onSelect('😆')}}>
                😆
            </Text>
            <Text style={styles.item} onPress={() => {
                hide()
                props.onSelect('😅')}}>
                😅
            </Text>
            <Text style={styles.item} onPress={() => {
                hide()
                props.onSelect('😂')}}>
                😂
            </Text>
            <Text style={styles.item} onPress={() => {
                hide()
                props.onSelect('🤣')}}>
                🤣
            </Text>
            <Text style={styles.item} onPress={() => {
                hide()
                props.onSelect('😊')}}>
                😊
            </Text>
            <Text style={styles.item} onPress={() => {
                hide()
                props.onSelect('😇')}}>
                😇
            </Text>
            <Text style={styles.item} onPress={() => {
                hide()
                props.onSelect('🙂')}}>
                🙂
            </Text>
            <Text style={styles.item} onPress={() => {
                hide()
                props.onSelect('🙃')}}>
                🙃
            </Text>
            <Text style={styles.item} onPress={() => {
                hide()
                props.onSelect('😉')}}>
                😉
            </Text>
            <Text style={styles.item} onPress={() => {
                hide()
                props.onSelect('😌')}}>
                😌
            </Text>
            <Text style={styles.item} onPress={() => {
                hide()
                props.onSelect('😍')}}>
                😍
            </Text>
            <Text style={styles.item} onPress={() => {
                hide()
                props.onSelect('🥰')}}>
                🥰
            </Text>
            <Text style={styles.item} onPress={() => {
                hide()
                props.onSelect('😘')}}>
                😘
            </Text>
            <Text style={styles.item} onPress={() => {
                hide()
                props.onSelect('😗')}}>
                😗
            </Text>
            <Text style={styles.item} onPress={() => {
                hide()
                props.onSelect('😙')}}>
                😙
            </Text>
            <Text style={styles.item} onPress={() => {
                hide()
                props.onSelect('😚')}}>
                😚
            </Text>
            <Text style={styles.item} onPress={() => {
                hide()
                props.onSelect('😋')}}>
                😋
            </Text>
            <Text style={styles.item} onPress={() => {
                hide()
                props.onSelect('😛')}}>
                😛
            </Text>
            <Text style={styles.item} onPress={() => {
                hide()
                props.onSelect('😝')}}>
                😝
            </Text>
            <Text style={styles.item} onPress={() => {
                hide()
                props.onSelect('😜')}}>
                😜
            </Text>
            <Text style={styles.item} onPress={() => {
                hide()
                props.onSelect('🤪')}}>
                🤪
            </Text>
            <Text style={styles.item} onPress={() => {
                hide()
                props.onSelect('🤨')}}>
                🤨
            </Text>
            <Text style={styles.item} onPress={() => {
                hide()
                props.onSelect('🧐')}}>
                🧐
            </Text>
            <Text style={styles.item} onPress={() => {
                hide()
                props.onSelect('🤓')}}>
                🤓
            </Text>
            <Text style={styles.item} onPress={() => {
                hide()
                props.onSelect('😎')}}>
                😎
            </Text>
            <Text style={styles.item} onPress={() => {
                hide()
                props.onSelect('🤩')}}>
                🤩
            </Text>
            <Text style={styles.item} onPress={() => {
                hide()
                props.onSelect('🥳')}}>
                🥳
            </Text>
            <Text style={styles.item} onPress={() => {
                hide()
                props.onSelect('😏')}}>
                😏
            </Text>
            <Text style={styles.item} onPress={() => {
                hide()
                props.onSelect('😒')}}>
                😒
            </Text>
            <Text style={styles.item} onPress={() => {
                hide()
                props.onSelect('😞')}}>
                😞
            </Text>
            <Text style={styles.item} onPress={() => {
                hide()
                props.onSelect('😔')}}>
                😔
            </Text>
            <Text style={styles.item} onPress={() => {
                hide()
                props.onSelect('😟')}}>
                😟
            </Text>
            <Text style={styles.item} onPress={() => {
                hide()
                props.onSelect('😕')}}>
                😕
            </Text>
            <Text style={styles.item} onPress={() => {
                hide()
                props.onSelect('🙁')}}>
                🙁
            </Text>
            <Text style={styles.item} onPress={() => {
                hide()
                props.onSelect('😣')}}>
                😣
            </Text>
            <Text style={styles.item} onPress={() => {
                hide()
                props.onSelect('😖')}}>
                😖
            </Text>
            <Text style={styles.item} onPress={() => {
                hide()
                props.onSelect('😫')}}>
                😫
            </Text>
            <Text style={styles.item} onPress={() => {
                hide()
                props.onSelect('😩')}}>
                😩
            </Text>
            <Text style={styles.item} onPress={() => {
                hide()
                props.onSelect('🥺')}}>
                🥺
            </Text>
            <Text style={styles.item} onPress={() => {
                hide()
                props.onSelect('😢')}}>
                😢
            </Text>
            <Text style={styles.item} onPress={() => {
                hide()
                props.onSelect('😭')}}>
                😭
            </Text>
            <Text style={styles.item} onPress={() => {
                hide()
                props.onSelect('😤')}}>
                😤
            </Text>
            <Text style={styles.item} onPress={() => {
                hide()
                props.onSelect('😠')}}>
                😠
            </Text>
            <Text style={styles.item} onPress={() => {
                hide()
                props.onSelect('😡')}}>
                😡
            </Text>
            <Text style={styles.item} onPress={() => {
                hide()
                props.onSelect('🤬')}}>
                🤬
            </Text>
            <Text style={styles.item} onPress={() => {
                hide()
                props.onSelect('🤯')}}>
                🤯
            </Text>
            <Text style={styles.item} onPress={() => {
                hide()
                props.onSelect('😳')}}>
                😳
            </Text>
            <Text style={styles.item} onPress={() => {
                hide()
                props.onSelect('🥵')}}>
                🥵
            </Text>
            <Text style={styles.item} onPress={() => {
                hide()
                props.onSelect('🥶')}}>
                🥶
            </Text>
            <Text style={styles.item} onPress={() => {
                hide()
                props.onSelect('😱')}}>
                😱
            </Text>
            <Text style={styles.item} onPress={() => {
                hide()
                props.onSelect('😨')}}>
                😨
            </Text>
            <Text style={styles.item} onPress={() => {
                hide()
                props.onSelect('😰')}}>
                😰
            </Text>
            <Text style={styles.item} onPress={() => {
                hide()
                props.onSelect('😥')}}>
                😥
            </Text>
            <Text style={styles.item} onPress={() => {
                hide()
                props.onSelect('😓')}}>
                😓
            </Text>
            <Text style={styles.item} onPress={() => {
                hide()
                props.onSelect('🤗')}}>
                🤗
            </Text>
            <Text style={styles.item} onPress={() => {
                hide()
                props.onSelect('🤔')}}>
                🤔
            </Text>
            <Text style={styles.item} onPress={() => {
                hide()
                props.onSelect('🤭')}}>
                🤭
            </Text>
            <Text style={styles.item} onPress={() => {
                hide()
                props.onSelect('🤫')}}>
                🤫
            </Text>
            <Text style={styles.item} onPress={() => {
                hide()
                props.onSelect('🤥')}}>
                🤥
            </Text>
            <Text style={styles.item} onPress={() => {
                hide()
                props.onSelect('😶')}}>
                😶
            </Text>
        </View>
    </PopupWrapper>
  );
};
export default EmojiSelectorPopup;
