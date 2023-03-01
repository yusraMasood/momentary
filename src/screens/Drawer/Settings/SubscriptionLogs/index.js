import React from 'react';
import {View, FlatList} from 'react-native';
import SubscriptionCard from '../../../../components/Cards/SubscriptionCard';
import DatePicker from '../../../../components/Inputs/DatePicker';
import SearchInput from '../../../../components/Inputs/SearchInput';
import RobotoMedium from '../../../../components/Texts/RobotoMedium';
import RobotoRegular from '../../../../components/Texts/RobotoRegular';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
import styles from './styles';

const SubscriptionLogs = () => {
  const subscriptionArray = [
    {
      title: 'Subscribed On',
      value: 'Sept 24, 2021',
    },
    {
      title: 'Expiry Date ',
      value: 'Sept 24, 2021',
    },
    {
      title: 'Silver',
      value: '$6.00',
      price: true,
    },
  ];
  const headerArray=[
    {
        title:"Package Type",
        value:"Silver"
    },
    {
        title:"Subscribed On",
        value:"Sept 27, 2021"
    },
    {
        title:"Expires On",
        value:"Sept 26, 2022"
    },
    {
        title:"Amount Paid   ",
        value:"$200"
    },

  ]

  const renderDigitalGoods = () => {
    return <SubscriptionCard subscriptionArray={subscriptionArray} />;
  };
  const renderHeaderCard = ({item}) => {
    return (
      <View >
        <RobotoMedium style={styles.silverText}>{item.title}</RobotoMedium>
        <RobotoRegular style={styles.dateText}>{item?.value}</RobotoRegular>
      </View>
    );
  };
  const renderHeader = () => {
    return (
      <View>
        <SearchInput placeholder={"Search"}/>
        <View style={styles.alignDateContainer}>
          <DatePicker />
          <DatePicker />
        </View>
        <RobotoMedium style={styles.heading}>Current Subscription</RobotoMedium>
        <FlatList
          data={headerArray}
          key={'headerArraylog'}
          numColumns={2}
          columnWrapperStyle={styles.columnWrapperStyle}
          keyExtractor={(item, index) => index}
          renderItem={renderHeaderCard}
        />
      </View>
    );
  };
  return (
    <ScreenWrapper style={styles.container}>
      <FlatList
        data={[1, 2, 3, 4, 5]}
        key={'SubscriptionArraylog'}
        keyExtractor={(item, index) => index}
        ListHeaderComponent={renderHeader}
        renderItem={renderDigitalGoods}
      />
    </ScreenWrapper>
  );
};
export default SubscriptionLogs;
