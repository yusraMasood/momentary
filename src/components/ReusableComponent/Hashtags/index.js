import React from 'react'
import { View,Image,FlatList } from 'react-native'
import { icons } from '../../../assets/images'
import RobotoBold from '../../Texts/RobotoBold'
import styles from './styles'
import EmptyComponent from '../../EmptyComponent'
import RippleHOC from '../../wrappers/Ripple'


const Hashtags=(props)=>{
    console.log(props.myhashtags);
    const renderHashtags=({item})=>{
        return(
            <View style={styles.hashtagContainer}>
            <Image source={icons.cross} style={styles.crossimg}/>
            <RippleHOC onPress={()=> props.setMyHashtags([...props.myhashtags,...item])}>
              <RobotoBold style={styles.hashtagText}>#{item?.tag}</RobotoBold>
                </RippleHOC>
          </View>


        )
    }
    const renderEmpty=()=>{
        return(
            <EmptyComponent text="No Hashtags Found"/>
        )
    }
    return(
        <View>

            <FlatList
            data={props.isLoading?[1,2,3,4]:props.array}
            numColumns={4}
            columnWrapperStyle={{justifyContent: 'space-between'}}
            key={"hashtagArray"}
            keyExtractor={(item,index)=> item?._id}
            ListEmptyComponent={renderEmpty}
            renderItem={renderHashtags}
            />
            <RobotoBold style={styles.myTagText}>My Tags</RobotoBold>
            <FlatList
            data={props.myhashtags}
            numColumns={4}
            columnWrapperStyle={{justifyContent: 'space-between'}}
            key={"hashtagArray"}
            keyExtractor={(item,index)=> item?._id}
            ListEmptyComponent={renderEmpty}
            renderItem={renderHashtags}
            />
        </View>
        
    )
}
export default Hashtags