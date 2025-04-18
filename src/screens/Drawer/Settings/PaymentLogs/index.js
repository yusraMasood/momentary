import React, {useState} from 'react';
import {FlatList, View} from 'react-native';
import BookPrintingCard from '../../../../components/Cards/BookPrintingCard';
import DigitalGoodCard from '../../../../components/Cards/DigitalGoodCard';
import SubscriptionCard from '../../../../components/Cards/SubscriptionCard';
import DropdownWithBorder from '../../../../components/Dropdowns/DropdownWithBorder';
import MainDropdown from '../../../../components/Dropdowns/MainDropdown';
import DatePicker from '../../../../components/Inputs/DatePicker';
import SearchInput from '../../../../components/Inputs/SearchInput';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
import styles from './styles';

const PaymentLogs = props => {
  const [dropdownValue, setDropdownValue] = useState('');
  const statusArray = ['Pending', 'In Process', 'Delivered'];

  const renderPaymentCard = () => {

    const subscriptionArray=[
      {
          title:"Subscribed On",
          value:"Sept 24, 2021",
      },
      {
          title:"Expiry Date ",
          value:"Sept 24, 2021",
      },
      {
          title:"Silver",
          value:"$6.00",
      },
  ]
    return <SubscriptionCard
    subscriptionArray={subscriptionArray}
     />;
  };
  const renderDigitalGoods = () => {
    return <DigitalGoodCard />;
  };
  const renderBookPrintingCard = ({item}) => {
    return (
      <BookPrintingCard
        status={item}
        onPress={() =>
          props.navigation.navigate('PaymentLogDetail', {status: item})
        }
      />
    );
  };
  return (
    <ScreenWrapper style={styles.container}>
      <SearchInput placeholder={'Search '} />
      <View style={[dropdownValue!="Book Printing"&&styles.dropdownMainContainer]}>
      <View style={styles.dropdownContainer}>
        {dropdownValue=="Book Printing" &&
        <View style={styles.dateContainer}>
          <DatePicker/>
          <DatePicker/>

        </View>
        
        }
        <DropdownWithBorder
          array={['Subscription Payments', 'Book Printing', 'Digital Goods']}
          dropdownTitle={'Subscription Payments'}
          dropdownValue={dropdownValue}
          setDropdownValue={setDropdownValue}
        />
        </View>
      </View>
      {dropdownValue == 'Subscription Payments' ? (
        <FlatList data={[1, 2, 3, 4, 5]} renderItem={renderPaymentCard}
        keyExtractor={(item,index)=> index}
             key={"subsriptionPaymentArray"}
        />
      ) : dropdownValue == 'Digital Goods' ? (
        <FlatList data={[1, 2, 3, 4, 5]} renderItem={renderDigitalGoods} 
        keyExtractor={(item,index)=> index}
             key={"digitalGoodArray"}
        />
      ) : (
        <FlatList data={statusArray} renderItem={renderBookPrintingCard}
        keyExtractor={(item,index)=> index}
             key={"bOokPrintingArray"}
        />
      )}
    </ScreenWrapper>
  );
};
export default PaymentLogs;
