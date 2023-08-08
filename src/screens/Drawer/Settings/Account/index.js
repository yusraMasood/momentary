import React, {useRef} from 'react';
import {View} from 'react-native';
import CustomButton from '../../../../components/Buttons/CustomButton';
import PublishQuestionPopup from '../../../../components/popups/PublishQuestionPopup';
import PulishEntryPopup from '../../../../components/popups/PulishEntryPopup';
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
  const biometricPopupRef = useRef(null);
  const biometricDisableRef = useRef(null);
  const successDisableRef = useRef(null);
  const successRef = useRef(null);
  const deleteAccountRef = useRef(null);
  const permanentDeleteRef=useRef(null)
  const successDeleteRef =useRef(null)

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
      <RippleHOC onPress={() => props.navigation.navigate('EditProfile')}>
        <RobotoRegular style={styles.editText}>
          Edit Owner Information
        </RobotoRegular>
      </RippleHOC>

      <RobotoMedium style={styles.accountHeadingText}>
        Account Security
      </RobotoMedium>

      <TextWithSwitch text={'Two Factor Enabled'} />
      <TextWithSwitch
        text={'Biometric Verification '}
        onPressSwitchDisable={() => biometricDisableRef.current.show()}
        onPressSwitch={() => biometricPopupRef.current.show()}
      />
      <TextWithArrowIcon
        text={'Change Password'}
        onPressPageDesign={() => props.navigation.navigate('ChangePassword')}
      />

      <RobotoMedium style={styles.accountHeadingText}>
        Access Controls
      </RobotoMedium>
      <TextWithArrowIcon
        text={'Audit Logs'}
        onPressPageDesign={() => props.navigation.navigate('AuditLogs')}
      />

      <RobotoMedium style={styles.accountHeadingText}>
        Account Status
      </RobotoMedium>
      <TextWithArrowIcon
        text={'Subscription'}
        textOpt={'Pro'}
        onPressPageDesign={() => props.navigation.navigate('SubscriptionLogs')}
      />
      <TextWithArrowIcon
        text={'Payment Logs'}
        onPressPageDesign={() => props.navigation.navigate('PaymentLogs')}
      />

      <CustomButton
        alignStyle={styles.alignBtn}
        text={'Delete Acount'}
        textStyle={styles.btnText}
        // onPress={() => props.navigation.navigate('AuthNavigator')}
        onPress={()=>deleteAccountRef.current.show()}
        colors={linearColors.red}
      />
      <PublishQuestionPopup
        reference={biometricPopupRef}
        title={'Biometric Verification'}
        desc={'Are you sure you want to enable biometric\nverification?'}
        onAccept={() => successRef.current.show()}
      />
      <PublishQuestionPopup
        reference={biometricDisableRef}
        title={'Biometric Verification'}
        desc={'Are you sure you want to disable biometric\nverification?'}
        onAccept={() => successDisableRef.current.show()}
      />
      <SuccessPopup
        reference={successRef}
        title={'Success'}
        desc={'Biometric verification has been successfullyenabled.'}
      />
      <SuccessPopup
        reference={successDisableRef}
        title={'Success'}
        desc={'Biometric verification has been successfully\ndisabled.'}
      />
      <PublishQuestionPopup
        reference={deleteAccountRef}
        title={'Delete Account'}
        desc={`Deleting your account will result in the total removal  of all content,interactions, history, and purchases from your Momentary account \n\nAfter 30 days, all of the above will be unrecoverable and your account itself will be deleted. After 30 days, this action cannot be undone. \n\nYour account and everything associated with it will be gone forever. \n\nAre you sure you want to  delete your account?\n\nPlease note that this action cannot be undone. `}
        onAccept={() => permanentDeleteRef.current.show()
        }
        contentStye={styles.popupStyle}

      />
      <PulishEntryPopup
      reference={permanentDeleteRef}
      title={"Delete Account"}
      yesBtn={"Delete Account"}
      noBtn={"Download My Data"}
      onAccept={()=> successDeleteRef.current.show()}
      desc1={"You are deleting your Momentary account. It will take 30 days before the last backup containing your data is overwritten.\n\nAfter that time, you will receive an email confirming your data is gone and your account is closed. You may cancel your account removal at any time before then. "}
      />
       <SuccessPopup
        reference={successDeleteRef}
        title={'Delete Account'}
        desc={'We are redirecting you to the login page.'}
        styleContent={styles.popupSuccess}
      />
    </ScreenWrapper>
  );
};
export default Account;
