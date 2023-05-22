import {useState} from 'react';
import {useDispatch} from 'react-redux';
import { Platform } from 'react-native'
import {
  setToken,
  usePostLoginMutation,
  usePostResetPasswordMutation,
  usePostSignupMutation,
  usePostVerifyEmailMutation,
} from '../../state/auth';
import {validateEmail} from '../../utils/Validations';
import {Toast, getMessage} from '../../Api/APIHelpers';
import {toggleGlobalLoader} from '../../state/general';
import { useGetProfileQuery } from '../../state/account';

export default () => {
  const [postLogin,message] = usePostLoginMutation();
  const [postSignup] = usePostSignupMutation();
  const [postVerifyEmail]=usePostVerifyEmailMutation()
  const [postResetPassword] = usePostResetPasswordMutation();
  const dispatch = useDispatch();

  console.log("message",message);
    const loginUser = async ({email, password}) => {
   

    try {
      if (email.trim() === '') {
        Toast.error('Please Enter Your Email');
        throw new Error('Please Enter Your Email');
      }
      if (!validateEmail(email)) {
        Toast.error('Please Enter Valid Email');
        throw new Error('Please Enter Valid Email');
      }
      if (password.trim() === '') {
        Toast.error('Please Enter Your Password');
        throw new Error('Please Enter Your Password');
      }
      dispatch(toggleGlobalLoader(true));
    const response =  await postLogin({email, password, role: 'user'}).then(res => {
      console.log(" respoonse of login ", res);
        dispatch(toggleGlobalLoader(false));
        if (res?.error) {
          Toast.error(res?.error?.data?.message);
        } else {
          // Toast.success(res?.data?.message);

          // dispatch(setToken(res?.data?.token));
        }
        return res
      });
      // console.log(" response ", response );
      return response?.data
    } catch (e) {
      
      dispatch(toggleGlobalLoader(false));
      console.log("error", e);
      Toast.error(getMessage(e));
      throw new Error(getMessage(e?.message));
    }
  };
  const signupUser = async ({
    fullName,
    email,
    phone,
    username,
    password,
    confirmPassword,
    deviceToken,
    image
  }) => {
    let response;
   
    try {
      if (fullName.trim() === '') {
        Toast.error('Please Enter Your Full Name');
        throw new Error('Please Enter Your Full Name');
      }
      if (username.trim() === '') {
        Toast.error('Please Enter Your Username');
        throw new Error('Please Enter Your Username');
      }
      if (email.trim() === '') {
        Toast.error('Please Enter Your Email');
        throw new Error('Please Enter Your Email');
      }
      if (!validateEmail(email)) {
        Toast.error('Please Enter Valid Email');
        throw new Error('Please Enter Valid Email');
      }
      if (password.trim() === '') {
        Toast.error('Please Enter Your Password');
        throw new Error('Please Enter Your Password');
      }
      if (phone.trim() === '') {
        Toast.error('Please Enter Your Phone');
        throw new Error('Please Enter Your Phone');
      }
      if (image?._id.trim() === '') {
        Toast.error('Please Upload Image');
        throw new Error('Please Upload Image');
      }
      const body = {
        fullName,
        username,
        email,
        phone,
        image: image?._id,
        password,
        confirmPassword,
        role: 'user',
        deviceToken: '123',
        deviceType: Platform.OS,
      };
      dispatch(toggleGlobalLoader(true));
    const response= await postSignup(body).unwrap()

    dispatch(toggleGlobalLoader(false));
    Toast.success("Registration Successful")
    return response
    } catch (e) {
      dispatch(toggleGlobalLoader(false));
      Toast.error(getMessage(e));
      throw new Error(getMessage(e?.message));
    }
  };
  const VerifyEmail = async ({email}) => {
    dispatch(toggleGlobalLoader(true));

    try {
      if (email.trim() === '') {
        Toast.error('Please Enter Your Email');
        throw new Error('Please Enter Your Email');
      }
      if (!validateEmail(email)) {
        Toast.error('Please Enter Valid Email');
        throw new Error('Please Enter Valid Email');
      }

     const response= await postVerifyEmail({email}).unwrap()
      dispatch(toggleGlobalLoader(false));
      return response
    } catch (e) {
      dispatch(toggleGlobalLoader(false));
      Toast.error(getMessage(e));
      throw new Error(getMessage(e?.message));
    }
  };
  const resetPassword = async ({email,otp,confirmPassword,password}) => {

    try {
      if (password.trim() === '') {
        Toast.error('Please Enter Your Password');
        throw new Error('Please Enter Your Password');
      }
      if (confirmPassword.trim() === '') {
        Toast.error('Please Enter Confirm Password');
        throw new Error('Please Enter Confirm Password');
      }     
      if (password !== confirmPassword) {
        Toast.error('Passwords Does Not Match');
        return;
      }
    dispatch(toggleGlobalLoader(true));

     const response= await postResetPassword({email,otp,confirmPassword,password}).unwrap()
     Toast.success("Password Reset Successfully")
      dispatch(toggleGlobalLoader(false));
      return response
    } catch (e) {
      dispatch(toggleGlobalLoader(false));
      Toast.error(getMessage(e));
      throw new Error(getMessage(e?.message));
    }
  };
  
  return {
    loginUser,
    signupUser,
    VerifyEmail,
    resetPassword
  };
};
