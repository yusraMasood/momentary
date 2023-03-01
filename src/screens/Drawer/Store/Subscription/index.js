import React, { useRef } from 'react';
import {View,Image} from 'react-native';
import { generalImages, icons } from '../../../../assets/images';
import CustomButton from '../../../../components/Buttons/CustomButton';
import InputField from '../../../../components/Inputs/InputField';
import SuccessPopup from '../../../../components/popups/SuccessPopup';
import DamionRegular from '../../../../components/Texts/DamionRegular';
import RobotoRegular from '../../../../components/Texts/RobotoRegular';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
import styles from './styles';

const Subscription = (props) => {
  const successRef=useRef(null)
  const emailRef =useRef(null)

  const onSubmit=()=>{
    successRef.current.show()
  }
  return (
    <ScreenWrapper style={styles.container}>
        <View style={styles.alignContent}>
        <DamionRegular style={styles.momentaryText}>Momentary</DamionRegular>
        </View>
      <RobotoRegular style={styles.submitText}>Submit Legacy Form</RobotoRegular>
      <RobotoRegular style={styles.descText}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </RobotoRegular>
      <InputField
        placeholder={'Enter Your Name'}
        label={'Your Name'}
        // value={email}
        // onChangeText={setEmail}
        onSubmitEditing={() => emailRef.current.focus()}
      />
      <InputField
      reference={emailRef}
        placeholder={'Enter Your Name'}
        label={'Your Name'}
        // value={email}
        // onChangeText={setEmail}
        keyboardType={'email-address'}
        // onSubmitEditing={() => passwordRef.current.focus()}
        onSubmitEditing={onSubmit}
      />
      <InputField
        placeholder={'Enter Email Address'}
        // label={' Your Email'}
        // value={email}
        // onChangeText={setEmail}
        editable={false}
        keyboardType={'email-address'}
        // onSubmitEditing={() => passwordRef.current.focus()}
      />
        <View style={styles.uploadContainer}>
            <Image source={icons.upload} style={styles.uploadImg}/>
            <RobotoRegular style={styles.uploadText}>Upload Document</RobotoRegular>
        </View>
      <RobotoRegular style={styles.formatText}>Format: Pdf ,Docx{"\n"}Max size : 15MB</RobotoRegular>
      <CustomButton text={'Submit'} 
    onPress={onSubmit}
      />
      <SuccessPopup
      reference={successRef}
      title={"Subscribed User"}
      desc={`You are not a subscribed user. Please buy\nsubscription plan.`}
      onAccept={()=> props.navigation.navigate("SubscriptionPlans")}


      />
    </ScreenWrapper>
  );
};
export default Subscription;
