import React, {useRef, useState} from 'react';
import {View, Image, ScrollView} from 'react-native';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
import {RichEditor, actions, RichToolbar} from 'react-native-pell-rich-editor';
import styles from './styles';
import {vh} from '../../../../utils/dimensions';
import CustomDropdown from '../../../../components/Dropdowns/CustomDropdown';
import {icons} from '../../../../assets/images';
import {colors} from '../../../../utils/appTheme';
import RippleHOC from '../../../../components/wrappers/Ripple';
import ImagePicker from '../../../../components/Image/ImagePicker';
import PulishEntryPopup from '../../../../components/popups/PulishEntryPopup';
import MyNetworkPopup from '../../../../components/popups/MyNetworkPopup';
import HashtagPopup from '../../../../components/popups/HashtagPopup';
import SuccessPopup from '../../../../components/popups/SuccessPopup';
import EntrySettingPopup from '../../../../components/popups/EntrySettingPopup';
import PublishQuestionPopup from '../../../../components/popups/PublishQuestionPopup';
import PageDesignPopup from '../../../../components/popups/PageDesignPopup';
import ImagePopup from '../../../../components/popups/ImagePopup';

const NewEntry = props => {
  const richText = useRef(null);
  const documentsArray = ['text1', 'text2', 'text3'];
  const [dropdownValue, setDropdownValue] = useState('');
  const [image, setImage] = useState(null);
  const [imageSelection, setImageSelection] = useState(false);
  const publishEntry = useRef(null);
  const networkPopup = useRef(null);
  const globalPopup = useRef(null);
  const hashTagRef = useRef(null);
  const successPopup = useRef(null);
  const settingRef = useRef(null);
  const scrollRef = useRef(null);
  const globalRef = useRef(null);
  const pageDesignRef = useRef(null);
  const imagePopupRef = useRef(null);
  const deleteRef = useRef(null);

  return (
    <ScreenWrapper>
      {/* <ContentContainer style={styles.container}> */}
      <ScrollView usecontainer={true} style={styles.container}>
        <CustomDropdown
          array={documentsArray}
          dropdownValue={dropdownValue}
          dropdownTitle={'No Journal Selected'}
          setDropdownValue={setDropdownValue}
        />
        <View style={styles.textEditorContainer}>
          <RichToolbar
            editor={richText}
            style={styles.toolContainer}
            iconTint={colors.themeColor.yellow}
            onPressAddImage={() => {}}
            actions={[
              actions.setBold,
              actions.insertImage,
              actions.setItalic,
              actions.insertBulletsList,
              actions.insertOrderedList,
              actions.insertLink,
              // actions.keyboard,
              // actions.setStrikethrough,
              // actions.setUnderline,
              actions.removeFormat,
              // actions.insertVideo,
              actions.checkboxList,
              actions.undo,
              actions.redo,
            ]}
          />
          <RichEditor
            onCursorPosition={() => {
              scrollRef.current.scrollTo({y: scrollY - 30, animated: true});
            }}
            ref={richText}
            editorStyle={styles.editorText}
            placeholder={'Type here...'}
            placeholderColor={colors.text.grey}
            initialHeight={vh * 55}
            // initialFocus={true}
            // editorStyle={{height: 500}}
            focusable
            // initialContentHTML={'<p>djojdojdo</p>'}
            // editorInitializedCallback={() => onEditorInitialized()}
          />
        </View>
        <View style={styles.editContainer}>
          <Image source={icons.text} style={styles.textIcon} />
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
        <ImagePicker
          image={image}
          setImage={setImage}
          imageSelection={imageSelection}
          setImageSelection={setImageSelection}
        />
        <PulishEntryPopup
          reference={publishEntry}
          onAccept={() => networkPopup.current.show()}
          onReject={() => globalRef.current.show()}
        />
        <MyNetworkPopup
          reference={networkPopup}
          onAccept={() => hashTagRef.current.show()}
        />
        <HashtagPopup
          reference={hashTagRef}
          onAccept={() => successPopup.current.show()}
        />

        <SuccessPopup
          reference={successPopup}
          onAccept={() => props.navigation.navigate('MyEntries')}
          title={'Success'}
          desc={'Your entry has been published\nsuccessfully.'}
        />
        <EntrySettingPopup
          reference={settingRef}
          onPressDesign={() => pageDesignRef.current.show()}
          onPressVisiblity={() => props.navigation.navigate('Visiblity')}
          onPressTag={() => hashTagRef.current.show()}
          onPressDelete={()=> deleteRef.current.show()}
        />
        <PublishQuestionPopup
          reference={globalRef}
          title={'Publish'}
          contentStye={styles.publishPopup}
          desc={`Entries published on the Momentary Global Network are anonymized and will not include your user information or metadata from your photos.\n\nIdentifying information you have written in the entry itself will still be visible, as we do not censor or otherwise modify your writing.\n\nAre you sure you want to publish to Global Network?`}
        />
        <PageDesignPopup
          reference={pageDesignRef}
          onAccept={() => imagePopupRef.current.show()}
        />
        <ImagePopup reference={imagePopupRef} />
        <PublishQuestionPopup
          reference={deleteRef}
          title={'Delete Entry'}
          desc={"Are you sure you want to Delete an Entry?"}      />
      </ScrollView>
    </ScreenWrapper>
  );
};
export default NewEntry;
