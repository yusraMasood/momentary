import React, {useState, useLayoutEffect} from 'react';
import {View} from 'react-native';
import {icons, tabIcons} from '../../../../assets/images';
import RadioButton from '../../../../components/RadioButton';
import DamionRegular from '../../../../components/Texts/DamionRegular';
import RippleHOC from '../../../../components/wrappers/Ripple';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
import styles from './styles';

const LegacyDetermination = props => {
  const [itemIndex, setItemIndex] = useState(0);
  const featureArray = [
    {
      title: '6 Months',
    },
    {
      title: '1 Years',
    },
    {
      title: '24 Months',
    },
    {
      title: 'Never',
    },
  ];
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
  return (
    <ScreenWrapper style={styles.container}>
      {featureArray.map((item, index) => {
        const focus = index == itemIndex;
        return (
          <RippleHOC
            key={index}
            onPress={() => setItemIndex(index)}
            style={styles.buttonContainer}
          >
            <RadioButton
              title={item?.title}
              focus={focus}
              image={item?.img}
              iconStyle={styles.iconStyle}
            />
          </RippleHOC>
        );
      })}
    </ScreenWrapper>
  );
};

export default LegacyDetermination;
