import React, {useState} from 'react';
import {View, Image} from 'react-native';
import RobotoMedium from '../../Texts/RobotoMedium';
import RobotoRegular from '../../Texts/RobotoRegular';
import RippleHOC from '../../wrappers/Ripple';
import styles from './styles';

const PageViewButton = props => {
    const {data, reference} = props;
    const [pageIndex, setPageIndex] = useState(0);
  

  return (
    <View style={styles.container}>
    {data.map((item, index) => {
      return (
        <RippleHOC
          key={item}
          onPress={() => {
            reference.current.setPage(index);
            setPageIndex(index);
          }}
          style={[styles.btnContainer,  pageIndex === index && styles.btnFocusContainer]}
        >
      
          <RobotoRegular style={[styles.titleText, pageIndex === index && styles.titleFocusText]}>
            {item}
          </RobotoRegular>
        </RippleHOC>
      );
    })}
  </View>
  );
};
export default PageViewButton;
