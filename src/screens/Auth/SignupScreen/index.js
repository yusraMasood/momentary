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
import { usePostSignupMutation } from '../../../state/auth';

const SignupScreen = (props) => {
  const [postSignup]=usePostSignupMutation()
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [itemIndex,setItemIndex] =useState('RobMcDonnell')
  const [username,setUsername] =useState(itemIndex?itemIndex: "")
  const usernameArray=["RobMcDonnell","RobMcl213", "RobMcl256","RobMcl856"]

  const emailRef=useRef(null)
  const confirmPasswordRef =useRef(null)
  const passwordRef = useRef(null);
  const phoneRef = useRef(null);




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
        <LinearGradient colors={linearColors.yellow} style={styles.cameraContainer}>
          <Image source={icons.camera} style={styles.cameraIcon}/>
        </LinearGradient>
      </View>
      <InputField
      placeholder={"Enter Username"}
      questionIcon
      label={"Username"}
      value={username}
      onSubmitEditing={()=> phoneRef.current.focus()}
      onChangeText={setUsername}
      />
      <View style={styles.usernameArrayContainer}>
      {usernameArray.map((item,index)=>{
        const focus=itemIndex==item
        return(
          <RippleHOC onPress={()=> setItemIndex(item)} style={[styles.usernameContainer, focus && styles.usernameFocusContainer]} key={index}>
            <RobotoRegular style={[styles.usernameText, focus && styles.usernameFocusText]}>{item}</RobotoRegular>
          </RippleHOC>
        )
      })}
      </View>
      <InputField
      reference={phoneRef}
      placeholder={"Enter Phone"}
      questionIcon
      label={"Phone"}
      keyboardType={"number-pad"}
      value={email}
      onChangeText={setEmail}
      onSubmitEditing={()=> emailRef.current.focus()}
      />
      <InputField
      reference={emailRef}
      placeholder={"Enter Email Address"}
      questionIcon
      label={"Email"}
      value={email}
      keyboardType={"email-address"}
      onChangeText={setEmail}
      onSubmitEditing={()=> passwordRef.current.focus()}
      />
       <InputField
       reference={passwordRef}
      //  onSubmitEditing={onSubmit}
       questionIcon
      placeholder={"Enter Password"}
      onSubmitEditing={()=> confirmPasswordRef.current.focus()}

      isPassword
      rightIcon
      label={"Password"}
      />
      <InputField
       reference={confirmPasswordRef}
       onSubmitEditing={onSubmit}
       questionIcon
      placeholder={"Enter Confirm Password"}
      isPassword
      rightIcon
      label={"Confirm Password"}
      />
      
      <CustomButton text={"Sign Up"}  onPress={onSubmit} alignStyle={styles.alignBtn}/>
      <View style={styles.alignContent}>
      <View style={styles.registerContainer}>
<RobotoRegular style={styles.newAuthorText}>Have an account already?{" "}</RobotoRegular>

  <RippleHOC onPress={()=> props.navigation.navigate("LoginScreen")}>
<RobotoRegular style={styles.registerText} >Login Now</RobotoRegular>
  </RippleHOC>
      </View>
      </View>
    </ScreenWrapper>
  );
};
export default SignupScreen;
