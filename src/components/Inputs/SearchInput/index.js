import React from 'react';
import {TextInput, Image, View} from 'react-native';
import {icons} from '../../../assets/images';
import { colors } from '../../../utils/appTheme';
import styles from './styles';

const SearchInput = props => {
  return (
    <View style={[styles.inputContainer, props.style]}>
      <TextInput
        placeholder={props.placeholder}
        placeholderTextColor={colors.text.grey}
        style={[styles.input,props.inputStyle]}
        cursorColor={colors.themeColor.yellow}
        value={props.value}
        onChangeText={props.onChangeText}
      />
      <Image source={icons.search} style={styles.imgIcon} />
    </View>
  );
};
export default SearchInput;
