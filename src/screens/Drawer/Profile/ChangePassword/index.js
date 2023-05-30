import React, {useRef, useState} from 'react';
import {View} from 'react-native';
import CustomButton from '../../../../components/Buttons/CustomButton';
import InputField from '../../../../components/Inputs/InputField';
import SuccessPopup from '../../../../components/popups/SuccessPopup';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
import styles from './styles';
import {usePostChangePasswordMutation} from '../../../../state/account';
import ButtonLoading from '../../../../components/Loaders/ButtonLoading';
import useProfile from '../../../../hooks/useProfile';
import { useGlobalLoader } from '../../../../state/general';
import { Toast } from '../../../../Api/APIHelpers';

const ChangePassword = props => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const newPasswordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const successRef = useRef(null);
  // const [postChangePassword, {isLoading}] = usePostChangePasswordMutation();
  const isLoading= useGlobalLoader()
  const {changePassword} =useProfile()
  const onSubmit = () => {
    // successRef.current.show();
    changePassword({password, newPassword,confirmPassword}).then(res => {
      // console.log(" response of changePassword",res);
      // Toast.success(res?.message)
      props.navigation.goBack()
    });
  };
  return (
    <ScreenWrapper style={styles.container}>
      <InputField
        placeholder={'Enter Password'}
        label={'Password'}
        isPassword
        rightIcon
        value={password}
        onChangeText={setPassword}
        onSubmitEditing={() => newPasswordRef.current.focus()}
      />
      <InputField
        reference={newPasswordRef}
        placeholder={'Enter New Password'}
        label={'New Password'}
        isPassword
        rightIcon
        value={newPassword}
        onChangeText={setNewPassword}
        onSubmitEditing={() => confirmPasswordRef.current.focus()}
      />
      <InputField
        reference={confirmPasswordRef}
        placeholder={'Enter Confirm Password'}
        label={'Confirm Password'}
        value={confirmPassword}
        isPassword
        rightIcon
        onChangeText={setConfirmPassword}
        onSubmitEditing={onSubmit}
      />
      {isLoading?
    <ButtonLoading/>:
    <CustomButton
      alignStyle={styles.btnContainer}
      onPress={onSubmit}
      text={'Update Password'}
    />

    }
      <SuccessPopup
        title={'Success'}
        desc={'Your password has been updated\nsuccessfully.'}
        reference={successRef}
        onAccept={() => props.navigation.navigate('MyProfile')}
      />
    </ScreenWrapper>
  );
};
export default ChangePassword;
