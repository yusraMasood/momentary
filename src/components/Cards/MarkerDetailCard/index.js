import React,{useState} from 'react'
import { View ,Image} from 'react-native'
import { generalImages, icons } from '../../../assets/images'
import RippleHOC from '../../wrappers/Ripple'
import { linearColors } from '../../../utils/appTheme'
import styles from './styles'
import LinearGradient from 'react-native-linear-gradient'
import { vh } from '../../../utils/dimensions'
import RobotoRegular from '../../Texts/RobotoRegular'
import moment from 'moment'

const MarkerDetailCard=(props)=>{
    const [showDetail,setShowDetail] =useState(false)

    return(
        <View >
   <Image source={icons.mapPinAnimation} style={styles.markerIcon} />
              
            <RippleHOC onPress={()=>{ 
              console.log("dhohdiodh");
              setShowDetail(!showDetail)}} style={styles.circleOuter}>
              <LinearGradient colors={linearColors.yellow} style={styles.circleImg}></LinearGradient>
            </RippleHOC>
              <RippleHOC
              style={styles.locationPopcontainer}
              onPress={() => props.navigation.navigate('PostByLocation')}
            >
              <RobotoRegular style={styles.locationText}>
                Location: {props.location}
              </RobotoRegular>
              <RobotoRegular style={styles.locationText}>
                {moment(props.date).format("MMMM DD, YYYY - HH:MM A")}
              </RobotoRegular>
              <RobotoRegular style={styles.locationText}>
                {props.content}
              </RobotoRegular>
              <View style={styles.imgArrayContainer}>
                {props.image&&props.image.map((item, index) => {
                  return (
                    <View key={index} style={styles.printContainer}>
                      <Image source={item?.thumbnail?{uri: item?.thumbnail}: generalImages?.defa} style={styles.printimg} />
                    </View>
                  );
                })}
              </View>
            </RippleHOC>

            
           
        </View>
    )
}
export default MarkerDetailCard