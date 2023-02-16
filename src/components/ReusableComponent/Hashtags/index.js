import React from 'react'
import { View,Image,FlatList } from 'react-native'
import { icons } from '../../../assets/images'
import RobotoBold from '../../Texts/RobotoBold'
import styles from './styles'


const Hashtags=()=>{
    const hashtagArray=[1,2,3,4,5,6,7,8]
    const renderHashtags=()=>{
        return(
            <View style={styles.hashtagContainer}>
            <Image source={icons.cross} style={styles.crossimg}/>
              <RobotoBold style={styles.hashtagText}>#sports</RobotoBold>
          </View>


        )
    }
    return(
        <View>

            <FlatList
            data={[1,2,3,4,5,6,7,8]}
            numColumns={4}
            columnWrapperStyle={{justifyContent: 'space-between'}}
            key={"hashtagArray"}
            keyExtractor={(item,index)=> index}
            renderItem={renderHashtags}
            />
        </View>
        
    )
}
export default Hashtags

// <View style={styles.hashtagsMainContainer}>
//                 {hashtagArray.map((value,index)=>{
//             return(
//                 <View style={styles.hashtagContainer}>
//                   <Image source={icons.cross} style={styles.crossimg}/>
//                     <RobotoBold style={styles.hashtagText}>#sports</RobotoBold>
//                 </View>

//             )
//         })}
//         </View>