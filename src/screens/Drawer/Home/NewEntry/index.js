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
import useEntry from '../../../../hooks/useEntry';
import {
  LATITUDE_DELTA,
  LONGITUDE_DELTA,
  checkLocationPermissions,
  getCurrentLocation,
} from '../../../../utils/HelperFunction';
import {getAddressByLatLong} from '../../../../state/location';
import {Toast} from '../../../../Api/APIHelpers';
import {useDispatch} from 'react-redux';
import ContentContainer from '../../../../components/wrappers/ContentContainer';

const NewEntry = props => {
  const [entryText, setEntryText] = useState(
    'Hello <b>World</b> <p>this is a new paragraph</p> <p>this is another new paragraph</p>',
  );
  const [background, setBackground] = useState(false);
  const [privacy, setPrivacy] = useState('');
  const [dropdownValue, setDropdownValue] = useState('');
  const documentsArray = ['text1', 'text2', 'text3'];
  const [imageSelection, setImageSelection] = useState(false);
  const [myhashtags, setMyHashtags] = useState([]);
  const [location, setLocation] = useState(null);
  const dispatch = useDispatch();

  const {addEntry} = useEntry();

  const globalRef = useRef(null);
  const imagePopupRef = useRef(null);
  const deleteRef = useRef(null);
  const [image, setImage] = useState(null);
  const publishEntry = useRef(null);
  const [imageArray, setImageArray] = useState([]);
  const networkPopup = useRef(null);
  const globalPopup = useRef(null);
  const hashTagRef = useRef(null);
  const successPopup = useRef(null);
  const settingRef = useRef(null);

  const getUserLocation = async () => {
    const location = await getCurrentLocation();
    const data = {
      latitude: location.latitude,
      longitude: location.longitude,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    };
    try {
      const response = await dispatch(getAddressByLatLong(data));
      setLocation({
        latitude: location.latitude,
        longitude: location.longitude,
        name: response?.results[0]?.formatted_address,
      });
    } catch (e) {
      Toast.error(e);
    }
  };
  const setupMethods = async () => {
    checkLocationPermissions()
      .then(() => {
        getUserLocation();
      })
      .catch(e => {
        console.log('catch', e);
      });
  };
  useEffect(() => {
    setupMethods();
  }, []);
  // console.log(userLocation);
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

  const renderImage = ({item}) => {
    return <ImageComponent uri={item?.thumbnail} />;
  };

  const updateItemImages = img => {
    // setImageIds(p=>[...p,img?._id])
    setImageArray(p => [...p, img]);
  };
  const addEntryFunc = () => {
    // console.log(location);
    addEntry({privacy, entryText, imageArray, location, myhashtags}).then(
      res => {
        if (res) {
          successPopup.current.show();
        }
      },
    );
  };
  // console.log(imageArray,"imageArray");

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
          <RippleHOC onPress={() => publishEntry.current.show()}>
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
          // onAccept={}
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
          onPressVisiblity={() => props.navigation.navigate('Visiblity')}
          onPressTag={() => hashTagRef.current.show()}
          onPressDelete={() => deleteRef.current.show()}
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
export default NewEntry;
