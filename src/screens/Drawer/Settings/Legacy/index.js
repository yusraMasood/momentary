import React from 'react';
import {View, FlatList} from 'react-native';
import CustomButton from '../../../../components/Buttons/CustomButton';
import TextWithArrowIcon from '../../../../components/ReusableComponent/TextWithArrowIcon';
import RobotoBold from '../../../../components/Texts/RobotoBold';
import RobotoMedium from '../../../../components/Texts/RobotoMedium';
import RobotoRegular from '../../../../components/Texts/RobotoRegular';
import RippleHOC from '../../../../components/wrappers/Ripple';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
import styles from './styles';

const Legacy = props => {
  const legacyArray = [
    {
      title: 'Primary Legacy Contact ',
    },
    {
      title: 'Secondary Legacy Contact ',
    },
  ];
  const renderPeopleContact = ({item}) => {
    return (
      <View>
        <View style={styles.cardHeadingContainer}>
          <RobotoMedium style={styles.primaryText}>{item?.title} </RobotoMedium>
          <RippleHOC
            onPress={() =>
              props.navigation.navigate('LegacyContact', {name: item?.title})
            }
          >
            <RobotoBold style={styles.editText}>Edit</RobotoBold>
          </RippleHOC>
        </View>
        <View style={styles.gridContainer}>
          <View style={styles.itemContainer}>
            <RobotoRegular style={styles.titleText}>Name</RobotoRegular>
            <RobotoRegular style={styles.valueText}>
              Jane Q Author
            </RobotoRegular>
          </View>
          <View style={styles.itemContainer}>
            <RobotoRegular style={styles.titleText}>Email</RobotoRegular>
            <RobotoRegular style={styles.valueText}>
              alexa@gmail.com
            </RobotoRegular>
          </View>
          <View style={styles.itemContainer}>
            <RobotoRegular style={styles.titleText}>Phone Number</RobotoRegular>
            <RobotoRegular style={styles.valueText}>123-456-7890</RobotoRegular>
          </View>
        </View>
      </View>
    );
  };
  const renderEmpty = () => {
    return (
      <View>
        <RobotoRegular style={styles.notSetLagacyText}>
          You have not set up a legacy contact yet please tab to setup a legacy
          contact
        </RobotoRegular>
        <CustomButton
          text={'Setup legacy contact'}
          alignStyle={styles.btnAlign}
        />
      </View>
    );
  };
  const renderHeader=()=>{
    return(
      <View>
        <RobotoMedium style={styles.accountHeadingText}>
        Legacy Determination
      </RobotoMedium>
      <TextWithArrowIcon
        text={'Make Account Private'}
        textOpt={'2 Years'}
        onPressPageDesign={() =>
          props.navigation.navigate('LegacyDetermination', {
            name: 'Make Account Private',
          })
        }
      />
      <TextWithArrowIcon
        text={'Archive Account'}
        textOpt={'5 Years'}
        onPressPageDesign={() =>
          props.navigation.navigate('LegacyDetermination', {
            name: 'Archive Account',
          })
        }
      />
      <TextWithArrowIcon
        text={'Delete Account'}
        onPressPageDesign={() =>
          props.navigation.navigate('LegacyDetermination', {
            name: 'Delete Account',
          })
        }
        textOpt={'Never'}
        style={styles.deleteContainer}
      />
      </View>
    )
  }
  return (
    <ScreenWrapper style={styles.container}>
      

      <FlatList
        data={legacyArray}
        keyExtractor={(item, index) => index}
        key={'legacyScreenArray'}
        ListHeaderComponent={renderHeader}
        renderItem={renderPeopleContact}
        ListEmptyComponent={renderEmpty}
      />
    </ScreenWrapper>
  );
};
export default Legacy;
