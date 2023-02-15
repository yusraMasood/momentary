// import { BlurView } from '@react-native-community/blur';
import React from 'react';
import { Image, Modal, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native'
import { BlurView } from '@react-native-community/blur';
import { icons } from '../../../assets/images';



const BottomSheetHOC = (props) => {
    const navigation = useNavigation();
    return ( 
        <Modal animationType={"slide"} transparent={true} visible={props.visible}
        // contentContainerStyle={styles.alignView}
        >
            {/* <TouchableWithoutFeedback onPress={() => { props.setVisibility(false) }}> */}

            <TouchableOpacity activeOpacity={0} style={{ flex: 1, backgroundColor: 'rgba()' }} onPress={() => { props.setVisibility(false) }}>
                <BlurView
                    style={styles.absolute}
                    blurType="light"
                    blurAmount={10}
                    reducedTransparencyFallbackColor="white"
                />
            </TouchableOpacity>

            <View style={styles.modalInnerContainer}>
                <View style={styles.profileContainer}>
            <Image source={icons.delete} style={styles.deleteIcon}/>
            </View>
           

                {
                    props.list?.length > 0 &&
                    <View style={styles.alignContainer}>
                        {

                    props.list.map((item, index) => {
                        // console.warn(item);
                        return (
                     
                          <Image
                          key={index}
                           icon={item?.image} 
                           style={styles.optionContainer}
                           onPress={() => { item?.onClick(); props.setVisibility(false); }}
                            />

                        )
                    })
                        }

                </View>
                }
            </View>
        </Modal >

    );
}


export default BottomSheetHOC;