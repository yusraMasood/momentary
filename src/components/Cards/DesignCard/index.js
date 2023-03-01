import React from 'react'
import { FlatList,View,Image } from 'react-native'
import { generalImages } from '../../../assets/images';
import RobotoRegular from '../../Texts/RobotoRegular';
import styles from './styles';

const DesignCard =()=>{
    const renderPrints = () => {
        return (
          <View style={styles.printContainer}>
            <View style={styles.printImgContainer}>
              <Image source={generalImages.print} style={styles.imagePrint} />
            </View>
            <RobotoRegular style={styles.printText}> Dotted - $1</RobotoRegular>
          </View>
        );
      };
    return(
        <FlatList
        data={[1, 2, 3, 4, 5]}
        horizontal={true}
        keyExtractor={(item,index)=> index}
             key={"designCardArray"}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        renderItem={renderPrints}
      />
    )
}
export default DesignCard