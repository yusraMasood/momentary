import React, {useRef} from 'react';
import {View} from 'react-native';
import CustomButton from '../../../../components/Buttons/CustomButton';
import InputField from '../../../../components/Inputs/InputField';
import SuccessPopup from '../../../../components/popups/SuccessPopup';
import DamionRegular from '../../../../components/Texts/DamionRegular';
import RobotoMedium from '../../../../components/Texts/RobotoMedium';
import RobotoRegular from '../../../../components/Texts/RobotoRegular';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
import styles from './styles';

const BookPrintingPayment = props => {
  const cardRef = useRef(null);
  const expiryRef = useRef(null);
  const cvvRef = useRef(null);
  const successRef=useRef(null)

  const onSubmit = () => {
    successRef.current.show()
  };

  return (
    <ScreenWrapper style={styles.container}>
      <View style={styles.alignText}>
        <RobotoRegular style={styles.addressText}>
          Address Details {'>'} Payment
        </RobotoRegular>
      </View>
      <RobotoRegular style={styles.creditText}>
        Enter Your Credit Card Details To Proceed{'\n'}With Payment
      </RobotoRegular>
      <DamionRegular style={styles.priceText}>$6.09</DamionRegular>
      <RobotoMedium style={styles.billingText}>Card Details</RobotoMedium>
      <InputField
        inputContainerStyle={styles.inputContainer}
        placeholder={'Enter Cardholder Name'}
        label={'Cardholder Name'}
        // value={email}
        // onChangeText={setEmail}
        onSubmitEditing={() => cardRef.current.focus()}
      />
      <InputField
        reference={cardRef}
        placeholder={'Enter Card Number'}
        label={'Card Number'}
        // value={email}
        // onChangeText={setEmail}
        onSubmitEditing={() => expiryRef.current.focus()}
      />
      <InputField
        reference={expiryRef}
        placeholder={'Enter Expiry Date'}
        label={'Expiry Date'}
        // value={email}
        // onChangeText={setEmail}
        onSubmitEditing={() => cvvRef.current.focus()}
      />
      <InputField
        reference={cvvRef}
        placeholder={'Enter CVV'}
        label={'CVV'}
        // value={email}
        // onChangeText={setEmail}
        onSubmitEditing={onSubmit}
      />
      <CustomButton
        onPress={onSubmit}
        text={'Buy Now'}
        alignStyle={styles.btnContainer}
      />
      <SuccessPopup
      reference={successRef}
      title={"Success"}
      desc={"Payment has been successfully made!"}
      onAccept={()=> props.navigation.navigate('BookPrintingOrderSummary')}
      styleContent={styles.paymentPopup}
      />
    </ScreenWrapper>
  );
};

export default BookPrintingPayment;
