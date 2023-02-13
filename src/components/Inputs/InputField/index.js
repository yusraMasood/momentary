import React, {useImperativeHandle, useRef, useState} from 'react';
import {
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Text,
  Platform,
} from 'react-native';
import {icons} from '../../../assets/images';
import {vh} from '../../../utils/dimensions';
import TextInputMask from 'react-native-mask-input';

import styles from './styles';
import {colors} from '../../../utils/appTheme';
import PragmaticaRegular from '../../Texts/RobotoSemiBold';

const InputField = props => {
  const [isPassword, setIsPassword] = useState(props.isPassword);
  const inputRef = useRef(null);
  const [focusInput,setFocusInput] =useState(false)
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
  const handleOnFocus=()=>{
    setFocusInput(true)
  }
  const handleOnBlur=()=>{
    setFocusInput(false)
  }
  return (
    <View style={[styles.container, props.inputContainerStyle]}>

      <View style={[styles.inputWithIcon,props.inputContainerIcon]}>

        {props.leftIcon && (
          <Image source={props.leftIcon} style={styles.icon} />
        )}
        {props.mask ? (
          <TextInputMask
            {...props}
            // {...props}
            ref={inputRef}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            secureTextEntry={isPassword}
            value={props.value}
            // onChangeText={props.onChangeText}
            style={[styles.input, props.inputContainer]}
            maxLength={props.maxLength}
            placeholder={props.placeholder}
            placeholderTextColor={colors.general.white}
            returnKeyLabel={props.returnKeyLabel}
            returnKeyType={props.returnKeyType}
            // onTouchStart={()=>setFocusInput(!focusInput)}
            // onBlur={()=> setFocusInput(!focusInput)}
            onSubmitEditing={props.onSubmitEditing}
            onChangeText={masked => {
              props.onChangeText(masked);
            }}
            // onSubmitEditing
          />
        ) : (
          <TextInput
            {...props}
            ref={inputRef}
            secureTextEntry={isPassword}
            // onTouchStart={()=>setFocusInput(!focusInput)}
            onFocus={handleOnFocus}
            placeholderTextColor={colors.text.offwhite}
            onBlur={handleOnBlur}
            value={props.value}
            numberOfLines={Platform.OS === 'ios' ? null : props.numberOfLines}
            minHeight={
              Platform.OS === 'ios' && props.numberOfLines
                ? 20 * props.numberOfLines
                : null
            }
            onChangeText={props.onChangeText}
            style={[
              styles.input,
              props.inputContainer,
              props.multiline && styles.inputMultiLine,
            ]}
            placeholder={props.placeholder}
            cursorColor={colors.blueBtn}
            multiline={props.multiline}
            // returnKeyLabel={props.returnKeyLabel}
            // returnKeyType={props.returnKeyType}
            // returnKeyLabel={"}
            returnKeyType={props?.returnKeyType}
            maxLength={props.maxLength}
            onSubmitEditing={props.onSubmitEditing}

            // numberOfLines={props.numberOfLines}
            // {...props}
          />
        )}
        {props.rightIcon && (
          <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => setIsPassword(!isPassword)}>
            <Image
              source={isPassword ? icons.eyeClose : icons.eyeClose}
              style={styles.rghtIcon}
            />
          </TouchableOpacity>
        )}
        <PragmaticaRegular style={[styles.withoutLeftIcon , props.labelStyle]}>{props.label}</PragmaticaRegular>     
        </View>
    </View>
  );
};

export default InputField;
