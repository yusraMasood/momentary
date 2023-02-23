import React, {useRef} from 'react';
import {View, FlatList, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {generalImages, icons} from '../../../../assets/images';
import CustomButton from '../../../../components/Buttons/CustomButton';
import InputField from '../../../../components/Inputs/InputField';
import RobotoMedium from '../../../../components/Texts/RobotoMedium';
import RobotoRegular from '../../../../components/Texts/RobotoRegular';
import RippleHOC from '../../../../components/wrappers/Ripple';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
import {linearColors} from '../../../../utils/appTheme';
import styles from './styles';

const EditProfile = props => {
  const phoneRef = useRef(null);

  const onSubmit = () => {
    props.navigation.goBack();
  };

  return (
    <ScreenWrapper style={styles.container}>
      <View>
        <Image source={generalImages.userImage} style={styles.userImg} />
        <LinearGradient colors={linearColors.yellow} style={styles.cameraContainer}>
          <Image source={icons.camera} style={styles.cameraStyle} />
        </LinearGradient>
      </View>
      <RippleHOC onPress={()=> props.navigation.navigate("ChangePassword")}>
      <RobotoMedium style={styles.passwordText}>Change Password</RobotoMedium>
      </RippleHOC>
      <InputField
        placeholder={'Enter Name'}
        label={'Name'}
        onSubmitEditing={() => phoneRef.current.focus()}
      />
      <InputField
        reference={phoneRef}
        placeholder={'Enter Phone No'}
        label={'Phone No'}
        onSubmitEditing={onSubmit}
      />
      <View style={styles.itemContainer}>
        <RobotoRegular style={styles.titleText}>Email</RobotoRegular>
        <RobotoRegular style={styles.valueText}>elsa@email.com</RobotoRegular>
      </View>
      <CustomButton
        alignStyle={styles.btnContainer}
        onPress={onSubmit}
        text={'Update Profile'}
      />
    </ScreenWrapper>
  );
};
export default EditProfile;
