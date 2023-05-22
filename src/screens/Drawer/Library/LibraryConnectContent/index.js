import React, {useLayoutEffect} from 'react';
import UserPosts from '../../../../components/ReusableComponent/UserPosts';
import DamionRegular from '../../../../components/Texts/DamionRegular';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
import styles from './styles';

const LibraryConnectContent = props => {
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
      <UserPosts isLoading={isLoading} array={data?.feeds} refetch={refetch}
            page={page}
            setPage={setPage}/>
    </ScreenWrapper>
  );
};
export default LibraryConnectContent;
