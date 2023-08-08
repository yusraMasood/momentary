import React, {useState, useRef} from 'react';
import {FlatList, View, StyleSheet, BackHandler} from 'react-native';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
import * as Progress from 'react-native-progress';
import {vh, vw} from '../../../../utils/dimensions';
import styles from './styles';
import BookPrintingSelectCard from '../../../../components/Cards/BookPrintingSelectCard';
import RobotoRegular from '../../../../components/Texts/RobotoRegular';
import {colors} from '../../../../utils/appTheme';
import CustomButton from '../../../../components/Buttons/CustomButton';
import DateInputPick from '../../../../components/Inputs/DateInputPick';
import InputField from '../../../../components/Inputs/InputField';
import RadioButton from '../../../../components/RadioButton';
import {useFocusEffect} from '@react-navigation/native';
import RippleHOC from '../../../../components/wrappers/Ripple';
import CustomDropdown from '../../../../components/Dropdowns/CustomDropdown';
import RobotoMedium from '../../../../components/Texts/RobotoMedium';
import {printingOptions, summaryData} from '../../../../utils/data';
import SuccessPopup from '../../../../components/popups/SuccessPopup';
import PhotoEditorPopup from '../../../../components/popups/PhotoEditorPopup';

const BookPrintingSelectType = props => {
  const [progressCount, setProgressCount] = useState(15);
  const [radioPositionIndex, setRadioPositionIndex] = useState(0);
  const [radioPaperIndex, setRadioPaperIndex] = useState(0);
  const [dropdownFontValue, setDropdownFontValue] = useState('');
  const [fontIndex, setFontIndex] = useState(0);
  const [dropdownFontSizeValue, setDropdownFontSizeValue] = useState('');
  const [pictureEditor,setPictureEditor] =useState(false)
  const successRef = useRef(null);
  const fontArray = ['Academic', 'Brutalist', 'Classical'];
  const [count, setCount] = useState(0);
  const radioPositionItem = ['Front', 'Spine', 'Both', 'Neither'];
  const radioPaperItem = ['Paperback', 'Hardcover'];
  // const journalTitleRef=useRef(null)
  const authorRef = useRef(null);
  const totalSteps = 100;

  useFocusEffect(
    React.useCallback(() => {
      const Back = BackHandler.addEventListener(
        'hardwareBackPress',
        handleBackBtn,
      );
      return () => {
        Back.remove();
      };
    }, [progressCount]),
  );
  const handleBackBtn = () => {
    if (progressCount < 30) {
      props.navigation.goBack();
    }
    if (progressCount == 100) {
      setProgressCount(progressCount - 25);
    } else {
      setProgressCount(progressCount - 15);
    }
    return true;
  };
  const renderPrintingData = ({item}) => {
    return (
      <BookPrintingSelectCard
        image={item.image}
        title={item.title}
        onPress={() => setProgressCount(progressCount + 15)}
        desc={item.desc}
      />
    );
  };
  const renderStepOne = () => {
    return (
      <FlatList
        data={printingOptions}
        keyExtractor={(item, index) => index}
        key={'printingOptionsArray'}
        contentContainerStyle={styles.contentContainer}
        renderItem={renderPrintingData}
      />
    );
  };
  const renderStepTwo = () => {
    return (
      <View style={styles.dateContainer}>
        <DateInputPick label={'From'} />
        <DateInputPick label={'To'} />

        <CustomButton
          text={'Continue'}
          alignStyle={styles.alignBtn}
          onPress={() => {
            setProgressCount(progressCount + 15)
            setPictureEditor(true)
          }}
        />
      </View>
    );
  };
  const renderStepThree = () => {
    return (
      <View>
        {pictureEditor &&
        <PhotoEditorPopup/>
        }
      <CustomButton
        text={'Continue'}
        alignStyle={styles.alignBtn}
        onPress={() => setProgressCount(progressCount + 15)}
      />
      </View>
    );
  };

  const renderStepFour = () => {
    return (
      <View>
        <RobotoRegular style={styles.titleJournalText}>
          Title Of The Journal{' '}
        </RobotoRegular>
        <InputField
          placeholder={'Enter Journal Title'}
          inputContainerStyle={styles.inputAlignContainer}
          inputContainerIcon={styles.input}
          // label={'Email'}
          keyboardType={'email-address'}
          onSubmitEditing={() => authorRef.current.focus()}
        />
        <RobotoRegular style={styles.titleJournalText}>
          Author Name
        </RobotoRegular>

        <InputField
          reference={authorRef}
          inputContainerIcon={styles.input}
          inputContainerStyle={styles.inputAlignContainer}
          placeholder={'Enter Author Name'}
          // label={'Email'}
          keyboardType={'email-address'}
        />
        <RobotoRegular style={styles.titleJournalText}>
          Select Postion
        </RobotoRegular>
        <View style={styles.positionContainer}>
          {radioPositionItem.map((item, index) => {
            const focus= radioPositionIndex==index
            return (
              <RippleHOC onPress={()=> setRadioPositionIndex(index)} key={index} style={styles.radioItemContainer}>
                <RadioButton focus={focus} style={styles.radioContainer} />
                <RobotoRegular style={styles.radioText}>{item}</RobotoRegular>
              </RippleHOC>
            );
          })}
        </View>
        <RobotoRegular style={styles.titleJournalText}>
          Select Paper
        </RobotoRegular>
        <View style={styles.paperContainer}>
          {radioPaperItem.map((item, index) => {
            const focus=radioPaperIndex==index
            return (
              <RippleHOC onPress={()=> setRadioPaperIndex(index)} key={index} style={styles.radioItemContainer}>
                <RadioButton focus={focus} style={styles.radioContainer} />
                <RobotoRegular style={styles.radioText}>{item}</RobotoRegular>
              </RippleHOC>
            );
          })}
        </View>
        <CustomButton
          text={'Continue'}
          alignStyle={styles.alignBtn}
          onPress={() => setProgressCount(progressCount + 15)}
        />
      </View>
    );
  };
  const renderStepFive = () => {
    return (
      <View>
        {dropdownFontValue ? (
          <View>
            <RobotoRegular
              style={[styles.titleJournalText, styles.titleFocusJournalText]}
            >
              Poppins
            </RobotoRegular>

            <CustomDropdown
              array={['12px']}
              dropdownTitle={'Select Font'}
              dropdownValue={dropdownFontSizeValue}
              statusStyle={styles.dropdownContainer}
              setDropdownValue={setDropdownFontSizeValue}
            />
          </View>
        ) : (
          <View>
            <View style={styles.paperContainer}>
              {fontArray.map((item, index) => {
                const focus = fontIndex == index;
                return (
                  <RippleHOC key={index} onPress={() => setFontIndex(index)}>
                    <RobotoRegular
                      style={[
                        styles.titleJournalText,
                        focus && styles.titleFocusJournalText,
                      ]}
                    >
                      {item}
                    </RobotoRegular>
                  </RippleHOC>
                );
              })}
            </View>
            <CustomDropdown
              array={['Poppins']}
              dropdownTitle={'Select Font'}
              dropdownValue={dropdownFontValue}
              statusStyle={styles.dropdownContainer}
              setDropdownValue={setDropdownFontValue}
            />
          </View>
        )}
        <CustomButton
          text={dropdownFontValue ? 'Continue' : 'Preview Journal'}
          alignStyle={styles.alignBtn}
          onPress={() => setProgressCount(progressCount + 25)}
        />
      </View>
    );
  };

  const renderSummaryInfo = ({item}) => {
    return (
      <View style={styles.summaryContainer}>
        <RobotoMedium style={styles.dateRangeText}>{item?.title}</RobotoMedium>
        <RobotoRegular style={styles.dateText}>{item?.value}</RobotoRegular>
      </View>
    );
  };

  const renderStepSix = () => {
    return (
      <View>
        <FlatList
          data={summaryData}
          numColumns={2}
          key={'summaryArray'}
          keyExtractor={(item, index) => index}
          columnWrapperStyle={styles.columnStyle}
          renderItem={renderSummaryInfo}
        />
        <CustomButton
          text={'Continue'}
          alignStyle={styles.alignBtn}
          // onPress={() => setProgressCount(progressCount + 25)}
          onPress={() => successRef.current.show()}
        />
      </View>
    );
  };
  const renderSteps = () => {
    switch (progressCount) {
      case 15:
        return renderStepOne();
      case 30:
        return renderStepTwo();
      case 45:
        return renderStepThree();
      case 60:
        return renderStepFour();
      case 75:
        return renderStepFive();
      case 100:
        return renderStepSix();
    }
  };
  const renderTextHeading = () => {
    switch (progressCount) {
      case 15:
        return "With Momentary, you can bring{'\n'} your content to life in professionally-bound{'\n'} hardcover journals";
      case 30:
        return 'Select Date Range';
      case 45:
        return 'Select Cover Design';
      case 60:
        return 'Select Page Design';
      case 75:
        return 'Select Font Style';
      case 100:
        return 'Journal Preview';
    }
  };
  const renderHeaderStep = () => {
    return (
      <RobotoRegular style={styles.momentaryDescText}>
        {renderTextHeading()}
      </RobotoRegular>
    );
  };

  return (
    <ScreenWrapper style={styles.container}>
      {renderHeaderStep()}
      <View>
        <RobotoRegular style={styles.countText}>
          {' '}
          {progressCount}%
        </RobotoRegular>
        <Progress.Bar
          progress={progressCount / totalSteps}
          width={vw * 78}
          height={vh * 1.5}
          // unfilledColor="#ECECEC"
          borderColor={colors.input.greyBorder}
          borderWidth={1}
          // animated
          borderRadius={vh * 1}
          color={colors.themeColor.yellow}
          style={styles.progressStyle}
        />
      </View>
      {renderSteps()}
      <SuccessPopup
        reference={successRef}
        title={'Alert'}
        desc={
          'Your journal can be up to 500  pages, we advise breaking journals bigger than 400 pages into multiple volumes.'
        }
        onAccept={() => props.navigation.navigate('BookPrintingPlaceOrder')}
        styleContent={styles.popupStyle}
      />
      <PhotoEditorPopup
      visible={pictureEditor}
      onFinish={()=> console.log(" completed")}
      />
    </ScreenWrapper>
  );
};
export default BookPrintingSelectType;
