import React,{useLayoutEffect} from 'react';
import {View, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import DamionRegular from '../../../../components/Texts/DamionRegular';
import RobotoMedium from '../../../../components/Texts/RobotoMedium';
import RobotoRegular from '../../../../components/Texts/RobotoRegular';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
import { linearColors } from '../../../../utils/appTheme';
import styles from './styles';
import ContentLoader from '../../../../components/Loaders/ContentLoader';
import { useGetSupportDetailsQuery } from '../../../../state/setting';
import RenderHtmlComponent from '../../../../components/ReusableComponent/RenderHtmlComponent';
import ContentContainer from '../../../../components/wrappers/ContentContainer';

const SupportDetails = (props) => {
  const {data,isLoading} =useGetSupportDetailsQuery(props?.route?.params?.params)

  console.log(" data in spport", data);
    const pointsArray=[1,2,3,4,5]


    if(isLoading)
    {
      return(
        <ScreenWrapper style={styles.container}>
          <ContentLoader/>
        </ScreenWrapper>
      )
    }
  return (
    <ScreenWrapper style={styles.container}>
      <ContentContainer>
      <RobotoMedium style={styles.headingText}>{data?.content?.title}</RobotoMedium>
      <RenderHtmlComponent content={data?.content?.content} removeNumberOfLines/>
      <RobotoMedium style={styles.headingText}>{data?.content?.secondaryTitle}</RobotoMedium>
      {data?.content?.secondaryContent.map((item,index)=>{
        return(
            <View key={index} style={styles.usesContainer}>
                <LinearGradient colors={linearColors.yellow} style={styles.circleStyle}></LinearGradient>
                <RobotoRegular style={styles.pointText}>{item?.body}</RobotoRegular>
            </View>

        )
      })}
</ContentContainer>
    </ScreenWrapper>
  );
};
export default SupportDetails;
