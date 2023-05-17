import React from 'react'
import { View,Image,TextInput } from 'react-native'
import { generalImages, icons } from '../../../assets/images'
import styles from './styles'
import { colors } from '../../../utils/appTheme'
import RippleHOC from '../../wrappers/Ripple'
import ButtonLoading from '../../Loaders/ButtonLoading'

const CommentInput=(props)=>{
    return(
        <View style={styles.textInputContainer}>
        <Image source={generalImages.userImage} style={styles.userImage}/>
        <View style={styles.inputContainer}>
        <TextInput
        placeholder='Write a comment..'
        placeholderTextColor={colors.input.greyPlaceholder}
        style={styles.input}
        value={props.value}
        multiline={true}
        onChangeText={props.onChangeText}
        onSubmitEditing={props.onSubmitEditing}
        />
        {props.loader?
      <ButtonLoading/>:
        <RippleHOC  onPress={props.addComment}>
        <Image source={icons.send} style={styles.sendIcon}/>

        </RippleHOC>

      }
        </View>
      </View>

    )
}
export default CommentInput