import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {Toast, getMessage} from '../../Api/APIHelpers';
import {
  usePostAddEntryMutation,
  usePostShareEntryMutation,
  usePostUpdateEntryMutation,
  useSetting,
} from '../../state/entry';
import {toggleGlobalLoader} from '../../state/general';

export default () => {
  const [postAddEntry, addEntryM] = usePostAddEntryMutation();
  const [postUpdateEntry, message] = usePostUpdateEntryMutation();
  const [postShareEntry, shareDetail] = usePostShareEntryMutation();
  const setting = useSetting();
  const dispatch = useDispatch();
  console.log('shareDetail', addEntryM);
  const addEntry = async data => {
 
    // console.log("data?.visiblity",data?.visiblity);
    const body = {
      journal: data?.journal,
      content: data?.entryText,
      hashtags: data?.hashtags,
      privacy:
        data?.visiblity == 'Private'
          ? 'private'
          : data?.visiblity == 'My Network'
          ? 'myNetwork'
          : 'public',
      images: data?.imageArray,
      // selectedPeople:[],
      location: setting?.location,
      pageDesign: null,
      comment: data?.comment,
      share: false,
      multiComment: data?.comment,
      status: data?.status ? data?.status : 'draft',
      pin: false,
    };
    console.log("body", body);
    // console.log("body",body);
    if (data?.visiblity !== 'Global Network') {
      body.selectedPeople = data?.selectedPeople;
    }
    try {
      if (data?.entryText.trim() === '') {
        Toast.error('Please Enter Your Entry');
        throw new Error('Please Enter Your Entry');
      }
      if (data?.hashtags?.length == 0) {
        Toast.error('Please add atleast one hashtag');
        throw new Error('Please add atleast one hashtag');
      }
      // if (data?.visiblity.trim() === '') {
      //   Toast.error('Please set Visiblity');
      //   throw new Error('Please set Visiblity');
      // }

      if (setting?.location === null) {
        Toast.error('Please enable location in setting');
        throw new Error('Please enable location in setting');
      }
      dispatch(toggleGlobalLoader(true));

      const response = await postAddEntry(body).unwrap();
      console.log("response of add Entry",response);
      dispatch(toggleGlobalLoader(false));
      return response;
    } catch (e) {
      console.log("error",e);
      dispatch(toggleGlobalLoader(false));
      Toast.error(getMessage(e?.data?.message));

     
      throw new Error(getMessage(e));
    }
  };
  const updateEntry = async data => {
    // console.log(" update entrydata", data);
    
    const body = {
      journal: null,
      content: data?.entryText,
      hashtags: data?.hashtags,
      privacy:
        data?.visiblity === 'Private'
          ? 'private'
          : data?.visiblity === 'My Network'
          ? 'myNetwork'
          : data?.visiblity === 'Global Network'
          ? 'public'
          : data?.visiblity,
      // privacy: data?.visiblity,
      images: data?.imageArray,
      selectedPeople: data?.selectedPeople ? data?.selectedPeople : [],
      location: setting?.location,
      pageDesign: null,
      comment: data?.comment,
      share: false,
      multiComment: data?.comment,
      status: data?.status ? data?.status : 'draft',
      id: data?.id,
      pin: false,
    };
    // console.log(" update entry data", body);
    // if(data?.visiblity!=="Global Network")
    // {
    //   body.selectedPeople=data?.selectedPeople?data?.selectedPeople:[]

    // }
    try {
      if (data?.entryText.trim() === '') {
        Toast.error('Please Enter Your Entry');
        throw new Error('Please Enter Your Entry');
      }
      if (data?.hashtags?.length == 0) {
        Toast.error('Please add atleast one hashtag');
        throw new Error('Please add atleast one hashtag');
      }
      if (data?.visiblity.trim() === '') {
        Toast.error('Please set visiblity');
        throw new Error('Please set visiblity');
      }
      dispatch(toggleGlobalLoader(true));

      const response = await postUpdateEntry(body).unwrap();
      dispatch(toggleGlobalLoader(false));
      // console.log(response,"response");
      return response?.message;
    } catch (e) {
      console.log('eerrror', e);
      dispatch(toggleGlobalLoader(false));
      Toast.error(getMessage(e?.data?.message));
      throw new Error(getMessage(e?.message));
    }
  };
  const shareEntry = async data => {
    console.log(' data in share entry', data);
   
    const body = {
      id: data?.journalEntry?._id,
      // journal: data?.journalEntry?.journal,
      // content: data?.journalEntry?.content,
      // hashtags: data?.journalEntry?.hashtags,
      privacy: data?.privacy,
      // images: data?.journalEntry?.images,
      selectedPeople: data?.selectedPeopleId,
      // location: {
      //   name: data?.journalEntry?.location?.name,
      //   coordinates: data?.journalEntry?.location?.coordinates,
      // },
      // pageDesign: data?.journalEntry?.pageDesign,
      comment: data?.journalEntry?.comment,
      share: data?.journalEntry?.share,
      multiComment: data?.journalEntry?.comment,
      status: data?.journalEntry?.status,
      pin: false,
    };
    try {
      dispatch(toggleGlobalLoader(true));
      const response = await postShareEntry(body).unwrap();
      dispatch(toggleGlobalLoader(false));

      return response?.message;
    } catch (e) {
      dispatch(toggleGlobalLoader(false));
      console.log('error of share Entry', e);

      // console.log("error",e);
      Toast.error(getMessage(e?.data?.message));
     
      throw new Error(getMessage(e?.data?.message));
    }
  };
  return {
    addEntry,
    updateEntry,
    shareEntry,
  };
};
