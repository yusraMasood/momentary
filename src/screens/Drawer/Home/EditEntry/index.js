import React, {useLayoutEffect, useRef, useState, useEffect} from 'react';
import {View, Image, ScrollView, FlatList} from 'react-native';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
import styles from './styles';
import DamionRegular from '../../../../components/Texts/DamionRegular';
import TextEditor from '../../../../components/ReusableComponent/TextEditor';
import CustomDropdown from '../../../../components/Dropdowns/CustomDropdown';
import ImagePicker from '../../../../components/Image/ImagePicker';
import PublishQuestionPopup from '../../../../components/popups/PublishQuestionPopup';
import ImagePopup from '../../../../components/popups/ImagePopup';
import EntrySettingPopup from '../../../../components/popups/EntrySettingPopup';
import SuccessPopup from '../../../../components/popups/SuccessPopup';
import HashtagPopup from '../../../../components/popups/HashtagPopup';
import MyNetworkPopup from '../../../../components/popups/MyNetworkPopup';
import PulishEntryPopup from '../../../../components/popups/PulishEntryPopup';
import RippleHOC from '../../../../components/wrappers/Ripple';
import {icons} from '../../../../assets/images';
import ImageComponent from '../../../../components/Image/ImageComponent';
import {useDispatch} from 'react-redux';
import ContentContainer from '../../../../components/wrappers/ContentContainer';
import {useGetEntriesQuery, useGetEntryByIdQuery, useSetting} from '../../../../state/entry';
import useEntry from '../../../../hooks/useEntry';

const EditEntry = props => {
  console.log('props.route?.params?.id', props.route?.params?.id);
  
  // const message = useGetEntryByIdQuery({id: props.route?.params?.id});
  const [entryText, setEntryText] = useState(
    props.route?.params?.lastItem?props.route?.params?.lastItem?.content: '',
  ); 
  const {addEntry} = useEntry();

  const [background, setBackground] = useState(false);
  const [privacy, setPrivacy] = useState('Private');
  const [dropdownValue, setDropdownValue] = useState('');
  const documentsArray = ['text1', 'text2', 'text3'];
  const [imageSelection, setImageSelection] = useState(false);
  const [myhashtags, setMyHashtags] = useState([]);

  const [pageDesign, setPageDesign] = useState(null);

  const dispatch = useDispatch();
  const setting = useSetting();

  const globalRef = useRef(null);
  const imagePopupRef = useRef(null);
  const deleteRef = useRef(null);
  const [image, setImage] = useState(null);
  const publishEntry = useRef(null);
  const [imageArray, setImageArray] = useState(props.route?.params?.lastItem?.images?props.route?.params?.lastItem?.images:[]);
  const networkPopup = useRef(null);
  const globalPopup = useRef(null);
  const hashTagRef = useRef(null);
  const successPopup = useRef(null);
  const settingRef = useRef(null);
  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerLeft: () => {
        return (
          <RippleHOC onPress={onPressBack}>
            <Image source={icons.back} style={styles.backIcon} />
          </RippleHOC>
        );
      },
      headerTitle: () => {
        return (
          <DamionRegular style={styles.titleCenterText}>
            {props.route?.params?.type}
          </DamionRegular>
        );
      },
    });
  }, [props.navigation]);

  const renderImage = ({item}) => {
    return <ImageComponent uri={item?.thumbnail} />;
  };

  const updateItemImages = img => {
    // setImageIds(p=>[...p,img?._id])
    setImageArray(p => [...p, img]);
  };
  const onPressSend = () => {
    if (setting?.visiblity == '') {
      publishEntry.current.show();
    } else {
      hashTagRef.current.show();
    }
  };
  const onPressBack = () => {
    if (entryText == '') {
      // log
      props.navigation.goBack();
    } else {
      addEntry({entryText, imageArray}).then(res => {
        if (res) {
          props.navigation.goBack();
        }
      });
    }
  };
  const addEntryFunc = () => {
    addEntry({entryText, imageArray}).then(res => {
      if (res) {
        successPopup.current.show();
      }
    });
  };
  return (
    <ScreenWrapper style={styles.container}>
      <ContentContainer usecontainer={true} aware>
        <CustomDropdown
          array={documentsArray}
          dropdownValue={dropdownValue}
          dropdownTitle={'No Journal Selected'}
          setDropdownValue={setDropdownValue}
        />
        <TextEditor
          background={background}
          entryText={entryText}
          setEntryText={setEntryText}
        />
        <FlatList
          data={imageArray}
          key={'imageArray'}
          contentContainerStyle={styles.contentContainerStyle}
          horizontal={true}
          keyExtractor={(item, index) => index}
          renderItem={renderImage}
        />
        <View style={styles.editContainer}>
          <RippleHOC onPress={() => setBackground(!background)}>
            <Image source={icons.text} style={styles.textIcon} />
          </RippleHOC>
          <RippleHOC onPress={() => setImageSelection(true)}>
            <Image source={icons.addImage} style={styles.textIcon} />
          </RippleHOC>
          <RippleHOC onPress={() => settingRef.current.show()}>
            <Image source={icons.settingEntry} style={styles.textIcon} />
          </RippleHOC>
          <RippleHOC onPress={onPressSend}>
            <Image source={icons.send} style={styles.textIcon} />
          </RippleHOC>
        </View>

        <PulishEntryPopup
          reference={publishEntry}
          // onAccept={() => networkPopup.current.show()}
          onAccept={() => hashTagRef.current.show()}
          title={'Publish To'}
          desc={
            'Entries published on the Momentary Global Network are anonymized and will not include your user information or metadata from your photos.\n\nIdentifying information you have written in the entry itself will still be visible, as we do not censor or otherwise modify your writing. '
          }
          onReject={() => globalRef.current.show()}
          yesBtn={'My Network'}
          noBtn={'Global Network'}
          setPrivacy={setPrivacy}
          // privacy={privacy}
        />
        <MyNetworkPopup
          reference={networkPopup}
          // onAccept={() => hashTagRef.current.show()}
        />
        <HashtagPopup
          reference={hashTagRef}
          onAccept={addEntryFunc}
          setMyHashtags={setMyHashtags}
          myhashtags={myhashtags}
        />

        <SuccessPopup
          reference={successPopup}
          onAccept={() => props.navigation.navigate('MyEntries')}
          title={'Success'}
          desc={'Your entry has been published\nsuccessfully.'}
        />
        <EntrySettingPopup
          reference={settingRef}
          // onPressDesign={() => pageDesignRef.current.show()}
          onPressVisiblity={() =>
            props.navigation.navigate('Visiblity', {privacy})
          }
          // onPressTag={() => hashTagRef.current.show()}
          onPressTag={() => hashTagRef.current.show()}
          onPressDelete={() => deleteRef.current.show()}
          // comment={comment}
          // setComment={setComment}
        />
        <PublishQuestionPopup
          reference={globalRef}
          title={'Publish'}
          contentStye={styles.publishPopup}
          desc={`Entries published on the Momentary Global Network are anonymized and will not include your user information or metadata from your photos.\n\nIdentifying information you have written in the entry itself will still be visible, as we do not censor or otherwise modify your writing.\n\nAre you sure you want to publish to Global Network?`}
          onAccept={() => hashTagRef.current.show()}
        />
        <ImagePopup reference={imagePopupRef} />
        <PublishQuestionPopup
          reference={deleteRef}
          title={'Delete Entry'}
          desc={'Are you sure you want to Delete an Entry?'}
        />
        <ImagePicker
          image={image}
          setImage={setImage}
          updateImages={updateItemImages}
          imageSelection={imageSelection}
          setImageSelection={setImageSelection}
        />
      </ContentContainer>
    </ScreenWrapper>
  );
};
export default EditEntry;
