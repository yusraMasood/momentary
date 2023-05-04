import React, {useRef, useState} from 'react';
import {Text, View, Image, FlatList} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {generalImages, icons} from '../../../assets/images';
import CustomButton from '../../../components/Buttons/CustomButton';
import InputField from '../../../components/Inputs/InputField';
import DamionRegular from '../../../components/Texts/DamionRegular';
import RobotoMedium from '../../../components/Texts/RobotoMedium';
import RobotoRegular from '../../../components/Texts/RobotoRegular';
import RippleHOC from '../../../components/wrappers/Ripple';
import ScreenWrapper from '../../../components/wrappers/ScreenWrapper';
import {linearColors} from '../../../utils/appTheme';
import styles from './styles';
import ImagePicker from '../../../components/Image/ImagePicker';
import ContentContainer from '../../../components/wrappers/ContentContainer';
import {
  getCountryCode,
  validateEmail,
  validateName,
} from '../../../utils/Validations';
import Toast from 'react-native-toast';
import useAuth from '../../../hooks/useAuth';
import {useGlobalLoader, useInlineLoader} from '../../../state/general';
import ButtonLoading from '../../../components/Loaders/ButtonLoading';
import {useGetUsernameSuggestionQuery} from '../../../state/auth';
import useProfile from '../../../hooks/useProfile';
import CustomSkeleton from '../../../components/Loaders/CustomSkeleton';
import UsernameCard from '../../../components/Cards/UsernameCard';

const SignupScreen = props => {
  const {signupUser} = useAuth();
  const [fullName, setFullName] = useState('');

  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState(null);
  const [phone, setPhone] = useState('');
  const [imageSelection, setImageSelection] = useState(false);
  const [username, setUsername] = useState(
    data?.usernames ? data?.usernames[0] : '',
  );
  const imageLoader =useInlineLoader()
  const {data, isLoading, refetch, error} = useGetUsernameSuggestionQuery({
    fullName,
  });
  const [deviceToken, setDeviceToken] = useState('12343');

  const isLoader = useGlobalLoader();
  let searchTimeOut;

  const emailRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const passwordRef = useRef(null);
  const phoneRef = useRef(null);
  const usernameRef = useRef(null);

  const onSubmit = () => {
    signupUser({
      fullName,
      username,
      email,
      password,
      phone,
      password,
      confirmPassword,
      deviceToken,
      image,
    }).then(res => {
      if (res?.token) {
        props.navigation.navigate('LoginScreen');
      }
    });
  };

  const onPressIcon = () => {
    setImageSelection(true);
  };
  const renderUsernames = ({item, index}) => {
    const focus = username == item;
    return (
      <UsernameCard
        focus={focus}
        name={item}
        isLoading={isLoading}
        setUsername={setUsername}
      />
    );
  };
  const onChangeName = data => {
    if (validateName(data)) {
      setFullName(data);
    } else {
      return;
    }
  };
  const handleUsername = text => {
    setUsername(text);
    if (searchTimeOut) {
      clearTimeout(searchTimeOut);
    }
    searchTimeOut = setTimeout(() => {
      refetch();
    }, 500);
  };
  const getUsernameList = () => {
    return (
      <View>
        <FlatList
          data={isLoading ? [1, 2, 3, 4] : data?.usernames}
          renderItem={renderUsernames}
          contentContainerStyle={styles.contentContainer}
          horizontal={true}
          keyExtractor={item => item}
          key={'usernameArray'}
        />
      </View>
    );
  };
  return (
    <ScreenWrapper style={styles.container}>
      <ContentContainer aware>
        <View style={styles.alignContent}>
          <DamionRegular style={styles.momentaryText}>Momentary</DamionRegular>
        </View>
        <RobotoMedium style={styles.signinText}>Sign Up</RobotoMedium>
          {imageLoader?
        <ButtonLoading/>
        :
        <View>
          <Image
            source={
              image?.thumbnail
                ? {uri: image?.thumbnail}
                : generalImages.userImage
            }
            style={styles.userimage}
          />
          <RippleHOC onPress={onPressIcon} style={styles.cameraMainContainer}>
            <LinearGradient
              colors={linearColors.yellow}
              style={styles.cameraContainer}>
              <Image source={icons.camera} style={styles.cameraIcon} />
            </LinearGradient>
          </RippleHOC>

          </View>  
        }
          
    
        <InputField
          placeholder={'Enter Full Name'}
          questionIcon
          label={'Full Name'}
          // onEndEditing={refetch}
          // onBlur={refetch}
          value={fullName}
          keyboardType={'email-address'}
          onChangeText={onChangeName}
          onSubmitEditing={() => usernameRef.current.focus()}
        />
        <InputField
          reference={usernameRef}
          placeholder={'Enter Username'}
          questionIcon
          label={'Username'}
          value={username}
          onSubmitEditing={() => phoneRef.current.focus()}
          onChangeText={setUsername}
        />
        {data?.usernames && getUsernameList()}

        <InputField
          reference={phoneRef}
          placeholder={'Enter Phone'}
          questionIcon
          label={'Phone'}
          maxLength={13}
          keyboardType={'number-pad'}
          value={phone}
          onChangeText={setPhone}
          onSubmitEditing={() => emailRef.current.focus()}
        />
        <InputField
          reference={emailRef}
          placeholder={'Enter Email Address'}
          questionIcon
          label={'Email'}
          value={email}
          keyboardType={'email-address'}
          onChangeText={setEmail}
          onSubmitEditing={() => passwordRef.current.focus()}
        />
        <InputField
          reference={passwordRef}
          //  onSubmitEditing={onSubmit}
          questionIcon
          placeholder={'Enter Password'}
          onSubmitEditing={() => confirmPasswordRef.current.focus()}
          value={password}
          onChangeText={setPassword}
          isPassword
          rightIcon
          label={'Password'}
        />
        <InputField
          reference={confirmPasswordRef}
          onSubmitEditing={onSubmit}
          questionIcon
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          placeholder={'Enter Confirm Password'}
          isPassword
          rightIcon
          label={'Confirm Password'}
        />
        {isLoader ? (
          <ButtonLoading />
        ) : (
          <CustomButton
            text={'Sign Up'}
            onPress={onSubmit}
            alignStyle={styles.alignBtn}
          />
        )}
        <View style={styles.alignContent}>
          <View style={styles.registerContainer}>
            <RobotoRegular style={styles.newAuthorText}>
              Have an account already?{' '}
            </RobotoRegular>

            <RippleHOC onPress={() => props.navigation.navigate('LoginScreen')}>
              <RobotoRegular style={styles.registerText}>
                Login Now
              </RobotoRegular>
            </RippleHOC>
          </View>
        </View>
      </ContentContainer>
      <ImagePicker
        image={image}
        setImage={setImage}
        imageSelection={imageSelection}
        setImageSelection={setImageSelection}
        entityType={"profile"}
      />
    </ScreenWrapper>
  );
};
export default SignupScreen;
