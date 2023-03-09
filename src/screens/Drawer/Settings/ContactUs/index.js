import React, {useRef} from 'react';
import {View, Image} from 'react-native';
import CustomButton from '../../../../components/Buttons/CustomButton';
import InputField from '../../../../components/Inputs/InputField';
import SuccessPopup from '../../../../components/popups/SuccessPopup';
import RobotoMedium from '../../../../components/Texts/RobotoMedium';
import RobotoRegular from '../../../../components/Texts/RobotoRegular';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
import styles from './styles';

const ContactUs = props => {
  const successRef = useRef(null);
  const emailRef = useRef(null);
  const subjectRef = useRef(null);
  const messageRef = useRef(null);
  const onSubmit = () => {
    successRef.current.show();
  };
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
        onSubmitEditing={() => messageRef.current.focus()}
      />
      <InputField
        reference={messageRef}
        placeholder={'Enter Message'}
        inputContainerIcon={styles.messageInput}
        numberOfLines={8}
        // label={'Subject'}
        multiline={true}
        inputContainer={styles.input}
        // value={email}
        // onChangeText={setEmail}
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
