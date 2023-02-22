import React from 'react'
import { View,FlatList } from 'react-native'
import CustomButton from '../../../../components/Buttons/CustomButton'
import StoreCard from '../../../../components/Cards/StoreCard'
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper'
import { colors, linearColors } from '../../../../utils/appTheme'
import styles from './styles'

const SettingScreen=(props)=>{
    const settingArray=[
        {
            name:"Account",
            desc:"Sed ut perspiciatis unde omnis iste"
        },
        {
            name:"App/UI",
            desc:"Sed ut perspiciatis unde omnis iste"
        },
        {
            name:"Legacy",
            desc:"Sed ut perspiciatis unde omnis iste"
        },   
         {
            name:"Notifications",
            desc:"Sed ut perspiciatis unde omnis iste"
        },   
         {
            name:"Privacy",
            desc:"Sed ut perspiciatis unde omnis iste"
        },
        {
            name:"Support ",
            desc:"Sed ut perspiciatis unde omnis iste"
        },
    ]

    const renderSettingCard=({item})=>{
        return(
            <StoreCard
            name={item?.name}
            desc={item?.desc}
            
            />
        )
    }
    const renderFooter=()=>{
        return(
            <CustomButton
            text={"Log Out"}
            textStyle={styles.btnText}
            onPress={()=> props.navigation.navigate("AuthNavigator")}
            colors={linearColors.red}
            />
        )
    }
    return(
        <ScreenWrapper style={styles.container}>
            <FlatList
            data={settingArray}
            renderItem={renderSettingCard}
            ListFooterComponent={renderFooter}
            />


        </ScreenWrapper>
    )
}
export default SettingScreen
