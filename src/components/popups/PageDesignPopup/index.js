import React, {useRef, useImperativeHandle} from 'react';
import {Image, ImageBackground, View} from 'react-native';
import {generalImages, icons} from '../../../assets/images';
import BasicButton from '../../Buttons/BasicButton';
import CustomButton from '../../Buttons/CustomButton';
import RobotoMedium from '../../Texts/RobotoMedium';
import RobotoRegular from '../../Texts/RobotoRegular';
import RippleHOC from '../../wrappers/Ripple';
import PopupWrapper from '../PopupWrapper';
import styles from './styles';

const PageDesignPopup = props => {
  const popup = useRef(null);
const pageDesignArray=[
  {
    title:"Dotted",
    image: generalImages.pageDesign
  },
  {
    title:"Grid",
    image: generalImages.pageDesign
  },
  {
    title:"Lined",
    image: generalImages.pageDesign
  },
  {
    title:"Plain",
    image: generalImages.pageDesign
  },
]
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


  return (
    <PopupWrapper reference={popup} contentContainerStyle={styles.container} childrenStyle={styles.childrenContainer}>
<RobotoMedium style={styles.pageText}>Select Page Designs</RobotoMedium>
{pageDesignArray.map((item,index)=>{
  return(
    <RippleHOC onPress={onYes} style={styles.designContainer}>
      <RobotoRegular style={styles.titleText}>{item?.title}</RobotoRegular>
      <View style={styles.designImageContainer}>
      <Image source={item.image} style={styles.designImage}/>

      </View>
    </RippleHOC>
  )
})}
    </PopupWrapper>
  );
};
export default PageDesignPopup;
