import React, {useRef, useState} from 'react';
import {Text, View, Image} from 'react-native';
import {icons} from '../../../assets/images';
import CustomButton from '../../../components/Buttons/CustomButton';
import CustomSwitch from '../../../components/CustomSwitch';
import InputField from '../../../components/Inputs/InputField';
import DamionRegular from '../../../components/Texts/DamionRegular';
import RobotoMedium from '../../../components/Texts/RobotoMedium';
import RobotoRegular from '../../../components/Texts/RobotoRegular';
import RippleHOC from '../../../components/wrappers/Ripple';
import ScreenWrapper from '../../../components/wrappers/ScreenWrapper';
import styles from './styles';
import {usePostResetPasswordMutation} from '../../../state/auth';

const ResetPassword = props => {
  const passwordRef = useRef(null);
  const {email, otp} = props?.route?.params;
  const [postResetPassword] = usePostResetPasswordMutation();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const onSubmit = () => {
    postResetPassword({email, otp}).then(res => {
      if (res) {
        props.navigation.navigate('LoginScreen');
      }
    });
  };
  return (
    <ScreenWrapper style={styles.container}>
      <View style={styles.alignContent}>
        <DamionRegular style={styles.momentaryText}>Momentary</DamionRegular>
      </View>
      <RobotoMedium style={styles.signinText}>Reset Password</RobotoMedium>
      <InputField
        //  reference={passwordRef}
        placeholder={'Enter Password'}
        isPassword
        value={password}
        onChangeText={setPassword}
        rightIcon
        label={'Password'}
        onSubmitEditing={() => passwordRef.current.focus()}
      />
      <InputField
        reference={passwordRef}
        onSubmitEditing={onSubmit}
        placeholder={'Enter Confirm Password'}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        isPassword
        rightIcon
        label={'Confirm Password'}
      />

      <CustomButton
        text={'Updated Password'}
        onPress={onSubmit}
        alignStyle={styles.continueBtn}
      />
      <RippleHOC
        onPress={() => props.navigation.navigate('LoginScreen')}
        style={styles.alignContent}
      >
        <RobotoRegular style={styles.backLoginText}>
          Back To Login
        </RobotoRegular>
      </RippleHOC>
    </ScreenWrapper>
  );
};
export default ResetPassword;
