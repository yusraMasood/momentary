// import { BlurView } from '@react-native-community/blur';
import React from 'react';
import {
  Image,
  Modal,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import {BlurView} from '@react-native-community/blur';
import {icons} from '../../../assets/images';
import RobotoMedium from '../../Texts/RobotoMedium';
import RippleHOC from '../../wrappers/Ripple';

const BottomSheetHOC = props => {
  const navigation = useNavigation();
  return (
    <Modal
      animationType={'slide'}
      transparent={true}
      visible={props.visible}
      style={styles.modal}
    >
        <View style={styles.modalContainer}>

        

      <TouchableOpacity
        activeOpacity={0}
        // style={{flex: 1, backgroundColor: 'rgba()'}}
        onPress={() => {
          props.setVisibility(false);
        }}
      >
        <BlurView
          style={styles.absolute}
          blurType="light"
          blurAmount={10}
          reducedTransparencyFallbackColor="white"
        />
      </TouchableOpacity>

      <View style={styles.modalInnerContainer}>
        <View style={styles.alignContent}>
        <Image source={icons.cross} style={styles.crossIcon}/>
        </View>
        <RobotoMedium style={styles.photoText}>Add Photo</RobotoMedium>

        {props.list?.length > 0 && (
          <View style={styles.alignContainer}>
            {props.list.map((item, index) => {
              // console.warn(item);
              return (
                <RippleHOC 
                onPress={() => {
                    item?.onClick();
                    props.setVisibility(false);
                  }}
                style={styles.imageContainer}>
                  <Image
                    key={index}
                    source={item?.image}
                    style={styles.image}
                  
                  />
                </RippleHOC>
              );
            })}
          </View>
        )}
      </View>
      </View>
    </Modal>
  );
};

export default BottomSheetHOC;
