import React from 'react';
import {View, Image} from 'react-native';
import {generalImages} from '../../../../assets/images';
import SearchInput from '../../../../components/Inputs/SearchInput';
import RobotoRegular from '../../../../components/Texts/RobotoRegular';
import RippleHOC from '../../../../components/wrappers/Ripple';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
import styles from './styles';

const GlobalNetworkScreen = () => {
  const imagesArray = [1, 2, 3, 4];
  return (
    <ScreenWrapper style={styles.container}>
      <SearchInput placeholder={'Search Locations or Tags'} />

      <RippleHOC
        style={styles.locationPopcontainer}
        onPress={() => props.navigation.navigate('')}
      >
        <RobotoRegular style={styles.locationText}>
          Location: City, Country
        </RobotoRegular>
        <RobotoRegular style={styles.locationText}>
          January 31, 2022 - 03:00 pm
        </RobotoRegular>
        <RobotoRegular style={styles.locationText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </RobotoRegular>
        <View style={styles.imgArrayContainer}>
          {imagesArray.map((item, index) => {
            return (
              <View style={styles.printContainer}>
                <Image source={generalImages.print} style={styles.printimg} />
              </View>
            );
          })}
        </View>
      </RippleHOC>
    </ScreenWrapper>
  );
};
export default GlobalNetworkScreen;
