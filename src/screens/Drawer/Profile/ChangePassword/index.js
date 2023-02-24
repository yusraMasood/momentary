import React, {useRef} from 'react';
import {View} from 'react-native';
import CustomButton from '../../../../components/Buttons/CustomButton';
import InputField from '../../../../components/Inputs/InputField';
import SuccessPopup from '../../../../components/popups/SuccessPopup';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
import styles from './styles';

const ChangePassword = props => {
  const newPasswordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const successRef = useRef(null);

  const onSubmit = () => {
    successRef.current.show();
    // props.navigation.navigate("MyProfile")
  };
  return (
    <ScreenWrapper style={styles.container}>
      <InputField
        placeholder={'Enter Password'}
        label={'Password'}
        onSubmitEditing={() => newPasswordRef.current.focus()}
      />
      <InputField
        reference={newPasswordRef}
        placeholder={'Enter New Password'}
        label={'New Password'}
        onSubmitEditing={() => confirmPasswordRef.current.focus()}
      />
      <InputField
        reference={confirmPasswordRef}
        placeholder={'Enter Confirm Password'}
        label={'Confirm Password'}
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
        onAccept={()=>props.navigation.navigate("MyProfile")}
      />
    </ScreenWrapper>
  );
};
export default ChangePassword;
