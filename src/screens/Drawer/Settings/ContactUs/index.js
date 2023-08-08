import React, {useRef, useState} from 'react';
import {View, Image} from 'react-native';
import CustomButton from '../../../../components/Buttons/CustomButton';
import InputField from '../../../../components/Inputs/InputField';
import SuccessPopup from '../../../../components/popups/SuccessPopup';
import RobotoMedium from '../../../../components/Texts/RobotoMedium';
import RobotoRegular from '../../../../components/Texts/RobotoRegular';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
import styles from './styles';
import useSetting from '../../../../hooks/useSetting';
import { Toast } from '../../../../Api/APIHelpers';

const ContactUs = props => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  // const [loading,setLoading] =useState()

  const {contactAdmin} = useSetting();
  const successRef = useRef(null);
  const emailRef = useRef(null);
  const subjectRef = useRef(null);
  const messageRef = useRef(null);

  const onSubmit = () => {
    try{
      contactAdmin({name,email,subject,message}).then((res)=>{
        console.log("res", res);
        if(res?.message)
        {
          successRef.current.show();
        }
        // if(Res)
      })

    }finally{
      


    }
  };
  return (
    <ScreenWrapper style={styles.container}>
      <InputField
        placeholder={'Enter Name'}
        label={'Name'}
        value={name}
        onChangeText={setName}
        onSubmitEditing={() => emailRef.current.focus()}
      />
      <InputField
        reference={emailRef}
        placeholder={'Enter Email Address'}
        label={'Email'}
        value={email}
        onChangeText={setEmail}
        keyboardType={'email-address'}
        onSubmitEditing={() => subjectRef.current.focus()}
      />
      <InputField
        reference={subjectRef}
        placeholder={'Enter Subject'}
        label={'Subject'}
        value={subject}
        onChangeText={setSubject}
        onSubmitEditing={() => messageRef.current.focus()}
      />
      <InputField
        reference={messageRef}
        placeholder={'Enter Message'}
        inputContainerIcon={styles.messageInput}
        numberOfLines={8}
        multiline={true}
        inputContainer={styles.input}
        value={message}
        onChangeText={setMessage}
        onSubmitEditing={onSubmit}
      />
      <CustomButton text={'Submit'} onPress={onSubmit} />
      <RobotoMedium style={styles.headingText}>Note </RobotoMedium>
      <RobotoRegular style={styles.descText}>
        Your contact request will go directly to Momentary’s admin team and will
        be addressed as soon as possible. You can also get immediate assistance
        with many common situations through the Frequently Asked Questions
        section on the previous page.
      </RobotoRegular>
      <SuccessPopup
        reference={successRef}
        title={'Success'}
        styleContent={styles.popupstyle}
        onAccept={() => props.navigation.goBack()}
        desc={
          'Thanks for reaching out! We have received your request and will get back with you as soon as possible through the email address linked to your account.'
        }
      />
    </ScreenWrapper>
  );
};
export default ContactUs;
