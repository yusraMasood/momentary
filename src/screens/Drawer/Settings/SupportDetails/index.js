import React,{useLayoutEffect} from 'react';
import {View, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import DamionRegular from '../../../../components/Texts/DamionRegular';
import RobotoMedium from '../../../../components/Texts/RobotoMedium';
import RobotoRegular from '../../../../components/Texts/RobotoRegular';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
import { linearColors } from '../../../../utils/appTheme';
import styles from './styles';

const SupportDetails = (props) => {
  console.log(props?.route?.params);
    const pointsArray=[1,2,3,4,5]
    // useLayoutEffect(() => {
    //   props.navigation.setOptions({
    //     headerTitle: () => {
    //       return (
    //         <DamionRegular style={styles.titleCenterText}>
    //      {props.route?.params?.type}
    //         </DamionRegular>
    //       );
    //     },
    //   });
    // }, [props.navigation]);
  return (
    <ScreenWrapper style={styles.container}>
      <RobotoMedium style={styles.headingText}>{props.route?.params?.type}</RobotoMedium>
      <RobotoRegular style={styles.descText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod
        bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra
        justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam
        fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci,
        sed rhoncus sapien nunc eget odio. Lorem ipsum dolor sit ameeuismod
        bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra
        justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque
        penatibus et magnis dis parturient Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin
        gravida dolor sit amet lacus accumsan 
      </RobotoRegular>
      <RobotoMedium style={styles.headingText}>Uses</RobotoMedium>
      {pointsArray.map((item,index)=>{
        return(
            <View key={index} style={styles.usesContainer}>
                <LinearGradient colors={linearColors.yellow} style={styles.circleStyle}></LinearGradient>
                <RobotoRegular style={styles.pointText}>Lorem ipsum dolor sit amet</RobotoRegular>
            </View>

        )
      })}

    </ScreenWrapper>
  );
};
export default SupportDetails;
