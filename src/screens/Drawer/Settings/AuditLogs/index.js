import React from 'react'
import { View,FlatList } from 'react-native'
import AuditCard from '../../../../components/Cards/AuditCard';
import SubscriptionCard from '../../../../components/Cards/SubscriptionCard';
import DatePicker from '../../../../components/Inputs/DatePicker';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper'
import styles from './styles';


const AuditLogs=(props)=>{

    const renderAuditContainer = () => {
        return <AuditCard/>;
      };
    return(
        <ScreenWrapper style={styles.container}> 
        <View style={styles.alignDateContainer}>
            <DatePicker/>
            <DatePicker/>
        </View>
             <FlatList data={[1, 2, 3, 4, 5]}
             keyExtractor={(item,index)=> index}
             key={"AuditlogArray"}
             renderItem={renderAuditContainer} />
            

        </ScreenWrapper>
    )
}
export default AuditLogs