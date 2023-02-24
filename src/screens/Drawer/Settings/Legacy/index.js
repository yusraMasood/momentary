import React from 'react'
import { View,FlatList } from 'react-native'
import TextWithArrowIcon from '../../../../components/ReusableComponent/TextWithArrowIcon'
import RobotoBold from '../../../../components/Texts/RobotoBold'
import RobotoMedium from '../../../../components/Texts/RobotoMedium'
import RobotoRegular from '../../../../components/Texts/RobotoRegular'
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper'
import styles from './styles'

const Legacy=()=>{
    const renderPeopleContact=()=>{
        return(
            <View>
                <View  style={styles.cardHeadingContainer}>
                <RobotoMedium style={styles.primaryText}>Primary Legacy Contact </RobotoMedium>
                <RobotoBold style={styles.editText}>Edit</RobotoBold>
                </View>
                <View style={styles.gridContainer}>
                <View style={styles.itemContainer}>
                    <RobotoRegular style={styles.titleText}>Name</RobotoRegular>
                    <RobotoRegular style={styles.valueText}>Jane Q Author</RobotoRegular>
                </View>
                <View style={styles.itemContainer}>
                    <RobotoRegular style={styles.titleText}>Email</RobotoRegular>
                    <RobotoRegular style={styles.valueText}>alexa@gmail.com</RobotoRegular>
                </View>
                <View style={styles.itemContainer}>
                    <RobotoRegular style={styles.titleText}>Phone Number</RobotoRegular>
                    <RobotoRegular style={styles.valueText}>123-456-7890</RobotoRegular>
                </View>
                </View>
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
      <TextWithArrowIcon text={'Delete Account'} textOpt={"Never"} style={styles.deleteContainer}/>
      <FlatList
      data={[1,2]}
      renderItem={renderPeopleContact}
      />
 
        </ScreenWrapper>
    )
}
export default Legacy