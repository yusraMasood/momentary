import React, {useState, useRef} from 'react';
import {View} from 'react-native';
import CustomButton from '../../../../components/Buttons/CustomButton';
import CustomCheckBox from '../../../../components/CustomCheckbox';
import InputField from '../../../../components/Inputs/InputField';
import ContentDataComponent from '../../../../components/ReusableComponent/ContentDataComponent';
import RobotoMedium from '../../../../components/Texts/RobotoMedium';
import RobotoRegular from '../../../../components/Texts/RobotoRegular';
import ContentContainer from '../../../../components/wrappers/ContentContainer';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
import styles from './styles';

const BookPrintingPlaceOrder = props => {
  const [shipping, setShipping] = useState(false);
  const billingCountryRef = useRef(null);
  const billingStateRef = useRef(null);
  const billingAddressRef = useRef(null);
  const billingzipCodeRef = useRef(null);
  const shippingStateRef = useRef(null);
  const shippingAddressRef = useRef(null);
  const shippingZipCodeRef = useRef(null);

  const profileArray = [
    {
      title: 'Name',
      value: 'Elsa Robert',
    },
    {
      title: 'Last Name',
      value: 'John',
    },
    {
      title: 'Email',
      value: 'elsa@email.com',
    },
  ];
  const getCheckboxData = value => {
    setShipping(value);
  };
  const onSubmit = () => {
    props.navigation.navigate('BookPrintingPayment');
  };
  return (
    <ScreenWrapper style={styles.container}>
      <ContentContainer aware>
        <View style={styles.alignText}>
          <RobotoRegular style={styles.addressText}>
            Address Details {'>'} Payment
          </RobotoRegular>
        </View>
        <ContentDataComponent array={profileArray} />
        <InputField
          placeholder={'Phone Number'}
          label={'Enter Phone'}
          // value={email}
          // onChangeText={setEmail}
          keyboardType={'number-pad'}
          onSubmitEditing={() => billingCountryRef.current.focus()}
        />
        <RobotoMedium style={styles.billingText}>Billing Address</RobotoMedium>
        <InputField
          reference={billingCountryRef}
          placeholder={'Enter Country'}
          label={'Country'}
          onSubmitEditing={() => billingStateRef.current.focus()}
        />
        <InputField
          reference={billingStateRef}
          placeholder={'Enter State'}
          label={'State'}
          onSubmitEditing={() => billingAddressRef.current.focus()}
        />
        <InputField
          reference={billingAddressRef}
          placeholder={'Enter Address'}
          label={'Address'}
          onSubmitEditing={() => billingzipCodeRef.current.focus()}
        />
        <InputField
          reference={billingzipCodeRef}
          placeholder={'Enter Zip Code'}
          label={'Zip Code'}
          onSubmitEditing={onSubmit}
        />
        
        {/* <CustomCheckBox
          updateData={getCheckboxData}
          //   checkbox={sameAddressValue}
          //   setCheckbox={setSameAddressValue}
          para={'Different Shipping Address'}
        /> */}
        {shipping && (
          <View>
            <RobotoMedium style={styles.billingText}>
              Shipping Address
            </RobotoMedium>
            <InputField
              placeholder={'Enter Country'}
              label={'Country'}
              // value={email}
              // onChangeText={setEmail}

              onSubmitEditing={() => billingStateRef.current.focus()}
            />
            <InputField
              reference={billingStateRef}
              placeholder={'Enter State'}
              label={'State'}
              // value={email}
              // onChangeText={setEmail}
              onSubmitEditing={() => billingAddressRef.current.focus()}
            />
            <InputField
              reference={billingAddressRef}
              placeholder={'Enter Address'}
              label={'Address'}
              // value={email}
              // onChangeText={setEmail}
              onSubmitEditing={() => billingzipCodeRef.current.focus()}
            />
            <InputField
              reference={billingzipCodeRef}
              placeholder={'Enter Zip Code'}
              label={'Zip Code'}
              onSubmitEditing={onSubmit}
            />
          </View>
        )}

        <CustomButton text={'Submit Order'} onPress={onSubmit} />
      </ContentContainer>
    </ScreenWrapper>
  );
};
export default BookPrintingPlaceOrder;
