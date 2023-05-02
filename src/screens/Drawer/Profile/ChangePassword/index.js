import React, {useRef, useState} from 'react';
import {View} from 'react-native';
import CustomButton from '../../../../components/Buttons/CustomButton';
import InputField from '../../../../components/Inputs/InputField';
import SuccessPopup from '../../../../components/popups/SuccessPopup';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
import styles from './styles';
import {usePostChangePasswordMutation} from '../../../../state/account';

const ChangePassword = props => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const newPasswordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const successRef = useRef(null);
  const [postChangePassword, message] = usePostChangePasswordMutation();
  const onSubmit = () => {
    // successRef.current.show();
    postChangePassword({password, newPassword}).then(res => {
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
      <CustomButton
        alignStyle={styles.btnContainer}
        onPress={onSubmit}
        text={'Update Password'}
      />
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
