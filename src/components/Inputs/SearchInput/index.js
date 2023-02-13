import React from 'react'
import { TextInput,Image,View } from 'react-native'
import { icons } from '../../../assets/images'
import styles from './styles'


const SearchInput=(props)=>{
    return(
<View style={[styles.inputContainer,props.style]}>
<Image source={icons.search} style={styles.imgIcon}/>
    <TextInput 
    placeholder={props.placeholder}
    style={styles.input}
    value={props.value}
    onChangeText={props.onChangeText}
    />
  
</View>
    )
}
export default SearchInput