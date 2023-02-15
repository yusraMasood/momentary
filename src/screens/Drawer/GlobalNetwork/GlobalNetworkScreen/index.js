import React from 'react'
import { View,Image } from 'react-native'
import SearchInput from '../../../../components/Inputs/SearchInput'
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper'
import styles from './styles'

const GlobalNetworkScreen =()=>{
    return(
        <ScreenWrapper style={styles.container}>
            <SearchInput 
            placeholder={"Search Locations or Tags"}
            />

        </ScreenWrapper>
    )
}
export default GlobalNetworkScreen