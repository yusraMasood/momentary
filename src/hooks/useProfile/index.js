import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {Toast, getMessage} from '../../Api/APIHelpers';
import {toggleGlobalLoader} from '../../state/general';
import {usePostChangePasswordMutation, usePostImageMutation} from '../../state/account';

export default () => {
  const [postImage, message] = usePostImageMutation();
  const [postChangePassword, info] = usePostChangePasswordMutation();
  const dispatch = useDispatch();
  const uploadImage = async data => {

    try {
      const response = await postImage(data).unwrap()
      return response;
    } catch (e) {
      Toast.error(getMessage(e));
      throw new Error(getMessage(e?.message));
    }
  };
  const changePassword = async ({password, newPassword, confirmPassword}) => {
    try {
      if (password.trim() === '') {
        Toast.error('Please Enter Your Password');
        throw new Error('Please Enter Your Password');
      }
      if (newPassword.trim() === '') {
        Toast.error('Please Enter Your New Password');
        throw new Error('Please Enter Your New Password');
      }
      if (confirmPassword.trim() === '') {
        Toast.error('Please Enter Confirm Password');
        throw new Error('Please Enter Confirm Password');
      }
      if (password===confirmPassword) {
        Toast.error('You cannot use your old Password');
        throw new Error('You cannot use your old Password');
      }
      dispatch(toggleGlobalLoader(true));
    const response =  await postChangePassword({password,newPassword}).then(res => {
        dispatch(toggleGlobalLoader(false));
        if (res?.error) {
          Toast.error(res?.error?.data?.message);
          throw new Error(res?.error?.data?.message);
        } 
        return res
      });
      Toast.success(response?.data?.message)
      return response?.data
    } catch (e) {
      
      dispatch(toggleGlobalLoader(false));
      console.log("error", e);
      Toast.error(getMessage(e));
      throw new Error(getMessage(e?.message));
    }
  };
  return {
    uploadImage,
    changePassword
  };
};
