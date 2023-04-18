import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {Toast, getMessage} from '../../Api/APIHelpers';
import {toggleGlobalLoader} from '../../state/general';
import {usePostImageMutation} from '../../state/account';
import { usePostAddEntryMutation } from '../../state/entry';

export default () => {
  const [postAddEntry, message] = usePostAddEntryMutation();

  console.log(message);
  const dispatch = useDispatch();
  const addEntry = async data => {
    const body={
        journal,
        content,
        hashtags,
        privacy,
        images,
        selectedPeople,
        location    
    }
    try {
      const response = await postAddEntry(body).unwrap()
      return response;
    } catch (e) {
      Toast.error(getMessage(e));
      throw new Error(getMessage(e?.message));
    }
  };
  return {
    addEntry,
  };
};
