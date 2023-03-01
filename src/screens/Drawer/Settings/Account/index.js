import React,{useRef} from 'react';
import {View} from 'react-native';
import CustomButton from '../../../../components/Buttons/CustomButton';
import PublishQuestionPopup from '../../../../components/popups/PublishQuestionPopup';
import SuccessPopup from '../../../../components/popups/SuccessPopup';
import TextWithArrowIcon from '../../../../components/ReusableComponent/TextWithArrowIcon';
import TextWithSwitch from '../../../../components/ReusableComponent/TextWithSwitch';
import RobotoMedium from '../../../../components/Texts/RobotoMedium';
import RobotoRegular from '../../../../components/Texts/RobotoRegular';
import RippleHOC from '../../../../components/wrappers/Ripple';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
import {linearColors} from '../../../../utils/appTheme';
import styles from './styles';

const Account = props => {

  const biometricPopupRef=useRef(null)
  const biometricDisableRef =useRef(null)
  const successDisableRef=useRef(null)
  const successRef=useRef(null)


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
            <View key={index} style={styles.itemContainer}>
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
      <RippleHOC onPress={()=> props.navigation.navigate("EditProfile")}>
      <RobotoRegular style={styles.editText}>
        Edit Owner Information
      </RobotoRegular>
      </RippleHOC>

      <RobotoMedium style={styles.accountHeadingText}>
        Account Security
      </RobotoMedium>

      <TextWithSwitch text={'Two Factor Enabled'} />
      <TextWithSwitch text={'Biometric Verification '} onPressSwitchDisable={()=>biometricDisableRef.current.show()} onPressSwitch={()=> biometricPopupRef.current.show()}/>
      <TextWithArrowIcon text={'Change Password'} onPressPageDesign={()=>props.navigation.navigate("ChangePassword")}/>

      <RobotoMedium style={styles.accountHeadingText}>
      Access Controls
      </RobotoMedium>
      <TextWithArrowIcon text={'Audit Logs'} onPressPageDesign={()=>props.navigation.navigate("AuditLogs")}/>

      <RobotoMedium style={styles.accountHeadingText}>
      Account Status
      </RobotoMedium>
      <TextWithArrowIcon text={'Subscription'} textOpt={"Pro"} onPressPageDesign={()=>props.navigation.navigate("SubscriptionLogs")}/>
      <TextWithArrowIcon text={'Payment Logs'}  onPressPageDesign={()=>props.navigation.navigate("PaymentLogs")}/>


      <CustomButton
      alignStyle={styles.alignBtn}
        text={'Delete Acount'}
        textStyle={styles.btnText}
        onPress={() => props.navigation.navigate('AuthNavigator')}
        colors={linearColors.red}
      />
      <PublishQuestionPopup
      reference={biometricPopupRef}
      title={"Biometric Verification"}
      desc={"Are you sure you want to enable biometric\nverification?"}
      onAccept={()=> successRef.current.show()}
      />
         <PublishQuestionPopup
      reference={biometricDisableRef}
      title={"Biometric Verification"}
      desc={"Are you sure you want to disable biometric\nverification?"}
      onAccept={()=> successDisableRef.current.show()}
      />
      <SuccessPopup
      reference={successRef}
      title={"Success"}
      desc={"Biometric verification has been successfully\enabled."}
      />
            <SuccessPopup
      reference={successDisableRef}
      title={"Success"}
      desc={"Biometric verification has been successfully\ndisabled."}
      />
    </ScreenWrapper>
  );
};
export default Account;
