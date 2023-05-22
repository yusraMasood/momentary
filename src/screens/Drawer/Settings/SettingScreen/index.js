import React, {useRef} from 'react';
import {View, FlatList} from 'react-native';
import CustomButton from '../../../../components/Buttons/CustomButton';
import StoreCard from '../../../../components/Cards/StoreCard';
import PublishQuestionPopup from '../../../../components/popups/PublishQuestionPopup';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
import {colors, linearColors} from '../../../../utils/appTheme';
import {settingArray} from '../../../../utils/data';
import styles from './styles';
import { useDispatch } from 'react-redux';
import { setToken } from '../../../../state/auth';

const SettingScreen = props => {
  const logoutRef = useRef(null);
  const dispatch =useDispatch()

  const renderSettingCard = ({item}) => {
    return (
      <StoreCard
        heading={item?.name}
        desc={item?.desc}
        onPress={() => props.navigation.navigate(item?.navigate)}
      />
    );
  };
  const renderFooter = () => {
    return (
      <CustomButton
        text={'Log Out'}
        textStyle={styles.btnText}
        onPress={() => logoutRef.current.show()}
        colors={linearColors.red}
      />
    );
  };
  const onRemoveToken=()=>{
    dispatch(setToken(null))

  }
  return (
    <ScreenWrapper style={styles.container}>
      <FlatList
        data={settingArray}
        renderItem={renderSettingCard}
        ListFooterComponent={renderFooter}
        key={'settingArray'}
        keyExtractor={(item, index) => index}
      />

      <PublishQuestionPopup
        reference={logoutRef}
        title={'Logout'}
        desc={'Are you sure you want to logout?'}
        onAccept={onRemoveToken}
        contentStye={styles.popupStyle}
      />
    </ScreenWrapper>
  );
};
export default SettingScreen;
