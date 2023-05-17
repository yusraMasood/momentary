import React, {useState,useLayoutEffect,useRef,useEffect} from 'react';
import {View, Image, FlatList,LayoutAnimation} from 'react-native';
import {generalImages, icons} from '../../../../assets/images';
import BasicButton from '../../../../components/Buttons/BasicButton';
import JournalCard from '../../../../components/Cards/JournalCard';
import SearchInput from '../../../../components/Inputs/SearchInput';
import PublishQuestionPopup from '../../../../components/popups/PublishQuestionPopup';
import DamionRegular from '../../../../components/Texts/DamionRegular';
import RobotoMedium from '../../../../components/Texts/RobotoMedium';
import RobotoRegular from '../../../../components/Texts/RobotoRegular';
import RippleHOC from '../../../../components/wrappers/Ripple';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
import styles from './styles';
import { useGetFeedQuery, useGetFriendDetailsQuery, usePostRemoveFriendMutation } from '../../../../state/friends';
import ContentLoader from '../../../../components/Loaders/ContentLoader';
import { Toast } from '../../../../Api/APIHelpers';

const FriendDetails = props => {
  const [search,setSearch]=useState("")
  const [entryPage,setEntryPage] =useState(1)
  const [entriesData,setEntriesData] =useState([])
  const {data,isLoading,error} =useGetFriendDetailsQuery(props?.route?.params?.id)
  const {data: friendAEntries,isFetching} =useGetFeedQuery({
    page:entryPage,
    limit:5,
    privacy:"",
    friend:props?.route?.params?.id,
    keyword: search
  })
  const [postRemoveFriend,removeFriendMessage] = usePostRemoveFriendMutation()
  console.log("remove friend",error);


  const [journals, setJournals] = useState(false);
  const removeRef=useRef(null)
  // console.log("friend id ", friendDetails);

  const contactArray = [
    {
      id: 1,
      image: icons.email,
      value: data?.friendDetails?.email,
    },
    {
      id: 2,
      image: icons.phone,
      value: data?.friendDetails?.phone,
    },
  ];
  useEffect(() => {
    if(!isFetching){
      if(entryPage===1)
      {
        setEntriesData(friendAEntries?.feeds)

        
      }
      else{
        setEntriesData([...entriesData,...friendAEntries?.feeds])
      }
    }
   
  }, [friendAEntries]);
  const onRemoveFriend=()=>{
// console.log("props?.route?.params?.id",props?.route?.params?.id);
    postRemoveFriend(props?.route?.params?.id).then((res)=>{
     console.log("res remove friend",res);
      if(res?.data?.message)
      {
        Toast.success(res?.data?.message)
        props.navigation.goBack()
      }
      if(res?.error?.data)
      {
        Toast.error(res?.data?.data)
      }
    })
  }
  useLayoutEffect(() => {
    props.navigation.setOptions({
        headerTitle: () => {
        return (
          <DamionRegular style={styles.titleCenterText}>
            {data?.friendDetails?.fullName}
          </DamionRegular>
        );
      },
    });
  }, [props.navigation]);

  const changeJournal=() => {
  
    // LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
    setJournals(!journals)
  
  }
  const renderUserProfileDetails = () => {
    return (
      <View>
        <View style={styles.imgBtnContainer}>
          <Image source={generalImages.userImage} style={styles.userImage} />
          <BasicButton
            text={'Remove'}
            onPress={()=> removeRef.current.show()}
            style={styles.removeBtn}
            textStyle={styles.removeText}
          />
        </View>
        <RobotoMedium style={styles.usernameText}>{data?.friendDetails?.fullName}</RobotoMedium>
        <RobotoRegular style={styles.descText}>
          {/* Lorem ipsum dolor sit amet, consectetur{'\n'}adipiscing elit.{' '} */}
        </RobotoRegular>
        <View style={styles.contact}>
          {contactArray.map((item, index) => {
            return (
              <View style={styles.itemContainer}>
                <Image
                  source={item.image}
                  style={[styles.contactImage, item.id == 2 && styles.phoneImg]}
                />
                <RobotoRegular style={styles.itemText}>
                  {item.value}
                </RobotoRegular>
              </View>
            );
          })}
        </View>
        <View style={styles.entryHeadContainer}>
          <RobotoMedium style={styles.entriesText}>Entries</RobotoMedium>
          {/* <View style={styles.browseContainer}>
            <RippleHOC onPress={changeJournal}>
              <RobotoRegular style={[styles.browseEntryText, 
                !journals&& styles.entryFocusText]}>
                Browse Entries
              </RobotoRegular>
            </RippleHOC>
            <RippleHOC onPress={changeJournal}>
              <RobotoRegular
                style={[styles.browseEntryText, styles.spaceInText, journals&& styles.entryFocusText]}
              >
                Browse Journals
              </RobotoRegular>
            </RippleHOC>
          </View> */}
        </View>
        <View style={styles.inputContainer}>
          <SearchInput placeholder={"Search"}
          value={search}
          onChangeText={setSearch}
          style={styles.searchInput}  />
        </View>
      </View>
    );
  };
  const renderListCard = ({item}) => {
    return <JournalCard 
    heading={item?.heading}
    publish={item?.createdAt}
    // desc={item?.desc}
    desc={item?.content}


    
    />;
  };
  const handleOnEndReached=()=>{
    if (entriesData.length > 4) {
      if(friendAEntries?.totalPages!=entryPage)
      {
        setEntryPage(entryPage + 1);
      }
    }
  }
  const renderEntryList = () => {
    return (
      <View>
        <FlatList
          data={entriesData}
          key={"entryArray"}
          keyExtractor={(item,index)=> index}
          renderItem={renderListCard}
          onEndReached={handleOnEndReached}
          ListHeaderComponent={renderUserProfileDetails}
        />
      </View>
    );
  };
  const renderJournalist = () => {
    return (
      <View>
        <FlatList
          data={[1,2,3,4]}
          keyExtractor={(item,index)=> index}
          key={"journalArray"}

          ListHeaderComponent={renderUserProfileDetails}
          renderItem={renderListCard}
        />
      </View>
    );
  };
  // console.log();
  return (
    <ScreenWrapper style={styles.container}>
      {isLoading?
      error?
      <RobotoMedium style={styles.usernameText}>Something went wrong</RobotoMedium>
      :
    <ContentLoader/>:
    
    renderEntryList()
    }
       

      <PublishQuestionPopup
        reference={removeRef}
        title={'Remove Friend'}
        desc={`Are you sure you wish to remove the\nfriend?`}
        contentStye={styles.popupStyle}
        onAccept={onRemoveFriend}
      />
    </ScreenWrapper>
  );
};
export default FriendDetails;
