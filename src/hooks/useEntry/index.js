import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {Toast, getMessage} from '../../Api/APIHelpers';
import { usePostAddEntryMutation, useSetting } from '../../state/entry';

export default () => {
  const [postAddEntry, message] = usePostAddEntryMutation();
  const setting =useSetting()
  const dispatch = useDispatch();
  const addEntry = async data => {
    const body={
        journal:"643d227cf891ff1c57663d1b",
        content:data?.entryText,
        hashtags:setting?.hashtags,
        privacy:setting?.visiblity=="Private"?"private":setting?.visiblity=="Public"?"public": "myNetwork",
        images: data?.imageArray,
        selectedPeople:[],
        location:setting?.location,
        pageDesign:null,
        comment:setting?.comment,
        share:false,
        multiComment: false
    } 
    try {
      if (data?.entryText.trim() === '') {
        Toast.error('Please Enter Your Entry');
        throw new Error('Please Enter Your Entry');
      }
      if (setting?.hashtags.length==0) {
        Toast.error('Please add atleast one hashtag');
        throw new Error('Please add atleast one hashtag');
      }
    

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
