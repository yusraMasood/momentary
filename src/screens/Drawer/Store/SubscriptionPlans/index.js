import React from 'react';
import {View, FlatList} from 'react-native';
import SubscriptionPlanCard from '../../../../components/Cards/SubscriptionPlanCard';
import RobotoRegular from '../../../../components/Texts/RobotoRegular';
import Carousel from 'react-native-snap-carousel';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';

import styles from './styles';
import {vw} from '../../../../utils/dimensions';

const SubscriptionPlans = () => {
  return (
    <ScreenWrapper>
      <View style={styles.descContainer}>
        <RobotoRegular style={styles.momentrayText}>
          All Momentary Authors Are Entitled To A Completely Ad-Free Experience,
          Full Control And Sole Ownership Of Their Content, And All Other
          Bedrock Features Included In The Free Subscription.”
        </RobotoRegular>
      </View>
      <Carousel
        layout={'default'}
        data={[1, 2, 3, 4]}
        sliderWidth={vw * 100}
        itemWidth={vw * 75}
        keyExtractor={(item, index) => index}
        containerCustomStyle={styles.carouselView}
        renderItem={({item}) => {
          return <SubscriptionPlanCard />;
        }}
        activeSlideAlignment="start"
      />
      {/* <FlatList data={[1, 2, 3, 4, 5]} 
      renderItem={renderSubscriptionPlan}
      horizontal={true}
      /> */}
    </ScreenWrapper>
  );
};

export default SubscriptionPlans;
