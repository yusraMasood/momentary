import React, {useRef, useState} from 'react';
import {View, Image} from 'react-native';
import {generalImages} from '../../../../assets/images';
import CustomButton from '../../../../components/Buttons/CustomButton';
import CustomGoldenSwitch from '../../../../components/Buttons/CustomGoldenSwitch';
import InputField from '../../../../components/Inputs/InputField';
import SuccessPopup from '../../../../components/popups/SuccessPopup';
import Hashtags from '../../../../components/ReusableComponent/Hashtags';
import RobotoMedium from '../../../../components/Texts/RobotoMedium';
import CalendarStrip from 'react-native-calendar-strip';
import RobotoRegular from '../../../../components/Texts/RobotoRegular';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
import styles from './styles';

const AddNewJournal = props => {
  const successRef = useRef(null);
  const [date, setDate] = useState(new Date());
  return (
    <ScreenWrapper style={styles.container}>
      <View style={styles.entryContainer}>
        <RobotoRegular style={styles.entryText}>Add Entries</RobotoRegular>
      </View>
      <InputField
        inputContainerIcon={styles.inputInnerContainer}
        placeholder={'Search Field For Tags'}
        inputContainerStyle={styles.inputContainer}
      />
      <Hashtags />
      <View style={styles.journalContainer}>
        <RobotoMedium style={styles.imgText}>Life time journal</RobotoMedium>
        <CustomGoldenSwitch />
      </View>
      <CalendarStrip
        showMonth={true}
        style={[styles.calendar, props.calendarStyle]}
        dateNumberStyle={styles.dateNumber}
        dateNameStyle={styles.dateName}
        dayContainerStyle={styles.dayContainer}
        iconStyle={{tintColor: '#FFF', paddingHorizontal: 20}}
        highlightDateContainerStyle={styles.selectedDateContainer}
        // calendarHeaderFormat={moment().format("MMMM, YYYY")}
        calendarHeaderStyle={styles.calendarHeader}
        dateContainerStyle={[styles.dateContainer, props.dateStyle]}
        highlightDateNameStyle={styles.selectedDateName}
        highlightDateNumberStyle={styles.selectedDateNumber}
        highlightDateNumberContainerStyle={styles.dateNumberContainer}
        // startingDate={props.date}
        // scrollable={true}
        // scrollerPaging={true}
        selectedDate={date}
        onDateSelected={res => {
          setDate(res);
        }}
      />
      <View style={styles.journalContainer}>
        <RobotoMedium style={styles.imgText}>Image</RobotoMedium>
        <RobotoRegular style={styles.entryText}>Add Image</RobotoRegular>
      </View>
      <Image source={generalImages.books} style={styles.journalImg} />
      <CustomButton
        text={'Save To Library'}
        onPress={() => successRef.current.show()}
      />

      <SuccessPopup
        reference={successRef}
        title={'Success'}
        desc={'Journal has been added to the library.'}
        onAccept={() => props.navigation.goBack()}
      />
    </ScreenWrapper>
  );
};
export default AddNewJournal;
