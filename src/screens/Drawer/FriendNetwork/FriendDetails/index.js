import React, {useState,useLayoutEffect,useRef} from 'react';
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

const FriendDetails = props => {
  const [journals, setJournals] = useState(false);
  const removeRef=useRef(null)
  const contactArray = [
    {
      id: 1,
      image: icons.email,
      value: 'Abc@email.com',
    },
    {
      id: 2,
      image: icons.phone,
      value: '123-446-78790',
    },
  ];
  const entryArray=[
    {
      heading:"Shared On",
      publish:"January 31, 2022 - 03:00 pm",
      desc:"Lorem ipsum dolor sit amet, consectetur are it adipiscing  elit. Aenean euismod bibendum laoreet. Proin gravida dolor  sitom"
    },
    {
      heading:"Shared On",
      publish:"January 31, 2022 - 03:00 pm",
      desc:"Lorem ipsum dolor sit amet, consectetur are it adipiscing  elit. Aenean euismod bibendum laoreet. Proin gravida dolor  sitom"
    },
    {
      heading:"Shared On",
      publish:"January 31, 2022 - 03:00 pm",
      desc:"Lorem ipsum dolor sit amet, consectetur are it adipiscing  elit. Aenean euismod bibendum laoreet. Proin gravida dolor  sitom"
    }
  ]
  const journalArray=[
    {
      heading:"Journal Name: Journal ABC",
      publish:"Published on: January 04, '22 - 00:30 pm",
      desc:"Total Entries: 32"
    },
    {
      heading:"Journal Name: Journal ABC",
      publish:"Published on: January 04, '22 - 00:30 pm",
      desc:"Total Entries: 32"
    },
    {
      heading:"Journal Name: Journal ABC",
      publish:"Published on: January 04, '22 - 00:30 pm",
      desc:"Total Entries: 32"
    },
    {
      heading:"Journal Name: Journal ABC",
      publish:"Published on: January 04, '22 - 00:30 pm",
      desc:"Total Entries: 32"
    },
  ]
  useLayoutEffect(() => {
    props.navigation.setOptions({
        headerTitle: () => {
        return (
          <DamionRegular style={styles.titleCenterText}>
            Abigale Wilson
          </DamionRegular>
        );
      },
    });
  }, [props.navigation]);

  const changeJournal=() => {
  
    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
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
        <RobotoMedium style={styles.usernameText}>Abigale Wilson</RobotoMedium>
        <RobotoRegular style={styles.descText}>
          Lorem ipsum dolor sit amet, consectetur{'\n'}adipiscing elit.{' '}
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
          <View style={styles.browseContainer}>
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
          </View>
        </View>
        <View style={styles.inputContainer}>
          <SearchInput placeholder={"Search"} style={styles.searchInput}  />
        </View>
      </View>
    );
  };
  const renderListCard = ({item}) => {
    return <JournalCard 
    heading={item?.heading}
    publish={item?.publish}
    desc={item?.desc}


    
    />;
  };
  const renderEntryList = () => {
    return (
      <View>
        <FlatList
          data={entryArray}
          key={"entryArray"}
          keyExtractor={(item,index)=> index}
          renderItem={renderListCard}
          ListHeaderComponent={renderUserProfileDetails}
        />
      </View>
    );
  };
  const renderJournalist = () => {
    return (
      <View>
        <FlatList
          data={journalArray}
          keyExtractor={(item,index)=> index}
          key={journalArray}

          ListHeaderComponent={renderUserProfileDetails}
          renderItem={renderListCard}
        />
      </View>
    );
  };
  return (
    <ScreenWrapper style={styles.container}>
      {journals ? renderJournalist() : renderEntryList()}

      <PublishQuestionPopup
        reference={removeRef}
        title={'Remove Friend'}
        desc={`Are you sure you wish to remove the\nfriend?`}
        contentStye={styles.popupStyle}
      />
    </ScreenWrapper>
  );
};
export default FriendDetails;
