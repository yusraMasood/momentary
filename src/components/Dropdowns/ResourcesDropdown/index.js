import React, {useState} from 'react';
import {View, Image} from 'react-native';
import {icons} from '../../../assets/images';
import JostBold from '../../Texts/EuclidCircularBold';
import PragmaticaRegular from '../../Texts/RobotoSemiBold';
import RecoletaDemoRegular from '../../Texts/RobotoMedium';
import RippleHOC from '../../wrappers/Ripple';
import styles from './styles';

const ResourcesDropdown = (props) => {
  const [dropdown, setDropdown] = useState(false);
  const purchaseArray = ["FLUORIDE AND CHEMICAL/METAL CARBON CHARCOAL WATER FILTER","PELICAN WATER HOUSE FILTER","HP TEST STRIPS"];
  return (
    <View style={styles.container}>
    
      {dropdown ? (
        <View style={styles.mainContainerOfDropdown}>
          <RippleHOC onPress={()=> setDropdown(!dropdown)} style={styles.openDropdownContainer}>
            <JostBold style={styles.titleinDropdownText}>{props.title}</JostBold>
            <Image source={icons.upward} style={styles.upwardImg} />
          </RippleHOC>
          <View style={styles.hrLine} />
          {purchaseArray.map((value, index) => {
            return (
              <View key={value}>
                <View style={styles.redHrLine} />
                <View style={styles.valueWithPurchaseContainer}>
                  <RecoletaDemoRegular style={styles.dropdownValueText}>
                    {value}
                  </RecoletaDemoRegular>
                  <RippleHOC>
                  <PragmaticaRegular style={styles.purchaseText}>Purchase</PragmaticaRegular>
                  </RippleHOC>
                </View>
              </View>
            );
          })}
        </View>
      ):
      <RippleHOC
      onPress={() => setDropdown(!dropdown)}
      style={styles.dropdownContainer}
    >
      <RecoletaDemoRegular style={styles.titleDropdown}>{props.title}</RecoletaDemoRegular>
      <Image source={icons.down} style={styles.arrowDown} />
    </RippleHOC>
      }
    </View>
  );
};
export default ResourcesDropdown;
