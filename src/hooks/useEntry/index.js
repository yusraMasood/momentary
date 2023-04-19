import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {Toast, getMessage} from '../../Api/APIHelpers';
import { usePostAddEntryMutation } from '../../state/entry';

export default () => {
  const [postAddEntry, message] = usePostAddEntryMutation();

  console.log(message);
  const dispatch = useDispatch();
  const addEntry = async data => {
    const body={
        journal:"643d227cf891ff1c57663d1b",
        content:data?.entryText,
        hashtags:data?.myhashtags,
        privacy:data?.privacy,
        images: data?.imageIds,
        selectedPeople:[],
        location:data?.location
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
