import React from 'react';
import {View} from 'react-native';
import CustomButton from '../../../../components/Buttons/CustomButton';
import TextWithArrowIcon from '../../../../components/ReusableComponent/TextWithArrowIcon';
import TextWithSwitch from '../../../../components/ReusableComponent/TextWithSwitch';
import RobotoMedium from '../../../../components/Texts/RobotoMedium';
import RobotoRegular from '../../../../components/Texts/RobotoRegular';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
import {linearColors} from '../../../../utils/appTheme';
import styles from './styles';

const AppUI = props => {
  const accountInfoArray = [
    {
      title: 'Name',
      value: 'John Q Author',
    },
    {
      title: 'Email',
      value: 'John@computer.net',
    },
    {
      title: 'Phone',
      value: '0123-456-7890',
    },
    {
      title: 'ID Verified',
      value: 'Yes',
    },
  ];
  return (
    <ScreenWrapper style={styles.container}>
      <RobotoMedium style={styles.accountHeadingText}>
      Appearance
      </RobotoMedium>
      <TextWithArrowIcon text={'Font Size'} textOpt={"System"} textonly/>
      <TextWithArrowIcon text={'App Icon'} textOpt={"Momentary"} textonly/>
    

 
      <RobotoMedium style={styles.accountHeadingText}>
      Behavior
      </RobotoMedium>

     
      <TextWithArrowIcon text={'App Lock'} textOpt={"Immediate"} onPressPageDesign={()=> props.navigation.navigate("AppLock")}/>
      <TextWithArrowIcon text={'Sync Mode'} onPressPageDesign={()=> props.navigation.navigate("SyncModes")}/>
      <TextWithArrowIcon text={'Home Feature'} textOpt={"Journal"} onPressPageDesign={()=> props.navigation.navigate("HomeFeature")}/>



    </ScreenWrapper>
  );
};
export default AppUI;
