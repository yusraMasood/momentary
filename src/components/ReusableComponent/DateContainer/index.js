import React from 'react';
import {View} from 'react-native';
import PragmaticaRegular from '../../Texts/RobotoSemiBold';
import styles from './styles';

const DateContainer = props => {
  const colors= [
    "#E6F8FF","#FFF3F5","#FFD6D6","#FFFACB"
]
const borderColor=["#C9F0FF", "#FFE8EC","#FFBCBD", "#FFF2AA"]

  return (
    <View
      style={[styles.dateContainer,{backgroundColor:colors[props.index%colors.length], borderColor:borderColor[props.index%borderColor.length]} , props.focus && styles.focusDateContainer]}
    >
      <PragmaticaRegular
        style={[styles.dateText, props.focus && styles.focusDateText]}
      >
        {props.item}
      </PragmaticaRegular> 
    </View>
  );
};

export default DateContainer;
