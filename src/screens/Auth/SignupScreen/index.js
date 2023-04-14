import React,{useRef,useState} from 'react';
import {Text, View, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { generalImages, icons } from '../../../assets/images';
import CustomButton from '../../../components/Buttons/CustomButton';
import InputField from '../../../components/Inputs/InputField';
import DamionRegular from '../../../components/Texts/DamionRegular';
import RobotoMedium from '../../../components/Texts/RobotoMedium';
import RobotoRegular from '../../../components/Texts/RobotoRegular';
import RippleHOC from '../../../components/wrappers/Ripple';
import ScreenWrapper from '../../../components/wrappers/ScreenWrapper';
import { linearColors } from '../../../utils/appTheme';
import styles from './styles';
import { usePostSignupMutation } from '../../../state/auth';
import ImagePicker from '../../../components/Image/ImagePicker';
import ContentContainer from '../../../components/wrappers/ContentContainer';
import {  getCountryCode, validateEmail, validateName } from '../../../utils/Validations';
import Toast from "react-native-toast"
import useAuth from '../../../hooks/useAuth';
import { useGlobalLoader } from '../../../state/general';
import ButtonLoading from '../../../components/Loaders/ButtonLoading';

const SignupScreen = (props) => {
  // const [postSignup]=usePostSignupMutation()
  const {signupUser} =useAuth()
 
  const [email, setEmail] = useState('atlas@gmail.com');
  const isLoading = useGlobalLoader();
  const [fullName,setFullName] =useState("Atlas Corrigan")
  const [phone,setPhone] =useState("3886764444")
  const [password, setPassword] = useState('admin123');
  const [confirmPassword,setConfirmPassword] =useState("admin123")
  const [imageSelection,setImageSelection] =useState(false)
  const [image,setImage]=useState("")
  const [username,setUsername] =useState("RobMcDonnell")
  const usernameArray=["RobMcDonnell","RobMcl213", "RobMcl256","RobMcl856"]

  const emailRef=useRef(null)
  const confirmPasswordRef =useRef(null)
  const passwordRef = useRef(null);
  const phoneRef = useRef(null);
  const usernameRef=useRef(null)

  const onSubmit=()=>{
 
  const response=  signupUser({fullName,email,password,phone,password,confirmPassword,phone}).then((res)=>{
      console.log("res",res);
      // props.navigation.navigate("LoginScreen")

    })
    console.log("Ressss",response);
  }
  const onChangeName = data => {
    if (validateName(data)) {
      setUsername(data);
    } else {
      return;
    }
  };
  const onPressIcon=()=>{
     setImageSelection(true)
  }
 
  
  return (
    <ScreenWrapper style={styles.container}>
      <ContentContainer aware>
      <View style={styles.alignContent}>
      <DamionRegular style={styles.momentaryText}>Momentary</DamionRegular>
      </View>
      <RobotoMedium style={styles.signinText}>Sign Up</RobotoMedium>
      <View>
      
        <Image source={image?.uri?{uri: image?.uri}: generalImages.userImage} style={styles.userimage}/>
        <RippleHOC onPress={onPressIcon} style={styles.cameraMainContainer}>
        <LinearGradient colors={linearColors.yellow} style={styles.cameraContainer}>
          <Image source={icons.camera} style={styles.cameraIcon}/>
        </LinearGradient>

        </RippleHOC>
      </View>
      <InputField
      placeholder={"Enter Full Name"}
      questionIcon
      label={"Full Name"}
      value={fullName}
      keyboardType={"email-address"}
      onChangeText={setFullName}
      onSubmitEditing={()=> usernameRef.current.focus()}
      />
      <InputField
      reference={usernameRef}
      placeholder={"Enter Username"}
      questionIcon
      label={"Username"}
      value={username}
      onSubmitEditing={()=> phoneRef.current.focus()}
      onChangeText={onChangeName}
      />
      <View style={styles.usernameArrayContainer}>
      {usernameArray.map((item,index)=>{
        const focus=username==item
        return(
          <RippleHOC onPress={()=> setUsername(item)} style={[styles.usernameContainer, focus && styles.usernameFocusContainer]} key={index}>
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
      maxLength={13}
      keyboardType={"number-pad"}
      value={phone}
      onChangeText={setPhone}
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
      value={password}
      onChangeText={setPassword}

      isPassword
      rightIcon
      label={"Password"}
      />
      <InputField
       reference={confirmPasswordRef}
       onSubmitEditing={onSubmit}
       questionIcon
       value={confirmPassword}
       onChangeText={setConfirmPassword}
      placeholder={"Enter Confirm Password"}
      isPassword
      rightIcon
      label={"Confirm Password"}
      />
      {isLoading?
    <ButtonLoading/>:
    <CustomButton text={"Sign Up"}  onPress={onSubmit} alignStyle={styles.alignBtn}/>

    }
      <View style={styles.alignContent}>
      <View style={styles.registerContainer}>
<RobotoRegular style={styles.newAuthorText}>Have an account already?{" "}</RobotoRegular>

  <RippleHOC onPress={()=> props.navigation.navigate("LoginScreen")}>
<RobotoRegular style={styles.registerText} >Login Now</RobotoRegular>
  </RippleHOC>
      </View>
      </View>
      </ContentContainer>
      <ImagePicker
      image={image}
      setImage={setImage}
      imageSelection={imageSelection}
      setImageSelection={setImageSelection}
      />

    </ScreenWrapper>
  );
};
export default SignupScreen;
