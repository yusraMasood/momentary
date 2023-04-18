import React from 'react'
import { View } from 'react-native'
import CustomSkeleton from '../../Loaders/CustomSkeleton'
import { vw } from '../../../utils/dimensions'
import RippleHOC from '../../wrappers/Ripple'
import styles from './styles'
import RobotoRegular from '../../Texts/RobotoRegular'

const UsernameCard=(props)=>{
    return(
        <View>
        {props.isLoading ? (
          <CustomSkeleton height={2} width={5} marginLeft={vw*1.5}/>
        ) : (
          <RippleHOC
            onPress={() => setUsername(item)}
            style={[
              styles.usernameContainer,
              props.focus && styles.usernameFocusContainer,
            ]}
          >
            <RobotoRegular
              style={[styles.usernameText, props.focus && styles.usernameFocusText]}
            >
              {props.name}
            </RobotoRegular>
          </RippleHOC>
        )}
      </View>
    )
}
export default UsernameCard