import React, {useRef, useImperativeHandle} from 'react';
import {Platform, TextInput, View} from 'react-native';
import EuclidCircularARegular from '../../Texts/EuclidCircularARegular';
// import OutfitRegular from '../../Texts/OutfitRegular';
import styles from './styles';

const InputContainer = props => {
  const inputRef = useRef(null);
  useImperativeHandle(props?.reference, () => ({
    focus: focus,
    blur: blur,
  }));
  const focus = () => {
    inputRef.current.focus();
  };
  const blur = () => {
    inputRef.current.blur();
  };
  return (
    <View style={[styles.textinputContainer, props.style]}>
      <View style={styles.titleContainer}>
        <EuclidCircularARegular style={styles.labelText}>{props.label}</EuclidCircularARegular>
        {props.required && (
          <EuclidCircularARegular style={styles.stericText}>*</EuclidCircularARegular>
        )}
      </View>
      <TextInput
        {...props}
        ref={inputRef}
        placeholder={props.placeholder}
        multiline={true}
        allowFontScaling={false}
        numberOfLines={3}
        minHeight={Platform.OS === 'ios' && 3 ? 20 * 3 : null}
        style={styles.inputContainer}
      />
    </View>
  );
};
export default InputContainer;
