import React, {useRef, useImperativeHandle} from 'react';
import {FlatList} from 'react-native';
import PopupWrapper from '../PopupWrapper';
import styles from './styles';
import EuclidCircularARegular from '../../Texts/EuclidCircularARegular';
import RippleHOC from '../../wrappers/Ripple';
import { setFont } from '../../../state/auth';
import { useDispatch } from 'react-redux';

const CustomFontSelector = props => {
  const dispatch=useDispatch()
  const customFonts = [{
    fontName:"Poppins",
    style:`@font-face {
      font-family: 'Oswald';
      src: url('Oswald-Light.woff2') format('woff2'),
          url('Oswald-Light.woff') format('woff');
      font-weight: 300;
      font-style: normal;
      font-display: swap;
  }
  `
  },
  {
    fontName:"Damion",
    style:` @font-face {
        font-family: 'Damion';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/damion/v14/hv-XlzJ3KEUe_YZkamw2.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }`
  }
];
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
  const selectFont=(item)=>{
    dispatch(setFont(item)) 
    hide()
  }
  const renderFonts = ({item}) => {
    return (
      <RippleHOC onPress={()=>selectFont(item)} style={styles.itemContainer}>
        <EuclidCircularARegular style={styles.textStyle}>
          {item?.fontName}
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
