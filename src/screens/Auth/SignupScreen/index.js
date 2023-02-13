import React,{useRef,useState} from 'react';
import {Text, View, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { generalImages, icons } from '../../../assets/images';
import CustomButton from '../../../components/Buttons/CustomButton';
import CustomSwitch from '../../../components/CustomSwitch';
import InputField from '../../../components/Inputs/InputField';
import DamionRegular from '../../../components/Texts/DamionRegular';
import RobotoMedium from '../../../components/Texts/RobotoMedium';
import RobotoRegular from '../../../components/Texts/RobotoRegular';
import RippleHOC from '../../../components/wrappers/Ripple';
import ScreenWrapper from '../../../components/wrappers/ScreenWrapper';
import { linearColors } from '../../../utils/appTheme';
import styles from './styles';

const SignupScreen = (props) => {
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
      <RobotoMedium style={styles.signinText}>Sign Up</RobotoMedium>
      <View>
        <Image source={generalImages.userImage} style={styles.userimage}/>
        <LinearGradient colors={linearColors.yellow}>
          <Image source={icons.camera} style={styles.cameraIcon}/>
        </LinearGradient>
      </View>
      <InputField
      placeholder={"Enter Phone"}
      label={"Phone"}
      value={email}
      onChangeText={setEmail}
      onSubmitEditing={()=> passwordRef.current.focus()}
      />
      <InputField
      placeholder={"Enter Email"}
      label={"Email"}
      value={email}
      keyboardType={"email-address"}
      onChangeText={setEmail}
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
      <InputField
       reference={passwordRef}
       onSubmitEditing={onSubmit}
      placeholder={"Enter Password"}
      isPassword
      rightIcon
      label={"Password"}
      />
      
      <CustomButton text={"Sign Up"}  onPress={onSubmit}/>
      <View style={styles.registerContainer}>
<RobotoRegular style={styles.newAuthorText}>Have an account already? 
  </RobotoRegular>

  <RippleHOC onPress={()=> props.navigation.navigate("SignupScreen")}>
<RobotoRegular style={styles.registerText} > Login Now</RobotoRegular>
  </RippleHOC>
      </View>
    </ScreenWrapper>
  );
};
export default SignupScreen;
