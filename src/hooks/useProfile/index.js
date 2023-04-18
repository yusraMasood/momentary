import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {Toast, getMessage} from '../../Api/APIHelpers';
import {toggleGlobalLoader} from '../../state/general';
import {usePostImageMutation} from '../../state/account';

export default () => {
  const [postImage, message] = usePostImageMutation();
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
  return {
    uploadImage,
  };
};
