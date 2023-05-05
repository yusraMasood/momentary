import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {Toast, getMessage} from '../../Api/APIHelpers';
import { usePostAddEntryMutation, usePostUpdateEntryMutation, useSetting } from '../../state/entry';

export default () => {
  const [postAddEntry] = usePostAddEntryMutation();
  const [postUpdateEntry,message] =usePostUpdateEntryMutation()
  const setting =useSetting()
  const dispatch = useDispatch();
  console.log("message",message);
  const addEntry = async data => {
    console.log(data);
    const body={
        journal:data?.journal,
        content:data?.entryText,
        hashtags:data?.hashtags,
        privacy:data?.visiblity=="Private"?"private":setting?.visiblity=="My Network"?"myNetwork": "public",
        images: data?.imageArray,
        // selectedPeople:[],
        location:setting?.location,
        pageDesign:null,
        comment:data?.comment,
        share:false,
        multiComment: data?.comment,
        status: data?.status?data?.status: "draft"
    } 
    if(data?.visiblity!=="Global Network")
    {
      body.selectedPeople=data?.selectedPeople

    }
    try {
      if (data?.entryText.trim() === '') {
        Toast.error('Please Enter Your Entry');
        throw new Error('Please Enter Your Entry');
      }
      if (data?.hashtags?.length==0) {
        Toast.error('Please add atleast one hashtag');
        throw new Error('Please add atleast one hashtag');
      }
      if (data?.visiblity.trim() === '') {
        Toast.error('Please set Visiblity');
        throw new Error('Please set Visiblity');
      }
    

      const response = await postAddEntry(body).unwrap()
      console.log("response of add Entry",response);
      return response?.data;
    } catch (e) {
      Toast.error(getMessage(e?.data?.message));
      throw new Error(getMessage(e?.data?.message));
    }
  };
  const updateEntry = async (data) => {
    console.log(" update entrydata", data);
    const body={
      journal:data?.journal,
      content:data?.entryText,
      hashtags:data?.hashtags,
      // privacy:data?.visiblity=="Private"?"private":setting?.visiblity=="My Network"?"myNetwork": "public",
      privacy: data?.visiblity,
      images: data?.imageArray,
      // selectedPeople:[],
      location:setting?.location,
      pageDesign:null,
      comment:data?.comment,
      share:false,
      multiComment: data?.comment,
      status: data?.status?data?.status: "draft"
  } 
  // if(data?.visiblity!=="Global Network")
  // {
  //   body.selectedPeople=data?.selectedPeople?data?.selectedPeople:[]

  // }
    try {
      if (data?.entryText.trim() === '') {
        Toast.error('Please Enter Your Entry');
        throw new Error('Please Enter Your Entry');
      }
      if (data?.hashtags?.length==0) {
        Toast.error('Please add atleast one hashtag');
        throw new Error('Please add atleast one hashtag');
      }
      if (data?.visiblity.trim() === '') {
        Toast.error('Please set visiblity');
        throw new Error('Please set visiblity');
      }
    

      const response = await postUpdateEntry(body).unwrap()

      console.log(response,"response");
      return response?.data;
    } catch (e) {
      console.log("eerrror",e);
      Toast.error(getMessage(e?.data?.message));
      throw new Error(getMessage(e?.message));
    }
  };
  return {
    addEntry,
    updateEntry
  };
};
