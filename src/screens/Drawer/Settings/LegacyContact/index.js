import React, {useLayoutEffect, useRef} from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import {icons} from '../../../../assets/images';
import CustomButton from '../../../../components/Buttons/CustomButton';
import CustomGoldenSwitch from '../../../../components/Buttons/CustomGoldenSwitch';
import InputField from '../../../../components/Inputs/InputField';
import PublishQuestionPopup from '../../../../components/popups/PublishQuestionPopup';
import SuccessPopup from '../../../../components/popups/SuccessPopup';
import DamionRegular from '../../../../components/Texts/DamionRegular';
import RobotoMedium from '../../../../components/Texts/RobotoMedium';
import RobotoRegular from '../../../../components/Texts/RobotoRegular';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
import {linearColors} from '../../../../utils/appTheme';
import styles from './styles';

const LegacyContact = props => {
  
  const deleteRef = useRef(null);
  const successRef=useRef(null);

  const legacyContactArray=[
    {
      title:"Allow View Only",
      value:"Your legacy contact will have read-only access to all content in your account, published or private."
    } ,
    {
      title:"Allow Print",
      value:"Your legacy contact will have access to the book-printing module from your account and will be able to print physical or digital copies of your content. "
    },
    {
      title:"Allow Publish",
      value:"Your legacy contact will have permission to publish any previously-unpublished content to your private network. "
    },
    {
      title:"Allow Epilogue",
      value:"Your legacy contact will be able to write and publish a single post to conclude your journals. This post will be attributed to the legacy contact and labeled as an epilogue."
    },
    {
      title:"Allow Delete",
      value:"Your legacy contact will be allowed to delete your content and social interactions. ",
      // onPress:()=> delete
    }
  ]

  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerTitle: () => {
        return (
          <DamionRegular style={styles.titleCenterText}>
            {props?.route?.params?.name}
          </DamionRegular>
        );
      },
    });
  }, [props.navigation]);

  const renderLegacyCard = ({item}) => {
    return (
      <View style={styles.legacyCardContainer}>
        <View style={styles.textSwitchContainer}>
          <View style={styles.allowInfoImgContainer}>
            <RobotoRegular style={styles.allowText}>
             {item?.title}
            </RobotoRegular>
            <Image source={icons.metroInfo} style={styles.infoImg} />
          </View>
          <CustomGoldenSwitch />
        </View>

        <RobotoRegular style={styles.descText}>
        {item?.value}
        </RobotoRegular>
      </View>
    );
  };
  const renderHeader = () => {
    return (
      <View>
        <RobotoMedium style={styles.contactText}>
          Contact Information
        </RobotoMedium>
        <InputField
          inputContainerStyle={styles.inputContainer}
          placeholder={'Enter Name'}
          label={'Name'}
          // value={email}
          // onChangeText={setEmail}
          // onSubmitEditing={() => passwordRef.current.focus()}
        />

        <InputField
          placeholder={'Enter Email Address'}
          inputContainerStyle={styles.inputContainer}
          label={'Email'}
          // value={email}
          // onChangeText={setEmail}
          keyboardType={'email-address'}
          // onSubmitEditing={() => passwordRef.current.focus()}
        />

        <InputField
          placeholder={'Enter Email Address'}
          inputContainerStyle={styles.inputContainer}
          label={'Email'}
          // value={email}
          // onChangeText={setEmail}
          keyboardType={'email-address'}
          // onSubmitEditing={() => passwordRef.current.focus()}
        />
        <RobotoMedium style={styles.contactText}>Delegated Access</RobotoMedium>
      </View>
    );
  };
  const renderFooter = () => {
    return (
      <View>
        <CustomButton
          colors={linearColors.grey}
          alignStyle={styles.btnContainer}
          style={styles.saveBtn}
          textStyle={styles.btnText}
          text={'Save Changes'}
        />
        <CustomButton
          text={'Delete Legacy Contact '}
          onPress={() => deleteRef.current.show()}
        />
      </View>
    );
  };
  return (
    <ScreenWrapper style={styles.container}>
      <FlatList
        data={legacyContactArray}
        ListHeaderComponent={renderHeader}
        key={'delegatedAccessArray'}
        keyExtractor={(item, index) => index}
        renderItem={renderLegacyCard}
        ListFooterComponent={renderFooter}
      />
      <PublishQuestionPopup
      reference={deleteRef}
      title={"Delete Account Data"}
      desc={`Are you sure you want to permanently delete all the account data? Please note that this action cannot be undone. `}
      contentStye={styles.popupStyle}
      onAccept={()=> successRef.current.show()}
      />
      <SuccessPopup
      reference={successRef}
      title={"Success"}
      desc={"You have been successfully Deleted your account."}
      />
    </ScreenWrapper>
  );
};

export default LegacyContact;
