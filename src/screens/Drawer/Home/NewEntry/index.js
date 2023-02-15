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

const NewEntry = () => {
  const richText = useRef(null);
  const documentsArray = ['text1', 'text2', 'text3'];
  const [dropdownValue, setDropdownValue] = useState('');
  const [image, setImage] = useState(null);
  const [imageSelection, setImageSelection] = useState(false);

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
            actions={[
              actions.setBold,
              actions.setItalic,
              actions.insertBulletsList,
              actions.insertOrderedList,
              actions.insertLink,
              actions.keyboard,
              actions.setStrikethrough,
              actions.setUnderline,
              actions.removeFormat,
              actions.insertVideo,
              actions.checkboxList,
              actions.undo,
              actions.redo,
              actions.insertImage,
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
            <RippleHOC  style={{backgroundColor:"red"}} onPress={()=> setImageSelection(true)}>
              <Image source={icons.addImage} style={styles.textIcon} />
            </RippleHOC>
            <Image source={icons.settingEntry} style={styles.textIcon} />
            <Image source={icons.send} style={styles.textIcon} />
          </View>
        <ImagePicker
        image={image}
        setImage={setImage}
        imageSelection={imageSelection}
        setImageSelection={setImageSelection}
        />
      </ContentContainer>
    </ScreenWrapper>
  );
};
export default NewEntry;
