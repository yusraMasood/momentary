import React, {useRef, useState, useCallback} from 'react';
import {View, ScrollView, Image, FlatList, Keyboard} from 'react-native';
import {RichEditor, actions, RichToolbar} from 'react-native-pell-rich-editor';
import {colors} from '../../../utils/appTheme';
import {vh} from '../../../utils/dimensions';
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
import styles from './styles';
import ImageComponent from '../../Image/ImageComponent';
import {icons} from '../../../assets/images';
import RippleHOC from '../../wrappers/Ripple';
import EmojiSelectorPopup from '../../popups/EmojiSelectorPopup';
import CustomFontSelector from '../../popups/CustomFontSelector';
import EuclidCircularARegular from '../../Texts/EuclidCircularARegular';
import { useFont } from '../../../state/auth';

const TextEditor = () => {
  const [imageSelection, setImageSelection] = useState(false);
  const [dropdownValue, setDropdownValue] = useState('');
  const [entryText, setEntryText] = useState(
    'Hello <b>World</b> <p>this is a new paragraph</p> <p>this is another new paragraph</p>',
  );
  // const [customfonts,setCustomFonts] =useState(false)
  const fontStyle=useFont()
  const [background,setBackground] =useState(false)
  const richText = useRef(null);
  const documentsArray = ['text1', 'text2', 'text3'];
  const [image, setImage] = useState(null);
  const publishEntry = useRef(null);
  const [imageArray, setImageArray] = useState([]);
  const networkPopup = useRef(null);
  const globalPopup = useRef(null);
  const hashTagRef = useRef(null);
  const successPopup = useRef(null);
  const settingRef = useRef(null);
  const scrollRef = useRef(null);
  const emojiVisibleRef = useRef(null);
  const globalRef = useRef(null);
  const pageDesignRef = useRef(null);
  const imagePopupRef = useRef(null);
  const deleteRef = useRef(null);
  const customFontRef = useRef(null);

  const renderImage = item => {
    return <ImageComponent uri={item?.item?.uri} />;
  };
  const updateItemImages = img => {
    setImageArray(p => [...p, img?.image]);
  };

  const handleInput = e => {


  };

  const handleEmoji = useCallback(() => {
    Keyboard.dismiss();
    richText.current?.blurContentEditor();
    // setEmojiVisible(!emojiVisible);
    emojiVisibleRef.current.show();
  }, [emojiVisibleRef]);
  const handleCustomFonts = useCallback(() => {
    Keyboard.dismiss();
    richText.current?.blurContentEditor();
    // setCustomFonts(!customfonts);
    customFontRef.current.show();
  }, [customFontRef, fontStyle]);

  const handleInsertEmoji = useCallback(emoji => {
    richText.current?.insertText(emoji);
    richText.current?.blurContentEditor();
  }, []);
  // {cssText: `${FontFamilyStylesheet.damion}`, contentCSSText: `font-family: ${fontFamily}`}
  return (
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
          actions={[
            actions.setBold,
            actions.setItalic,
            actions.setUnderline,
            actions.setStrikethrough,
            'customFonts',
            actions.insertBulletsList,
            actions.insertOrderedList,
            actions.undo,
            actions.redo,
            'insertEmoji',
          ]}
          insertEmoji={handleEmoji}
          customFonts={handleCustomFonts}
          iconMap={{
            insertEmoji: icons.emoji,
            // customFonts: icons.customFont,
          customFonts:()=>{
            return(
              <View style={styles.fontContainer}>
                <EuclidCircularARegular  style={styles.fontActionStyle}>{fontStyle.fontName?fontStyle.fontName:"Font"}</EuclidCircularARegular>
                <Image source={icons.arrowDown} style={styles.arrowStyle}/>
                </View>
            )
          }
          }}
        />
        <RichEditor
          onCursorPosition={() => {
            scrollRef.current.scrollTo({y: scrollY - 30, animated: true});
          }}
          ref={richText}
          // editorStyle={[initialCSSText, styles.editorText]}
          editorStyle= {{
            backgroundColor:background?`rgba(255,255,255,0.25)`: colors.general.black,
            color: colors.text.offwhite,
            // initialCSSText: `${FontFamilyStylesheet.poppins}`, contentCSSText: `font-family: ${fontFamilyPoppins}`,
            caretColor:colors.themeColor.yellow,
            placeholderColor: colors.text.grey,
            cssText: `${fontStyle.style}`, contentCSSText: `font-family: ${fontStyle.fontName}`
          }}
          initialContentHTML={entryText}
          placeholder={'Type here...'}
          initialHeight={vh * 50}
          onChange={setEntryText}
          focusable
        />
      </View>
      <FlatList
        data={imageArray}
        key={'imageArray'}
        contentContainerStyle={styles.contentContainerStyle}
        horizontal={true}
        keyExtractor={(item, index) => index}
        renderItem={renderImage}
      />
      <View style={styles.editContainer}>
        <RippleHOC onPress={()=> setBackground(!background)}>
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
      <EmojiSelectorPopup
        reference={emojiVisibleRef}
        onSelect={handleInsertEmoji}
      />
      <CustomFontSelector 
      reference={customFontRef}
      
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
      />
      {/* <PageDesignPopup
        reference={pageDesignRef}
        onAccept={() => imagePopupRef.current.show()}
      /> */}
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
    </ScrollView>
  );
};
export default TextEditor;