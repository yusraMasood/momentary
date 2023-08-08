import React, {useRef, useState} from 'react';
import {View, Image,LayoutAnimation} from 'react-native';
import {generalImages, icons} from '../../../../assets/images';
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
import ImagePicker from '../../../../components/Image/ImagePicker';
import RippleHOC from '../../../../components/wrappers/Ripple';
import ContentContainer from '../../../../components/wrappers/ContentContainer';
import useJournal from '../../../../hooks/useJournal';
import { useGlobalLoader, useInlineLoader } from '../../../../state/general';
import ButtonLoading from '../../../../components/Loaders/ButtonLoading';

const AddNewJournal = props => {
  const successRef = useRef(null);
  const [date, setDate] = useState(new Date());
  const [title, setTitle] = useState('');
  const [hashtags, setHashtags] = useState([]);
  const [image, setImage] = useState(null);
  const [imageSelection, setImageSelection] = useState(false);
  const [search, setSearch] = useState('');
  const [lifeTime, setLifeTime] = useState(false);
  const loader = useGlobalLoader()
  const {addJournal} =useJournal()
  const imageLoader =useInlineLoader()

  const handleAddJournal = () => {
    addJournal({image, title, hashtags,lifeTime,date}).then((res)=>{
      if(res?.journal)
      {
        successRef.current.show()

      }
    });
  };
  const getSwitchValue = value => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
    setLifeTime(value);
  };
  return (
    <ScreenWrapper style={styles.container}>
      <ContentContainer>
      <View style={styles.entryContainer}>
        <RobotoRegular style={styles.entryText}>Add Entries</RobotoRegular>
      </View>

      <InputField
        label={'Add Journal Title'}
        inputContainerIcon={styles.inputInnerContainer}
        placeholder={'Enter Title'}
        value={title}
        onChangeText={setTitle}
        inputContainerStyle={styles.inputContainer}
      />
      <Hashtags hashtags={hashtags} setHashtags={setHashtags} />

      <View style={styles.journalContainer}>
        <RobotoMedium style={styles.imgText}>Life time journal</RobotoMedium>
        <CustomGoldenSwitch updateData={getSwitchValue} />
      </View>
      {lifeTime &&
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
      
      }
     
      <View style={styles.journalContainer}>
        <RobotoMedium style={styles.imgText}>Image</RobotoMedium>
        <RippleHOC onPress={() => setImageSelection(true)}>
          <RobotoRegular style={styles.entryText}>Add Image</RobotoRegular>
        </RippleHOC>
      </View>
      {imageLoader? <ButtonLoading/>
    :

        <Image source={{uri: image?.thumbnail}} style={styles.journalImg} />
    }
      {/* {image?.thumbnail && (
      )} */}
      {loader?
    <ButtonLoading/>:
    <CustomButton
      text={'Save To Library'}
      onPress={handleAddJournal}
    />

    }

      <SuccessPopup
        reference={successRef}
        title={'Success'}
        desc={'Journal has been added to the library.'}
        onAccept={() => props.navigation.goBack()}
      />
      <ImagePicker
        image={image}
        setImage={setImage}
        imageSelection={imageSelection}
        setImageSelection={setImageSelection}
        type={'journal'}
      />
      </ContentContainer>
    </ScreenWrapper>
  );
};
export default AddNewJournal;
