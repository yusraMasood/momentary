import React,{useRef,useState} from 'react';
import {Text, View, Image} from 'react-native';
import { icons } from '../../../assets/images';
import CustomButton from '../../../components/Buttons/CustomButton';
import CustomSwitch from '../../../components/CustomSwitch';
import InputField from '../../../components/Inputs/InputField';
import DamionRegular from '../../../components/Texts/DamionRegular';
import RobotoMedium from '../../../components/Texts/RobotoMedium';
import RobotoRegular from '../../../components/Texts/RobotoRegular';
import RippleHOC from '../../../components/wrappers/Ripple';
import ScreenWrapper from '../../../components/wrappers/ScreenWrapper';
import styles from './styles';
import { usePostVerifyEmailMutation } from '../../../state/auth';
import ButtonLoading from '../../../components/Loaders/ButtonLoading';
import ErrorMessage from '../../../components/Error/ErrorMessage';

const ForgotPassword = (props) => {
  
  const [email, setEmail] = useState('alex-admin@mailinator.com');
  const [postVerifyEmail,{error,isLoading}]=usePostVerifyEmailMutation()
  const onSubmit=()=>{
    postVerifyEmail({email}).then((res)=>{
      if(res?.data?.otp){
        props.navigation.navigate("VerificationCode",{otp:res?.data?.otp,email})
      }
    })
  }
  return (
    <ScreenWrapper style={styles.container}>
      <View style={styles.alignContent}>
      <DamionRegular style={styles.momentaryText}>Momentary</DamionRegular>
      </View>
   
      <RobotoMedium style={styles.signinText}>Forgot Password</RobotoMedium>
      <ErrorMessage
     error={error?.data?.message}
     
     />
      <InputField
      placeholder={"Enter Email"}
      label={"Email"}
      value={email}
      onChangeText={setEmail}
      onSubmitEditing={onSubmit}
      />
    {isLoading?
      <ButtonLoading/> :

       <CustomButton text={"Continue"}  onPress={onSubmit} alignStyle={styles.continueBtn}/>
    }
     
      <RippleHOC onPress={()=> props.navigation.navigate("LoginScreen")} style={styles.alignContent}>
      <RobotoRegular style={styles.backLoginText}>Back To Login</RobotoRegular>
      </RippleHOC>
    </ScreenWrapper>
  );
};
export default ForgotPassword;
