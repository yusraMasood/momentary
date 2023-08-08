import {Toast, getMessage} from '../../Api/APIHelpers';
import { usePostContactUsMutation } from '../../state/setting';
import { validateEmail } from '../../utils/Validations';

export default () => {
    const [postContactUs,info]= usePostContactUsMutation()

  const contactAdmin = async ({name, email, subject,message}) => {
    try {
      if (name.trim() === '') {
        Toast.error('Please Enter Your Name');
        throw new Error('Please Enter Your Name');
      }
      if (!validateEmail(email)) {
        Toast.error('Please Enter Valid Email');
        throw new Error('Please Enter Valid Email');
      }
      if (email.trim() === '') {
        Toast.error('Please Enter Your Email');
        throw new Error('Please Enter Your Email');
      }
      if (subject.trim() === '') {
        Toast.error('Please Enter Subject');
        throw new Error('Please Enter Subject');
      }
      if (message.trim() === '') {
        Toast.error('Please Enter Message');
        throw new Error('Please Enter Message');
      }
    const response =  await postContactUs({name, email, subject,message}).unwrap()
      return response
    } catch (e) {
      Toast.error(getMessage(e?.data));
      throw new Error(getMessage(e?.data));
    }
  };
  return {
    contactAdmin
  };
};
