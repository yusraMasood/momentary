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

const LoginScreen = (props) => {
  const passwordRef = useRef(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const onSubmit=()=>{
    props.navigation.navigate("MainNavigator")
  }
  return (
    <ScreenWrapper style={styles.container}>
      <View style={styles.alignContent}>
      <DamionRegular style={styles.momentaryText}>Momentary</DamionRegular>
      </View>
      <RobotoMedium style={styles.signinText}>Sign In</RobotoMedium>
      <InputField
      placeholder={"Enter Email Address"}
      label={"Email"}
      value={email}
      onChangeText={setEmail}
      keyboardType={"email-address"}
      onSubmitEditing={()=> passwordRef.current.focus()}
      />
       <InputField
       reference={passwordRef}
       onSubmitEditing={onSubmit}
      placeholder={"Enter Password"}
      isPassword
      rightIcon
      label={"Password"}
      />
      <View style={styles.forgotAndRememberPasswordContainer}>
        <View style={styles.switchContainer}>
      <CustomSwitch para="Remember me" />
      <RobotoRegular style={styles.rememberText}>Remember Me </RobotoRegular>
      
        </View>
        <RippleHOC onPress={()=> props.navigation.navigate("ForgotPassword")}>
      <RobotoRegular style={styles.forgotPasswordText}>Forgot Your Password?</RobotoRegular>
      </RippleHOC>
      </View>
      <CustomButton text={"Login"}  onPress={onSubmit}/>
      <View style={styles.signupContainer}>
      <Image source={icons.fingerprint} style={styles.fingerPrintStyle}/>
      <View style={styles.registerContainer}>
<RobotoRegular style={styles.newAuthorText}>New Author? {" "} 
  </RobotoRegular>

  <RippleHOC onPress={()=> props.navigation.navigate("SignupScreen")}>
<RobotoRegular style={styles.registerText} >Register here</RobotoRegular>
  </RippleHOC>
      </View>
      <RippleHOC >
      <RobotoRegular style={styles.faceRecognotionText}>Face Recognition</RobotoRegular>
      </RippleHOC>
      </View>
    </ScreenWrapper>
  );
};
export default LoginScreen;
