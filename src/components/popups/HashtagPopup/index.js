import React, {useRef, useImperativeHandle} from 'react';
import {Image, ImageBackground, View} from 'react-native';
import {generalImages, icons} from '../../../assets/images';
import CustomButton from '../../Buttons/CustomButton';
import InputField from '../../Inputs/InputField';
import Hashtags from '../../ReusableComponent/Hashtags';
import RobotoBold from '../../Texts/RobotoBold';
import RobotoMedium from '../../Texts/RobotoMedium';
import RippleHOC from '../../wrappers/Ripple';
import PopupWrapper from '../PopupWrapper';
import styles from './styles';

const HashtagPopup = props => {
  const popup = useRef(null);
  const hashtagArray=[1,2,3,4,5,6,7,8]

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
    <PopupWrapper reference={popup} childrenStyle={styles.container} contentContainerStyle={styles.contentContainer}>
        <RobotoMedium style={styles.hashtagHeading}>Add Hashtags</RobotoMedium>
        <InputField
        inputContainerIcon={styles.contentInput}
        inputContainerStyle={styles.inputContainer}
        label={"search"}
        placeholder={"Search here..."}
        />
        <View style={styles.hashtagsMainContainer}>
          <Hashtags />
        {/* {hashtagArray.map((value,index)=>{
            return(
                <View style={styles.hashtagContainer}>
                  <Image source={icons.cross} style={styles.crossimg}/>
                    <RobotoBold style={styles.hashtagText}>#sports</RobotoBold>
                </View>

            )
        })} */}
       
        </View>
        <CustomButton text={"Publish"}
        onPress={onYes}
        textStyle={styles.btnText} alignStyle={styles.alignBtn} style={styles.btnPublish}/>

    </PopupWrapper>
  );
};
export default HashtagPopup;
