import React from 'react'
import { View } from 'react-native'
import { generalImages } from '../../../../assets/images'
import CustomButton from '../../../../components/Buttons/CustomButton'
import CustomGoldenSwitch from '../../../../components/Buttons/CustomGoldenSwitch'
import Hashtags from '../../../../components/ReusableComponent/Hashtags'
import RobotoMedium from '../../../../components/Texts/RobotoMedium'
import RobotoRegular from '../../../../components/Texts/RobotoRegular'
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper'
import styles from './styles'

const AddNewJournal=()=>{
    return(
        <ScreenWrapper style={styles.container}>
            <View style={styles.entryContainer}>
                <RobotoRegular style={styles.entryText}>Add Entry</RobotoRegular>
            </View>
            <Hashtags/>
            <View>
                <RobotoMedium>Life time journal</RobotoMedium>
                <CustomGoldenSwitch/>
            </View>
            <View style={styles.imageContainer}>
                <RobotoMedium style={styles.imgText}>Image</RobotoMedium>
                <RobotoRegular>Add Image</RobotoRegular>
            </View>
            <Image source={generalImages.bookcover2} style={styles.journalImg}/>
            <CustomButton text={"Save To Library"}/>


            
        </ScreenWrapper>

    )


}
export default AddNewJournal