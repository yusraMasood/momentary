import React,{useState} from 'react';
import {FlatList, View} from 'react-native';
import SubscriptionCard from '../../../../components/Cards/SubscriptionCard';
import DropdownWithBorder from '../../../../components/Dropdowns/DropdownWithBorder';
import MainDropdown from '../../../../components/Dropdowns/MainDropdown';
import SearchInput from '../../../../components/Inputs/SearchInput';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
import styles from './styles';

const PaymentLogs = () => {
  const [dropdownValue,setDropdownValue] =useState("")

    const renderPaymentCard=()=>{
        return(
            <SubscriptionCard
            />
        )
    }
  return (
    <ScreenWrapper style={styles.container}>
      <SearchInput placeholder={'Search '} />
      <View style={styles.dropdownContainer}>
        <DropdownWithBorder
        array={["Subscription Payments","Book Printing","Digital Goods"]}
        dropdownTitle={"Subscription Payments"}
        dropdownValue={dropdownValue}
        setDropdownValue={setDropdownValue}
        />
      </View>
      <FlatList data={[1, 2, 3, 4, 5]} 
      renderItem={renderPaymentCard}
       />
    </ScreenWrapper>
  );
};
export default PaymentLogs;
