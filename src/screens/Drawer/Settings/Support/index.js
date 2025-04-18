import React from 'react';
import {View, Image, FlatList} from 'react-native';
import StoreCard from '../../../../components/Cards/StoreCard';
import RobotoMedium from '../../../../components/Texts/RobotoMedium';
import RippleHOC from '../../../../components/wrappers/Ripple';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
import styles from './styles';

const Support = props => {
  const storeArray = [
    {
      title: 'Policies',
      array: [
        {
         heading: 'Acceptable Use',   
         navigate:"SupportDetails",
         params:"acceptableUse"
        },
        {
            heading:'Advertising and Sponsored Content',
            navigate:"SupportDetails",
         params:"advertisingAndSponsoredContent"

        },
        {
            heading:'Tracking and Data Sharing',
            navigate:"SupportDetails",
            params:"trackingAndDataSharing"
        },
      ],
    },
    {
      title: 'Disclosures',
      array: [
        {
            heading: 'Account and Data Removal',   
            navigate:"SupportDetails",
            params:"accountAndDataRemoval"
           },
           {
            heading: 'Annual Data Security Audit - 2022',
            navigate:"SupportDetails",
            params:"acceptableUse"
           },
           {
            heading: 'Data Ownership and Security', 
            navigate:"SupportDetails",
            params:"dataOwnershipAndSecurity"
           },
      ],
    },
    {
      title: 'Help',
      array: [
        {
          heading: 'Frequently Asked Questions',
          navigate:"FrequentlyAskedQuestions",
          arrow: true,
        },
        {
          heading: 'Contact Us',
          navigate:"ContactUs",
          arrow: true,
        },
      ],
    },
  ];
  const renderSupportCards = ({item,index}) => {
    return (
        <View>
        <RobotoMedium style={styles.headingText}>{item?.title}</RobotoMedium>
        {item?.array.map((value,innerIndex)=>{
            return(
                <StoreCard
                key={innerIndex}
                  onPress={() => props.navigation.navigate(value?.navigate,{type: value?.heading,params:value?.params})}
                  heading={value?.heading}
                  icon={value.arrow}
                  textStyle={styles.textCard}
                  style={styles.itemContainer}
                />
            )
        })}
      </View>
    );
  };
  return (
    <ScreenWrapper style={styles.container}>
        <FlatList
        data={storeArray}
        renderItem={renderSupportCards}
        key={"supportArray"}
        keyExtractor={(item,index)=> index}
        />
    </ScreenWrapper>
  );
};
export default Support;
