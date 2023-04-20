import React, {useRef, useState, useCallback} from 'react';
import {View, ScrollView, Image, FlatList, Keyboard} from 'react-native';
import {RichEditor, actions, RichToolbar} from 'react-native-pell-rich-editor';
import {colors} from '../../../utils/appTheme';
import {vh} from '../../../utils/dimensions';
import styles from './styles';
import {icons} from '../../../assets/images';
import EmojiSelectorPopup from '../../popups/EmojiSelectorPopup';
import CustomFontSelector from '../../popups/CustomFontSelector';
import EuclidCircularARegular from '../../Texts/EuclidCircularARegular';
import {useFont} from '../../../state/auth';

const TextEditor = props => {
  const fontStyle = useFont();
  // const [background,setBackground] =useState(false)
  const richText = useRef(null);
  const scrollRef = useRef(null);
  const emojiVisibleRef = useRef(null);

  const customFontRef = useRef(null);

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
    <View>
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
            actions.keyboard,
            actions.redo,
            'insertEmoji',
          ]}
          insertEmoji={handleEmoji}
          customFonts={handleCustomFonts}
          iconMap={{
            insertEmoji: icons.emoji,
            // customFonts: icons.customFont,
            customFonts: () => {
              return (
                <View style={styles.fontContainer}>
                  <EuclidCircularARegular
                    numberOfLines={1}
                    style={styles.fontActionStyle}>
                    {fontStyle.fontName ? fontStyle.fontName : 'Font'}
                  </EuclidCircularARegular>
                  <Image source={icons.arrowDown} style={styles.arrowStyle} />
                </View>
              );
            },
          }}
        />
        <RichEditor
          onCursorPosition={() => {
            scrollRef.current.scrollTo({y: scrollY - 30, animated: true});
          }}
          ref={richText}
          // editorStyle={[initialCSSText, styles.editorText]}
          editorStyle={{
            backgroundColor: props.background
              ? `rgba(255,255,255,0.25)`
              : colors.general.black,
            // backgroundColor: colors.general.black,
            color: colors.text.offwhite,
            // initialCSSText: `${FontFamilyStylesheet.poppins}`, contentCSSText: `font-family: ${fontFamilyPoppins}`,
            caretColor: colors.themeColor.yellow,
            placeholderColor: colors.text.grey,
            cssText: `${fontStyle?.style}`,
            contentCSSText: `font-family: ${fontStyle?.fontName}`,
          }}
          initialContentHTML={props.entryText}
          placeholder={'Type here...'}
          initialHeight={vh * 50}
          onChange={props.setEntryText}
          focusable
        />
      </View>

      <EmojiSelectorPopup
        reference={emojiVisibleRef}
        onSelect={handleInsertEmoji}
      />
      <CustomFontSelector reference={customFontRef} />
    </View>
  );
};
export default TextEditor;
