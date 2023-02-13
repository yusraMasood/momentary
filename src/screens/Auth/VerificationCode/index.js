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

const VerificationCode = (props) => {
  const passwordRef = useRef(null);
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');


  const onSubmit=()=>{
    props.navigation.navigate("ResetPassword")
  }
  return (
    <ScreenWrapper style={styles.container}>
      <View style={styles.alignContent}>
      <DamionRegular style={styles.momentaryText}>Momentary</DamionRegular>
      </View>
      <RobotoMedium style={styles.signinText}>Reset Password</RobotoMedium>
      <RobotoRegular style={styles.descResetText}>Check your email address for verification code.</RobotoRegular>
      <InputField
      placeholder={"Enter Verification Code"}
      label={"Verification Code"}
      keyboardType={"number-pad"}
      value={code}
      onChangeText={setCode}
      onSubmitEditing={onSubmit}
      />
      <View style={styles.alignReset}>
      <RobotoRegular style={styles.backLoginText}>Resend Code</RobotoRegular>

      </View>
   
      <CustomButton text={"Continue"}  onPress={onSubmit} alignStyle={styles.continueBtn}/>
      <RippleHOC onPress={()=> props.navigation.navigate("LoginScreen")} style={styles.alignContent}>
      <RobotoRegular style={styles.backLoginText}>Back To Login</RobotoRegular>
      </RippleHOC>
    </ScreenWrapper>
  );
};
export default VerificationCode;
