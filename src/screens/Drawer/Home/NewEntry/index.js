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
import {
  saveSetting,
  useSetting,
} from '../../../../state/entry';
import useEntry from '../../../../hooks/useEntry';
import {useGlobalLoader, useInlineLoader} from '../../../../state/general';
import ButtonLoading from '../../../../components/Loaders/ButtonLoading';
import {useGetJournalsQuery} from '../../../../state/journal';
import {useGetMyFriendsQuery} from '../../../../state/friends';
import { Toast } from '../../../../Api/APIHelpers';

const NewEntry = props => {
  // const {lastItem} = props?.route?.params;
  const setting =useSetting()
  const [entryText, setEntryText] = useState('');
  const [background, setBackground] = useState(false);
  const [imageSelection, setImageSelection] = useState(false);
  const [imageArray, setImageArray] = useState([]);
  const [imageIdArray, setImageIdArray] = useState([]);
  const [myhashtags, setMyHashtags] = useState(
    setting?.hashtags?setting?.hashtags:[],
  );
  const [pageDesign, setPageDesign] = useState(null);
  const [visiblity, setVisiblity] = useState(
    setting?.visiblity?setting?.visiblity:"",
  );
  const [selectedPeople, setSelectedPeople] = useState(
   setting?.selectedPeople?setting?.selectedPeople:[],

  );
  const [selectedPeopleId, setSelectedPeopleId] = useState(
   setting?.selectedPeopleId?setting?.selectedPeopleId:[],
  );
  const [comment, setComment] = useState(
    setting?.comment?setting?.comment:true
  );
  const {addEntry} = useEntry();
  const imageLoader = useInlineLoader();
  const {data} = useGetJournalsQuery(   {
    // keyword: search,
    page:1,
    limit: 10,
  },);
  const globalRef = useRef(null);
  const imagePopupRef = useRef(null);
  const deleteRef = useRef(null);
  const [image, setImage] = useState(null);
  const publishEntry = useRef(null);

  const networkPopup = useRef(null);
  const globalPopup = useRef(null);
  const hashTagRef = useRef(null);
  const successPopup = useRef(null);
  const settingRef = useRef(null);
  const dispatch =useDispatch()
  const entryLoader= useGlobalLoader()

  const [dropdownValue, setDropdownValue] = useState(null);

  const handleRoute = data => {

    setVisiblity(data);
  };
  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerLeft: () => {
        return (
          <RippleHOC onPress={onPressBack}>
            <Image source={icons.back} style={styles.backIcon} />
          </RippleHOC>
        );
      },
      headerRight: () => {
        return (
          <View style={styles.rightContainer}>
            <RippleHOC onPress={() => props.navigation.navigate('MyEntries')}>
              <Image source={icons.pin} style={styles.entryIcon} />
            </RippleHOC>
            <RippleHOC onPress={onPressSave}>
              <Image source={icons.save} style={styles.saveIcon} />
            </RippleHOC>
            <RippleHOC>
              <Image source={icons.cloud} style={styles.entryIcon} />
            </RippleHOC>
          </View>
        );
      },
    });
  }, [props.navigation]);

  const renderImage = ({item}) => {
    return <ImageComponent uri={item?.thumbnail} />;
  };
  
  const updateItemImages = img => {
    // console.log("image",img);
   


    setImageIdArray(i=> [...i, img?._id]);
    setImageArray(p => [...p, img]);
  };
  // console.log("image",imageIdArray);
  // console.log("image",imageArray);
  const onPressSend = () => {
    if (setting?.visiblity == "") {
    return  publishEntry.current.show();
    }
    if (setting?.visiblity=== 'My Network') {
      return  networkPopup.current.show();
    } 
    else {
      return  hashTagRef.current.show();
    }
  };
  const onPressSave=()=>{
    // console.log(selectedPeopleId);
    addEntry({
      entryText,
      imageArray: imageIdArray,
      journal: dropdownValue?._id,
      visiblity: setting?.visiblity,
      comment,
      hashtags: myhashtags,
      selectedPeople: selectedPeopleId,
      status: 'draft',
    }).then(res => {
      if(res){
        // setEntryText("")
        Toast.success("Your Entry is Saved")

      }
    });
  }

  
  const onPressBack = () => {
    props.navigation.goBack()
    // if (entryText == '') {
    //   props.navigation.goBack();
    // } else {
    //   addEntry({
    //     entryText,
    //     imageArray: imageIdArray,
    //     journal: dropdownValue?._id,
    //     visiblity,
    //     comment,
    //     hashtags: myhashtags,
    //     selectedPeople: selectedPeopleId,
    //     status: 'draft',
    //   }).then(res => {
    //     if (res) {
    //       props.navigation.goBack();
    //     }
    //   });
    // }
  };
  const addEntryFunc = () => {
    addEntry({
      entryText,
      imageArray: imageIdArray,
      journal: dropdownValue?._id,
      visiblity: setting?.visiblity,
      comment,
      hashtags: myhashtags,
      selectedPeople: selectedPeopleId,
      status: 'published',
    }).then(res => {
      console.log("response add entry in screemn",res);
      successPopup.current.show();
    });
  };
  const renderImageFooter = () => {
    if (imageLoader) {
      return <ButtonLoading />;
    }
    return <View></View>;
  };
  const onPressMyNetwork = () => {
    
    setVisiblity('My Network');
    dispatch(saveSetting({...setting,visiblity: "My Network"}))

    networkPopup.current.show()
    // hashTagRef.current.show();
  };
  const onPressGlobalNetwork = () => {
    dispatch(saveSetting({...setting,visiblity: "Global Network"}))

    setVisiblity('Global Network');
    globalRef.current.show();
  };
  return (
    <ScreenWrapper style={styles.container}>
      <ContentContainer usecontainer={true} aware>
        <CustomDropdown
          array={data?.journal}
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
          ListFooterComponent={renderImageFooter}
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
          {
            entryLoader?
            <ButtonLoading style={styles.buttonLoading}/>:
          <RippleHOC onPress={onPressSend}>
            <Image source={icons.send} style={styles.textIcon} />
          </RippleHOC>

          }
        </View>

        <PulishEntryPopup
          reference={publishEntry}
          // onAccept={() => networkPopup.current.show()}
          onAccept={onPressMyNetwork}
          title={'Publish To'}
          desc={
            'Entries published on the Momentary Global Network are anonymized and will not include your user information or metadata from your photos.\n\nIdentifying information you have written in the entry itself will still be visible, as we do not censor or otherwise modify your writing. '
          }
          // onReject={() => globalRef.current.show()}
          // onAccept={()=>{

          // }}
          onReject={onPressGlobalNetwork}
          yesBtn={'My Network'}
          noBtn={'Global Network'}
          

          setPrivacy={setVisiblity}
          privacy={visiblity}
        />
        <MyNetworkPopup
          reference={networkPopup}
          onAccept={() => hashTagRef.current.show()}
          selectedPeople={selectedPeople}
          setSelectedPeople={setSelectedPeople}
          selectedPeopleId={selectedPeopleId}
          setSeelectedPeopleId={setSelectedPeopleId}
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
            props.navigation.navigate('Visiblity', {
              type: 'add',
              // visiblity,
              handleRoute,
            })
          }
          // onPressTag={() => hashTagRef.current.show()}
          onPressTag={() => hashTagRef.current.show()}
          onPressDelete={() => deleteRef.current.show()}
          visiblity={setting?.visiblity}
          hashtags={myhashtags}
          comment={comment}
          // comment={comment}
          setComment={setComment}
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
          type={'journalEntry'}
        />
      </ContentContainer>
    </ScreenWrapper>
  );
};
export default NewEntry;
