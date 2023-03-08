import React, {useRef, useImperativeHandle} from 'react';
import {Image, ImageBackground, View} from 'react-native';
import {generalImages, icons, tabIcons} from '../../../assets/images';
import CustomButton from '../../Buttons/CustomButton';
import RobotoMedium from '../../Texts/RobotoMedium';
import RobotoRegular from '../../Texts/RobotoRegular';
import RippleHOC from '../../wrappers/Ripple';
import PopupWrapper from '../PopupWrapper';
import styles from './styles';

const SharePopup = props => {
  const popup = useRef(null);
  const shareArray=[
    {
        title:"Specific People",
        image:tabIcons.friend,
        onPress:()=>{
            if(props.onPressSpecific)
            {
                props.onPressSpecific()
            }
            hide()
        }
    },
    {
        title:"Your Network",
        image:icons.user,
        onPress:()=>{
            if(props.onPressNetwork)
            {
                props.onPressNetwork()
            }
            hide()
        }
    },
    {
        title:"Global Network",
        image:tabIcons.global,
        onPress:()=>{
            if(props.onPressGlobal)
            {
                props.onPressGlobal()
            }
            hide()
        }
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
    <PopupWrapper
      reference={popup}
      childrenStyle={styles.childrenStyle}
      contentContainerStyle={[styles.container,props.styleContent]}
    >
        <RobotoMedium style={styles.shareText}>Share</RobotoMedium>
        {shareArray.map((value,index)=>{
            return(
                <RippleHOC onPress={value.onPress} key={index} style={styles.shareContainer}>
                    <Image source={value.image} style={styles.imageStyle}/>
                    <RobotoRegular style={styles.titleText}>{value?.title}</RobotoRegular>
                </RippleHOC>
            )
        })}
         
    
    </PopupWrapper>
  );
};
export default SharePopup;
