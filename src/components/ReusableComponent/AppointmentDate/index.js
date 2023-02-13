import React from 'react'
import { View } from 'react-native'
import PragmaticaRegular from '../../Texts/RobotoSemiBold'
import RecoletaDemoRegular from '../../Texts/RobotoMedium'
import styles from './styles'


const AppointmentDate=(props)=>{
    return(
        <View style={styles.container}>
            <RecoletaDemoRegular style={styles.herbalText}>Appointment With Herbalist</RecoletaDemoRegular>
            <View style={[styles.dateContainer, props.dateStyle]}>
                <PragmaticaRegular style={styles.dateText}>12/12/2022</PragmaticaRegular>
                <View style={styles.separatorView}/>
                <PragmaticaRegular style={styles.dateText}>Monday - 2:00 PM</PragmaticaRegular>
            </View>
        </View>
    )
}

export default AppointmentDate