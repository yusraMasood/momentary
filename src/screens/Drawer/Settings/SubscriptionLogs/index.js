import React from 'react'
import { View,FlatList } from 'react-native'
import BookPrintingCard from '../../../../components/Cards/BookPrintingCard';
import DigitalGoodCard from '../../../../components/Cards/DigitalGoodCard';
import SubscriptionCard from '../../../../components/Cards/SubscriptionCard';
import DatePicker from '../../../../components/Inputs/DatePicker';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper'
import styles from './styles';


const SubscriptionLogs=()=>{
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

    const renderDigitalGoods = () => {
        return <SubscriptionCard />;
      };
    return(
        <ScreenWrapper style={styles.container}> 
        <View style={styles.alignDateContainer}>
            <DatePicker/>
            <DatePicker/>
        </View>
             <FlatList data={[1, 2, 3, 4, 5]} renderItem={renderDigitalGoods} />
            

        </ScreenWrapper>
    )
}
export default SubscriptionLogs