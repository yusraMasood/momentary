import React, {useLayoutEffect, useRef, useState} from 'react';
import {View, Image, ScrollView} from 'react-native';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
import styles from './styles';
import DamionRegular from '../../../../components/Texts/DamionRegular';
import TextEditor from '../../../../components/ReusableComponent/TextEditor';

const NewEntry = props => {

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
      <TextEditor/>
    </ScreenWrapper>
  );
};
export default NewEntry;
