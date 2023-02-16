import React, {useRef, useState} from 'react';
import {View, Image} from 'react-native';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
import {RichEditor, actions, RichToolbar} from 'react-native-pell-rich-editor';
import styles from './styles';
import {vh} from '../../../../utils/dimensions';
import CustomDropdown from '../../../../components/Dropdowns/CustomDropdown';
import {icons} from '../../../../assets/images';
import ContentContainer from '../../../../components/wrappers/ContentContainer';
import {colors} from '../../../../utils/appTheme';
import RippleHOC from '../../../../components/wrappers/Ripple';
import ImagePicker from '../../../../components/Image/ImagePicker';
import PulishEntryPopup from '../../../../components/popups/PulishEntryPopup';
import MyNetworkPopup from '../../../../components/popups/MyNetworkPopup';
import HashtagPopup from '../../../../components/popups/HashtagPopup';
import SuccessPopup from '../../../../components/popups/SuccessPopup';
import EntrySettingPopup from '../../../../components/popups/EntrySettingPopup';

const NewEntry = () => {
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
  const settingRef=useRef(null)

  return (
    <ScreenWrapper>
      <ContentContainer style={styles.container}>
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
          <RippleHOC onPress={()=> settingRef.current.show()}>
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
          // onReject={() => globalPopup.current.show()}
        />
        <MyNetworkPopup
          reference={networkPopup}
          onAccept={() => hashTagRef.current.show()}
        />
        <HashtagPopup
          reference={networkPopup}
          onAccept={() => successPopup.current.show()}
        />

        <SuccessPopup reference={successPopup}
        onAccept={()=> props.navigation.navigate("ViewEntry")}
        
        />
        <EntrySettingPopup
        reference={settingRef}
        />
      </ContentContainer>
    </ScreenWrapper>
  );
};
export default NewEntry;
