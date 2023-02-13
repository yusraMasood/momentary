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

const VerifyInput = props => {
//   const [isPassword, setIsPassword] = useState(props.isPassword);
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

  return (
    <View style={[styles.container, props.inputContainerStyle]}>
         <TextInput
         {...props}
          placeholder={'●'}
          ref={inputRef}
          onChangeText={props.onChangeText}
          style={styles.input}
          maxLength={1}
          onSubmitEditing={props.onSubmitEditing}
          secureTextEntry={true}
        />
     
    </View>
  );
};

export default VerifyInput;
