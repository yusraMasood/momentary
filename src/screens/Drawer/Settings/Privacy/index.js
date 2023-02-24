import React from 'react'
import { View } from 'react-native'
import { icons } from '../../../../assets/images'
import TextWithArrowIcon from '../../../../components/ReusableComponent/TextWithArrowIcon'
import TextWithSwitch from '../../../../components/ReusableComponent/TextWithSwitch'
import RobotoMedium from '../../../../components/Texts/RobotoMedium'
import RobotoRegular from '../../../../components/Texts/RobotoRegular'
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper'
import styles from './styles'

const Privacy=()=>{
    return(
        <ScreenWrapper style={styles.container}>
            <RobotoMedium style={styles.mainHeading}>Friend Request</RobotoMedium>
            <TextWithSwitch text={"Allow Friend Requests"} style={styles.switchContainer}/>
            <TextWithSwitch text={"Allow Search by Phone Number"} style={styles.switchContainer}/>
            <TextWithSwitch text={"Allow Search by Email Address"} style={styles.switchContainer}/>
            <TextWithSwitch text={"Allow Search by Name"} style={styles.switchContainer}/>

            <RobotoMedium style={styles.historicalHeading}>Historical Content</RobotoMedium>

            <TextWithArrowIcon icon={icons.download} text={"Download All Journals"} iconStyle={styles.downloadIcon} />
            <TextWithSwitch text={"Make All Journals Private"} />
            <TextWithArrowIcon icon={icons.deleteIcon} text={"Delete All Journals"} iconStyle={styles.deleteIcon}/>
            <TextWithArrowIcon icon={icons.deleteIcon} text={"Delete All Comments"} iconStyle={styles.deleteIcon}/>
            <TextWithArrowIcon icon={icons.deleteIcon} text={"Delete All Likes"}  iconStyle={styles.deleteIcon}/>






        </ScreenWrapper>
    )
}
export default Privacy