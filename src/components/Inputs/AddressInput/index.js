import React,{useState} from 'react';
import {View, Image,Text} from 'react-native';
import { icons } from '../../../assets/images';
import styles from './styles';
import { useDispatch } from 'react-redux';
import AddressField from '../../AddressField';
import RobotoRegular from '../../Texts/RobotoRegular';

const AddressInput = props => {
  const dispatch =useDispatch()
  return (
    <AddressField
      onValueChange={props.onLocationSearch}
      style={props.style}
    >
      <View style={styles.inputContainer}>
        <RobotoRegular numberOfLines={2} style={styles.placeholderText}>
        {props.location?.address?props.location?.address:"Search Locations or Tags"}
        </RobotoRegular>


      <Image source={icons.search} style={styles.imgIcon} />

      </View>
     
    </AddressField>
  );
};
export default AddressInput;