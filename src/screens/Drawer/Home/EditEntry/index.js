import React, {
  useLayoutEffect,
  useRef,
  useState,
  useEffect,
  useCallback,
} from 'react';
import {View, Image, FlatList, RefreshControl} from 'react-native';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
import styles from './styles';
import TextEditor from '../../../../components/ReusableComponent/TextEditor';
import CustomDropdown from '../../../../components/Dropdowns/CustomDropdown';
import ImagePicker from '../../../../components/Image/ImagePicker';
import PublishQuestionPopup from '../../../../components/popups/PublishQuestionPopup';
import ImagePopup from '../../../../components/popups/ImagePopup';
import EntrySettingPopup from '../../../../components/popups/EntrySettingPopup';
import SuccessPopup from '../../../../components/popups/SuccessPopup';
import HashtagPopup from '../../../../components/popups/HashtagPopup';
import MyNetworkPopup from '../../../../components/popups/MyNetworkPopup';
import RippleHOC from '../../../../components/wrappers/Ripple';
import {icons} from '../../../../assets/images';
import ImageComponent from '../../../../components/Image/ImageComponent';
import ContentContainer from '../../../../components/wrappers/ContentContainer';
import {
  useGetEntryByIdQuery,
  usePostDeleteEntryMutation,
  usePostUpdateEntryMutation,
  useSetting,
} from '../../../../state/entry';
import useEntry from '../../../../hooks/useEntry';
import ContentLoader from '../../../../components/Loaders/ContentLoader';
import {Toast} from '../../../../Api/APIHelpers';
import {useGetJournalsQuery} from '../../../../state/journal';
import { useGlobalLoader } from '../../../../state/general';
import ButtonLoading from '../../../../components/Loaders/ButtonLoading';

const EditEntry = props => {
  const {id} = props?.route?.params;

  const {data, isLoading, error,isFetching, refetch,originalArgs} = useGetEntryByIdQuery(id);

  const [refreshing, setRefreshing] = useState(false);
  

  const [entryText, setEntryText] = useState(data?.journalEntry?.content);

  const [background, setBackground] = useState(false);
  // const [privacy, setPrivacy] = useState('Private');
  const setting=useSetting()
  const [imageSelection, setImageSelection] = useState(false);

  const journal = useGetJournalsQuery();
  const [dropdownValue, setDropdownValue] = useState("");
  const [imageArray, setImageArray] = useState(data?.journalEntry?.images);
  const [imageIdArray, setImageIdArray] = useState([]);
  const [postDeleteEntry] = usePostDeleteEntryMutation(data?.journalEntry?._id);
  const [myhashtags, setMyHashtags] = useState(data?.journalEntry?.hashtags);
  const [visiblity, setVisiblity] = useState(setting?.visiblity);
  const [comment, setComment] = useState(data?.journalEntry?.comment);
  const [selectedPeople, setSelectedPeople] = useState([]);
  const [selectedPeopleId, setSelectedPeopleId] = useState(
   [],
  );
  const globalRef = useRef(null);
  const imagePopupRef = useRef(null);
  const deleteRef = useRef(null);
  const [image, setImage] = useState(null);
  const networkPopup = useRef(null);
  const globalPopup = useRef(null);
  const hashTagRef = useRef(null);
  const successPopup = useRef(null);
  const settingRef = useRef(null);
  const {updateEntry} = useEntry();
  const entryLoader= useGlobalLoader()
  // console.log(" data entry", data);

  // useLayoutEffect(() => {
  //   props.navigation.setOptions({
  //     headerTitle: () => {
  //       return (
  //         <DamionRegular style={styles.titleCenterText}>
  //           {props.route?.params?.type}
  //         </DamionRegular>
  //       );
  //     },
  //   });
  // }, [props.navigation]);
  const tempId=[]
  const tempIdFriend=[]
  useEffect(() => {
    // const unsubscribe = props.navigation.addListener('focus', () => {
    //   refetch();
    if (data?.journalEntry) {
      setMyHashtags(data?.journalEntry?.hashtags);
      setDropdownValue(data?.journalEntry?.journal);
      setVisiblity(data?.journalEntry?.privacy);
      setComment(data?.journalEntry?.comment);
      setEntryText(data?.journalEntry?.content)

      setImageArray(data?.journalEntry?.images);
      data?.journalEntry?.images.map((value, index) => {
        setImageIdArray([...imageIdArray, value?._id]);
      });
      data?.journalEntry?.selectedPeople.map((value, index) => {
        tempId.push(value?._id)
        tempIdFriend.push(value)
      });
      setSelectedPeopleId(tempId);
      setSelectedPeople(tempIdFriend);
    }
    // });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    // return unsubscribe;
  }, [data]);

  const renderImage = ({item}) => {
    return <ImageComponent uri={item?.thumbnail} />;
  };

  const updateItemImages = img => {
    setImageIdArray(p => [...p, img?._id]);
    setImageArray(p => [...p, img]);
  };
  const onPressSend = () => {
    if(visiblity=="myNetwork")
    {
      networkPopup.current.show()
    }
    else{
      hashTagRef.current.show()
      
    

    }


    
  };
  console.log(" seletced", selectedPeople,selectedPeopleId,data?.journalEntry?.selectedPeople);
  const updateEntryFunc=()=>{
      updateEntry({
      id,
      entryText,
      visiblity: data?.journalEntry?.privacy,
      hashtags: myhashtags,
      comment,
      journal: dropdownValue?._id,
      imageArray: imageIdArray,
      selectedPeople: selectedPeopleId,
      status: 'published',
    }).then(res => {
      if (res) {
        successPopup.current.show();
      }
    });
  }
  const onPressEntryDelete = () => {
    postDeleteEntry(data?.journalEntry?._id).then(res => {
      if (res?.data) {
        Toast.success(res?.data?.message);
        props.navigation.goBack();
      }
    });
  };
  const onRefresh = useCallback(() => {
    refetch();
  }, []);
  const handleRoute = value => {
    setVisiblity(value);
  };
  // console.log("data?.journalEntry?.content",data?.journalEntry?.content);
if(isLoading)
{
  return(
    <ScreenWrapper style={styles.container}>
      <ContentLoader/>
    </ScreenWrapper>
  )
}
  return (
    <ScreenWrapper style={styles.container}>
     
      <ContentContainer
        usecontainer={true}
        aware
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <CustomDropdown
          array={journal?.data?.journal}
          dropdownValue={dropdownValue}
          dropdownTitle={'No Journal Selected'}
          setDropdownValue={setDropdownValue}
        />
        <TextEditor
          background={background}
          entryText={entryText}
          setEntryText={setEntryText}
          initialContent={data?.journalEntry?.content}
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
          {
            entryLoader?
            <ButtonLoading style={styles.loadingStyle}/>:
          <RippleHOC onPress={onPressSend}>
            <Image source={icons.send} style={styles.textIcon} />
          </RippleHOC>

          }
        </View>
        <MyNetworkPopup
         reference={networkPopup}
          onAccept={() => hashTagRef.current.show()}
          selectedPeople={selectedPeople}
          setSelectedPeople={setSelectedPeople}
          selectedPeopleId={selectedPeopleId}
          setSeelectedPeopleId={setSelectedPeopleId} 
          // onAccept={() => hashTagRef.current.show()}
        />
        <HashtagPopup
          reference={hashTagRef}
          onAccept={updateEntryFunc}
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
            props.navigation.navigate('Visiblity', {visiblity, handleRoute})
          }
          onPressTag={() => hashTagRef.current.show()}
          onPressDelete={() => deleteRef.current.show()}
          visiblity={visiblity}
          hashtags={myhashtags}
          comment={comment}
          onPressEntryDelete={onPressEntryDelete}
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
          entityType={'journalEntry'}
        />
      </ContentContainer>
    </ScreenWrapper>
  );
};
export default EditEntry;
