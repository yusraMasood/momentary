import React from 'react'
import { View,FlatList } from 'react-native'
import TextWithArrowIcon from '../../../../components/ReusableComponent/TextWithArrowIcon'
import RobotoMedium from '../../../../components/Texts/RobotoMedium'
import RobotoRegular from '../../../../components/Texts/RobotoRegular'
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper'
import styles from './styles'

const Legacy=()=>{
    const renderPeopleContact=()=>{
        return(
            <View>
                <RobotoRegular></RobotoRegular>
            </View>
        )
    }
    return(
        <ScreenWrapper style={styles.container}>
              <RobotoMedium style={styles.accountHeadingText}>
              Legacy Determination
      </RobotoMedium>
      <TextWithArrowIcon text={'Make Account Private'} textOpt={"2 Years"}/>
      <TextWithArrowIcon text={'Archive Account'} textOpt={"5 Years"}/>
      <TextWithArrowIcon text={'Delete Account'} textOpt={"Never"}/>
      <FlatList
      data={[1,2]}
      renderItem={renderPeopleContact}
      />
 
        </ScreenWrapper>
    )
}
export default Legacy