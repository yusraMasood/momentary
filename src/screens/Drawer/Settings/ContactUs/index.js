import React,{useRef} from 'react';
import {View, Image} from 'react-native';
import CustomButton from '../../../../components/Buttons/CustomButton';
import InputField from '../../../../components/Inputs/InputField';
import SuccessPopup from '../../../../components/popups/SuccessPopup';
import RobotoMedium from '../../../../components/Texts/RobotoMedium';
import RobotoRegular from '../../../../components/Texts/RobotoRegular';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
import styles from './styles';

const ContactUs = () => {
    const successRef=useRef(null)
    const emailRef=useRef(null)
    const subjectRef=useRef(null)

  return (
    <ScreenWrapper style={styles.container}>
             <InputField
        placeholder={'Enter Name'}
        label={'Name'}
        // value={email}
        // onChangeText={setEmail}
        onSubmitEditing={() => emailRef.current.focus()}
      />
         <InputField
         reference={emailRef}
        placeholder={'Enter Email Address'}
        label={'Email'}
        // value={email}
        // onChangeText={setEmail}
        keyboardType={'email-address'}
        onSubmitEditing={() => subjectRef.current.focus()}
      />
           <InputField
           reference={subjectRef}
        placeholder={'Enter Subject'}
        label={'Subject'}
        // value={email}
        // onChangeText={setEmail}
        // onSubmitEditing={() => passwordRef.current.focus()}
      />
       <InputField
           reference={subjectRef}
        placeholder={'Enter Subject'}
        inputContainerIcon={styles.messageInput}
        numberOfLines={8}
        // label={'Subject'}
        inputContainer={styles.input}
        // value={email}
        // onChangeText={setEmail}
        // onSubmitEditing={() => passwordRef.current.focus()}
      />
      <CustomButton text={"Submit"}/>
      <RobotoMedium style={styles.headingText}>Note </RobotoMedium>
      <RobotoRegular style={styles.descText}>
        Your contact request will go directly to Momentary’s admin team and will
        be addressed as soon as possible. You can also get immediate assistance
        with many common situations through the Frequently Asked Questions
        section on the previous page.
      </RobotoRegular>
      <SuccessPopup
      reference={successRef}
      />
    </ScreenWrapper>
  );
};
export default ContactUs;
