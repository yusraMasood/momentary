import React, { useRef } from 'react';
import {FlatList, View} from 'react-native';
import CustomButton from '../../../../components/Buttons/CustomButton';
import SuccessPopup from '../../../../components/popups/SuccessPopup';
import RobotoMedium from '../../../../components/Texts/RobotoMedium';
import RobotoRegular from '../../../../components/Texts/RobotoRegular';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
import {contactArray} from '../../../../utils/data';
import styles from './styles';

const ViewLegacyContact = (props) => {
    const setupRef=useRef(null)
  const renderContactInfo = ({item}) => {
    return (
      <View>
        <RobotoMedium style={styles.contactText}>
          Contact Information
        </RobotoMedium>
        {item?.profile?.map((item, index) => {
          return (
            <View style={styles.itemContainer}>
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
    );
  };
  const renderButton = () => {
    return <CustomButton 
    onPress={()=> setupRef.current.show()}
    alignStyle={styles.alignBtn} text={'Edit Settings'} />;
  };
  return (
    <ScreenWrapper style={styles.container}>
      <FlatList
        data={contactArray}
        key={'contactLegacyViewArray'}
        keyExtractor={(item, index) => index}
        ListFooterComponent={renderButton}
        renderItem={renderContactInfo}
      />
      <SuccessPopup
      reference={setupRef}
      title={"Secondary Contact"}
      desc={"You haven't set legacy settings."}
      onAccept={()=> props.navigation.goBack()}
      />
    </ScreenWrapper>
  );
};
export default ViewLegacyContact;
