import React from 'react';
import {Image, View} from 'react-native';
import {icons} from '../../../assets/images';
import RobotoMedium from '../../Texts/RobotoMedium';
import RobotoRegular from '../../Texts/RobotoRegular';
import RippleHOC from '../../wrappers/Ripple';
import styles from './syles';
import RenderHtmlComponent from '../../ReusableComponent/RenderHtmlComponent';
import moment from 'moment';
import CustomSkeleton from '../../Loaders/CustomSkeleton';
import { vh } from '../../../utils/dimensions';

const StoreCard = props => {
  return (
    <View>
      {
        props.loader?

        <CustomSkeleton height={10} width={88}
        marginTop={vh*2}
        />:

    <RippleHOC onPress={props.onPress} style={[styles.storeCard, props.style]}>
      <View style={styles.titleContainer}>
        {props.heading&&<RobotoMedium style={[styles.storeText,props.textStyle]}>{props?.heading}</RobotoMedium>}
        <RenderHtmlComponent
        content={props?.name}
        
        />

        {props.icon && (
          <Image source={icons.rightArrow} style={styles.arrowIcon} />
        )}
        {props.date &&
        <RobotoRegular style={styles.descText}>{moment(props?.date).format("DD-MM-YYYY")}</RobotoRegular>
        
        }
      </View>
      {props.desc && (
        <RobotoRegular style={styles.descText}>{props?.desc}</RobotoRegular>
      )}
    </RippleHOC>
      }
    </View>
  );
};

export default StoreCard;
