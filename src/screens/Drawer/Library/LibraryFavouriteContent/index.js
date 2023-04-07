import React, {useLayoutEffect} from 'react';
import UserPosts from '../../../../components/ReusableComponent/UserPosts';
import DamionRegular from '../../../../components/Texts/DamionRegular';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
import styles from './styles';

const LibraryFavouriteContent = props => {
  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerTitle: () => {
        return (
          <DamionRegular style={styles.titleCenterText}>
            {props.route?.params?.type}
          </DamionRegular>
        );
      },
    });
  }, [props.navigation]);
  return (
    <ScreenWrapper style={styles.container}>
      <UserPosts/>
    </ScreenWrapper>
  );
};
export default LibraryFavouriteContent;
