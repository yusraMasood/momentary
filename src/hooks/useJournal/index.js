import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {Toast, getMessage} from '../../Api/APIHelpers';
import {  useSetting } from '../../state/entry';
import { usePostAddJournalMutation } from '../../state/journal';
import moment from 'moment';
import { toggleGlobalLoader } from '../../state/general';

export default () => {
  const [postAddJournal, message] = usePostAddJournalMutation();
  const setting =useSetting()
  const dispatch = useDispatch();
  const addJournal = async ({title,image,hashtags,lifeTime,date}) => {
    const body={
        title,
        image: image?._id,
        hashtags,
        lifeTime,
        date: moment(date).format("YYYY-MM-DD"),
        pin: false
    } 
    // console.log(image,"image");
    dispatch(toggleGlobalLoader(true))
    try {
      if (title.trim() === '') {
        Toast.error('Please Enter Journal Title');
        throw new Error('Please Enter Journal Title');
      }
      if (image == null) {
        Toast.error('Please Add Image for your Journal');
        throw new Error('Please Add Image for your Journal');
      }
      if (hashtags.length==0) {
        Toast.error('Please add atleast one hashtag');
        throw new Error('Please add atleast one hashtag');
      }
    

      const response = await postAddJournal(body).unwrap()
      dispatch(toggleGlobalLoader(false))
      return response;
    } catch (e) {
      dispatch(toggleGlobalLoader(false))
      Toast.error(getMessage(e));
      throw new Error(getMessage(e?.message));
    }
  };
  return {
    addJournal,
  };
};
