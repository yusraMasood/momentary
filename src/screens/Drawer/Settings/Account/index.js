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

const Account = props => {
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
        Account Owner
      </RobotoMedium>
      <View style={styles.accountInfoContainer}>
        {accountInfoArray.map((item, index) => {
          return (
            <View key={"index"} style={styles.itemContainer}>
              <RobotoRegular style={styles.titleText}>
                {item?.title}
              </RobotoRegular>
              <RobotoRegular style={styles.valueText}>
                {item?.value}
              </RobotoRegular>
            </View>
          );
        })}
      </View>

      <RobotoRegular style={styles.editText}>
        Edit Owner Information
      </RobotoRegular>

      <RobotoMedium style={styles.accountHeadingText}>
        Account Security
      </RobotoMedium>

      <TextWithSwitch text={'Two Factor Enabled'} />
      <TextWithSwitch text={'Biometric Verification '} />
      <TextWithArrowIcon text={'Change Password'} />

      <RobotoMedium style={styles.accountHeadingText}>
      Access Controls
      </RobotoMedium>
      <TextWithArrowIcon text={'Audit Logs'} />

      <RobotoMedium style={styles.accountHeadingText}>
      Account Status
      </RobotoMedium>
      <TextWithArrowIcon text={'Subscription'} textOpt={"Pro"} />
      <TextWithArrowIcon text={'Payment Logs'} />


      <CustomButton
      alignStyle={styles.alignBtn}
        text={'Delete Acount'}
        textStyle={styles.btnText}
        onPress={() => props.navigation.navigate('AuthNavigator')}
        colors={linearColors.red}
      />
    </ScreenWrapper>
  );
};
export default Account;
