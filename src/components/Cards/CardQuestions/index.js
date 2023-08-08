import React, {useState} from 'react';
import {View, Image} from 'react-native';
import { icons } from '../../../assets/images';
import RobotoMedium from '../../Texts/RobotoMedium';
import RobotoRegular from '../../Texts/RobotoRegular';
import RippleHOC from '../../wrappers/Ripple';
import styles from './styles';

const CardQuestions = (props) => {
  const [showQuestion, setShowQuestion] = useState(false);

  return <View style={[styles.storeCard, props.style]}>
      <RippleHOC onPress={()=> setShowQuestion(!showQuestion)}  style={styles.titleIconContainer}>
        <RobotoMedium style={[styles.storeText,props.textStyle]}>{props?.text}</RobotoMedium>
          <Image source={showQuestion?icons.arrowDownwards: icons.rightArrow} style={styles.arrowIcon} />
    </RippleHOC>

    {showQuestion&&
    <RobotoRegular style={styles.descText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis </RobotoRegular>
    }


  </View>;
};
export default CardQuestions;
