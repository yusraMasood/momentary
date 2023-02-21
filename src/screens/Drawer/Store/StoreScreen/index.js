import React from 'react';
import {View, Image, FlatList} from 'react-native';
import StoreCard from '../../../../components/Cards/StoreCard';
import RobotoMedium from '../../../../components/Texts/RobotoMedium';
import RippleHOC from '../../../../components/wrappers/Ripple';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
import styles from './styles';

const StoreScreen = (props) => {
    const storeArray=[
        {
        name:"Subscription",
        navigate:"Subscription"
    },
    {
        name:"Pages",
        navigate:"PagesDesign"
    },
    {
        name:"Covers",
        navigate:"JournalCovers"
    },
    {
        name:"Typography",
        navigate:"Typography"
    },
    {
        name:"Book Printing",
        navigate:"BookPrinting"
    },

]
    const renderStoreCard=({item})=>{
        return(
       <StoreCard
       onPress={()=> props.navigation.navigate(item?.navigate)}
       name={item?.name}
       />
        )
    }
//     <RippleHOC  onPress={()=> props.navigation.navigate(item?.navigate)} style={styles.storeCard}>
//     <RobotoMedium style={styles.storeText}>{item?.name}</RobotoMedium>
// </RippleHOC>
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
