import React, {useRef, useImperativeHandle} from 'react';
import {FlatList} from 'react-native';
import PopupWrapper from '../PopupWrapper';
import styles from './styles';
import EuclidCircularARegular from '../../Texts/EuclidCircularARegular';
import RippleHOC from '../../wrappers/Ripple';

const CustomFontSelector = props => {
  const customFonts = ['Damion', 'Rubik', 'Birth Stone'];
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
  const renderFonts = ({item}) => {
    return (
      <RippleHOC onPress={()=> hide()} style={styles.itemContainer}>
        <EuclidCircularARegular style={styles.textStyle}>
          {item}
        </EuclidCircularARegular>
      </RippleHOC>
    );
  };
  return (
    <PopupWrapper
      reference={popup}
      contentContainerStyle={styles.container}
      childrenStyle={styles.childrenContainer}
    >
      <FlatList data={customFonts} renderItem={renderFonts}
      key={"CustomFontArray"}
      keyExtractor={(item,index)=> index}
      />
    </PopupWrapper>
  );
};
export default CustomFontSelector;
