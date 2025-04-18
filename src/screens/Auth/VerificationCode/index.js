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
import {
  usePostVerifyCodeMutation,
  usePostVerifyEmailMutation,
} from '../../../state/auth';
import {showToast} from '../../../Api/APIHelpers';
import ButtonLoading from '../../../components/Loaders/ButtonLoading';
import ErrorMessage from '../../../components/Error/ErrorMessage';
import useAuth from '../../../hooks/useAuth';
import { useGlobalLoader, useInlineLoader } from '../../../state/general';

const VerificationCode = props => {
  const passwordRef = useRef(null);
  const {email} = props?.route?.params;
  const isLoadingGlobal=useGlobalLoader()
  const isLoading=useInlineLoader()
  const [otp, setOtp] = useState(props?.route?.params?.otp);

  // const [postVerifyEmail, data] = usePostVerifyEmailMutation();
  const {VerifyEmail,VerifyCode} =useAuth()
  // {error,isLoading}

  const onSubmit = () => {

    VerifyCode({email, otp}).then(res => {

      // console.log("response of verification code", res);
      if (res?.message) {
        props.navigation.navigate('ResetPassword', {email, otp});
      }
    });
  };
  const verifyEmail = () => {
    VerifyEmail({email}).then((res)=>{
      if(res?.otp){
        setOtp(res?.otp);
          }
    })
 
  };
  return (
    <ScreenWrapper style={styles.container}>
      <View style={styles.alignContent}>
        <DamionRegular style={styles.momentaryText}>Momentary</DamionRegular>
      </View>
      <RobotoMedium style={styles.signinText}>Verification Code</RobotoMedium>
      <RobotoRegular style={styles.descResetText}>
        Check your email address for verification code.
      </RobotoRegular>
      {/* <ErrorMessage
     error={error?.data?.message}
     
     /> */}
      <InputField
        placeholder={'Enter Verification Code'}
        label={'Verification Code'}
        keyboardType={'number-pad'}
        value={otp}
        onChangeText={setOtp}
        onSubmitEditing={onSubmit}
      />
      
        <View  style={styles.alignReset}>
        {isLoadingGlobal ? (
        <ButtonLoading />
      ) : (
          <RippleHOC onPress={verifyEmail}>
          <RobotoRegular style={styles.backLoginText}>
            Resend Code
          </RobotoRegular>

          </RippleHOC>
      )}</View>
       {isLoading?
      <ButtonLoading/> :

       <CustomButton text={"Continue"}  onPress={onSubmit} alignStyle={styles.continueBtn}/>
    } 

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
export default VerificationCode;
