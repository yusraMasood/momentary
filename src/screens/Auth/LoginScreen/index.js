import React, {useRef, useState} from 'react';
import {Text, View, Image,LayoutAnimation,ActivityIndicator} from 'react-native';
import {icons} from '../../../assets/images';
import CustomButton from '../../../components/Buttons/CustomButton';
import CustomSwitch from '../../../components/CustomSwitch';
import InputField from '../../../components/Inputs/InputField';
import ReactNativeBiometrics, { BiometryTypes } from 'react-native-biometrics'
import DamionRegular from '../../../components/Texts/DamionRegular';
import RobotoMedium from '../../../components/Texts/RobotoMedium';
import RobotoRegular from '../../../components/Texts/RobotoRegular';
import RippleHOC from '../../../components/wrappers/Ripple';
import ScreenWrapper from '../../../components/wrappers/ScreenWrapper';
import styles from './styles';
import {  setToken, usePostLoginMutation } from '../../../state/auth';
import Toast from "react-native-toast"
import ButtonLoading from '../../../components/Loaders/ButtonLoading';
import { validateEmail } from '../../../utils/Validations';
import { useDispatch } from 'react-redux';
import ErrorMessage from '../../../components/Error/ErrorMessage';

const LoginScreen = props => {
  const passwordRef = useRef(null);
  const dispatch=useDispatch()
  const [postLogin,message]=usePostLoginMutation()
  const [email, setEmail] = useState('alex-admin@mailinator.com');
  const [password, setPassword] = useState('password');
  const [thumb,setThumb] =useState(false)

  console.log(message);

  // {isLoading,error,isSuccess} 
  const onSubmit = () => {
    // getBiometricData()
    if (email == '') {
      return Toast.show('Please enter your email address');
    }
    if (!validateEmail(email)) {
      return Toast.show('Please enter valid email address');
    }
    if (password == '') {
      return Toast.show('Please enter your password');
    }
    postLogin({email,password,role:"admin"}).then((res)=>{
      console.log("tokneee",res);
      // dispatch(setToken("dkpdopd"))
      if(res?.data?.token)
      {
        dispatch(setToken(res?.data?.token))

      }
    })
  
  };
  return (
    <ScreenWrapper style={styles.container}>
      <View style={styles.alignContent}>
        <DamionRegular style={styles.momentaryText}>Momentary</DamionRegular>
      </View>
      
      <RobotoMedium style={styles.signinText}>Sign In</RobotoMedium>
      {/* <ErrorMessage
      error={error?.data?.message}/> */}
      <InputField
        placeholder={'Enter Email Address'}
        label={'Email'}
        value={email}
        onChangeText={setEmail}
        keyboardType={'email-address'}
        onSubmitEditing={() => passwordRef.current.focus()}
      />
      <InputField
        reference={passwordRef}
        onSubmitEditing={onSubmit}
        placeholder={'Enter Password'}
        value={password}
        onChangeText={setPassword}
        isPassword
        rightIcon
        label={'Password'}
      />
      <View style={styles.forgotAndRememberPasswordContainer}>
        <View style={styles.switchContainer}>
          <CustomSwitch para="Remember me" />
          <RobotoRegular style={styles.rememberText}>
            Remember Me{' '}
          </RobotoRegular>
        </View>
        <RippleHOC onPress={() => props.navigation.navigate('ForgotPassword')}>
          <RobotoRegular style={styles.forgotPasswordText}>
            Forgot Your Password?
          </RobotoRegular>
        </RippleHOC>
      </View>
      {/* {isLoading?
      <ButtonLoading/> : */}
       <CustomButton text={'Login'} onPress={onSubmit}
       />
    {/* } */}
      <View style={styles.signupContainer}>
        <Image source={thumb?icons.fingerprint: icons.faceRecognition} style={[thumb?styles.fingerPrintStyle: styles.faceStyle]} />
        <View style={styles.registerContainer}>
          <RobotoRegular style={styles.newAuthorText}>
            New Author?{' '}
          </RobotoRegular>

          <RippleHOC onPress={() => props.navigation.navigate('SignupScreen')}>
            <RobotoRegular style={styles.registerText}>
              Register here
            </RobotoRegular>
          </RippleHOC>
        </View>
        <RippleHOC onPress={()=> {
          LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
          setThumb(!thumb)}}>
          <RobotoRegular style={styles.faceRecognotionText}>
            {thumb?"Face Recognition":"Biometric"}
          </RobotoRegular>
        </RippleHOC>
      </View>
    </ScreenWrapper>
  );
};
export default LoginScreen;

const getBiometricData=async()=>{
  const rnBiometrics = new ReactNativeBiometrics()
//   rnBiometrics.simplePrompt({promptMessage: 'Confirm fingerprint'})
// .then((resultObject) => {
//   const { success } = resultObject

//   if (success) {
//     console.log('successful biometrics provided')
//   } else {
//     console.log('user cancelled biometric prompt')
//   }
// })
// .catch(() => {
//   console.log('biometrics failed')
// })
//   rnBiometrics.createKeys()
// .then((resultObject) => {
//   const { publicKey } = resultObject
//   console.log(publicKey)
//   sendPublicKeyToServer(publicKey)
// })
//   const { biometryType } = await rnBiometrics.isSensorAvailable()
//   console.log(biometryType);
//   rnBiometrics.isSensorAvailable()
// .then((resultObject) => {
//   const { available, biometryType } = resultObject

//   if (available && biometryType === BiometryTypes.TouchID) {
//     console.log('TouchID is supported')
//   } else if (available && biometryType === BiometryTypes.FaceID) {
//     console.log('FaceID is supported')
//   } else if (available && biometryType === BiometryTypes.Biometrics) {
//     console.log('Biometrics is supported')
//   } else {
//     console.log('Biometrics not supported')
//   }
// })
//   if (biometryType === BiometryTypes.Biometrics) {

//     //do something face id specific
//   }

}