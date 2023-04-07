import React,{useRef,useState} from 'react'
import { View,ScrollView,Image } from 'react-native'
import {RichEditor, actions, RichToolbar} from 'react-native-pell-rich-editor';
import { icons } from '../../../assets/images';
import { colors } from '../../../utils/appTheme';
import { vh } from '../../../utils/dimensions';
import CustomDropdown from '../../Dropdowns/CustomDropdown';
import ImagePicker from '../../Image/ImagePicker';
import EntrySettingPopup from '../../popups/EntrySettingPopup';
import HashtagPopup from '../../popups/HashtagPopup';
import ImagePopup from '../../popups/ImagePopup';
import MyNetworkPopup from '../../popups/MyNetworkPopup';
import PageDesignPopup from '../../popups/PageDesignPopup';
import PublishQuestionPopup from '../../popups/PublishQuestionPopup';
import PulishEntryPopup from '../../popups/PulishEntryPopup';
import SuccessPopup from '../../popups/SuccessPopup';
import RippleHOC from '../../wrappers/Ripple';
import styles from "./styles"


const TextEditor=()=>{

    const [imageSelection, setImageSelection] = useState(false);
    const [dropdownValue, setDropdownValue] = useState('');
    const richText = useRef(null);
    const documentsArray = ['text1', 'text2', 'text3'];
    const [image, setImage] = useState(null);
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


    return(
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
          title={'Publish To'}
          desc={
            'Entries published on the Momentary Global Network are anonymized and will not include your user information or metadata from your photos.\n\nIdentifying information you have written in the entry itself will still be visible, as we do not censor or otherwise modify your writing. '
          }
          onReject={() => globalRef.current.show()}
          yesBtn={'My Network'}
          noBtn={'Global Network'}
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
          onPressDelete={() => deleteRef.current.show()}
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
          desc={'Are you sure you want to Delete an Entry?'}
        />
      </ScrollView>

    )
}
export default TextEditor