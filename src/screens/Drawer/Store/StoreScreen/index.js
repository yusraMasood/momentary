import React from 'react';
import {View, Image, FlatList} from 'react-native';
import RobotoMedium from '../../../../components/Texts/RobotoMedium';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
import styles from './styles';

const StoreScreen = () => {
    const storeArray=[
        {
        name:"Subscription",
        navigate:"Subscription"
    },
    {
        name:"Pages",
        navigate:"Subscription"
    },
    {
        name:"Covers",
        navigate:"Subscription"
    },
    {
        name:"Typography",
        navigate:"Subscription"
    },
    {
        name:"Book Printing",
        navigate:"Subscription"
    },

]
    const renderStoreCard=({item})=>{
        return(
            <View style={styles.storeCard}>
                <RobotoMedium style={styles.storeText}>{item?.name}</RobotoMedium>
            </View>
        )
    }

  return (
    <ScreenWrapper style={styles.container}>
        <FlatList
        data={storeArray}
        renderItem={renderStoreCard}
        />


    </ScreenWrapper>
  );
};
export default StoreScreen;
