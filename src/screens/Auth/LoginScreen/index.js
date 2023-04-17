import React, {useRef, useState} from 'react';
import {Text, View, Image,LayoutAnimation,ActivityIndicator} from 'react-native';
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
import ButtonLoading from '../../../components/Loaders/ButtonLoading';
import ErrorMessage from '../../../components/Error/ErrorMessage';
import useAuth from '../../../hooks/useAuth';
import { useGlobalLoader } from '../../../state/general';
import { getBiometricData } from '../../../utils/Validations';

const LoginScreen = props => {
  const passwordRef = useRef(null);
  const {loginUser} =useAuth()
  const isLoading = useGlobalLoader();
  const [email, setEmail] = useState('alex-admin@mailinator.com');
  const [password, setPassword] = useState('password');
  const [deviceId,setDeviceId] =useState("1234")
  const [thumb,setThumb] =useState(false)
  // console.log(message);

  const onSubmit = () => {
    loginUser({email,password})
  };
  const biometric=()=>{
    // getBiometricData()
    if(thumb)
    {

     
    }
    else{

    }
    
  }
  return (
    <ScreenWrapper style={styles.container}>
      <View style={styles.alignContent}>
        <DamionRegular style={styles.momentaryText}>Momentary</DamionRegular>
      </View>
      
      <RobotoMedium style={styles.signinText}>Sign In</RobotoMedium>
      {/* <ErrorMessage
      error={message?.error?.data?.message}/> */}
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
      {isLoading?
      <ButtonLoading/> :
       <CustomButton text={'Login'} onPress={onSubmit}
       />
     } 
      <View style={styles.signupContainer}>
        <RippleHOC onPress={biometric}>
        <Image source={thumb?icons.fingerprint: icons.faceRecognition} style={[thumb?styles.fingerPrintStyle: styles.faceStyle]} />

        </RippleHOC>
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
