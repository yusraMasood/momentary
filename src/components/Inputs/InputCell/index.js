import React, {useState,useRef} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './styles';

const InputCell = props => {
  const [code, setCode] = useState('');
  const input = useRef(null);
  // console.log(code);

  const focus = () => {
    input?.current?.focus();
  };
const saveCode=(v)=> {
    setCode(v)
    if(code.length==3)
    {
        props.onPress()
    }
}
  return (
    <View style={styles.alignInputItems}>
      <TouchableOpacity
        onPress={focus}
        style={[styles.inputBorder, ]}
      >
        {/* <Text>code[0]</Text> */}
        <View style={[styles.placeholderText, code[0] && styles.circleFocus]} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={focus}
        style={[styles.inputBorder]}
      >
        <View style={[styles.placeholderText,, code[1] && styles.circleFocus]} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={focus}
        style={[styles.inputBorder]}
      >
        <View style={[styles.placeholderText,, code[2] && styles.circleFocus]} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={focus}
        style={[styles.inputBorder]}
      >
        <View style={[styles.placeholderText, , code[3] && styles.circleFocus]} />
      </TouchableOpacity>
      <TextInput
          style={{
            height: 0,
            position: 'absolute',
            top: -20,
            left: 30,
          }}
        //   onChangeText={(v)=> code.length==3 && props.onPress()}
          ref={input}
          onChangeText={saveCode}
        />
    </View>
  );
};

export default InputCell;