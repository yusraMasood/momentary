import React from 'react'
import { View,Image,LayoutAnimation } from 'react-native'
import { icons } from '../../../assets/images'
import EuclidCircularARegular from '../../Texts/EuclidCircularARegular'
import RobotoRegular from '../../Texts/RobotoRegular'
import RippleHOC from '../../wrappers/Ripple'
import styles from './styles'

const ListGridComponent=(props)=>{
    return(
        <View style={styles.alignGridContainer}>
        <View style={styles.gridMainContainer}>
          {
            props.onPress &&
          <RippleHOC onPress={props.onPress}>
          <RobotoRegular style={styles.journalText}>Create Journal</RobotoRegular>
          </RippleHOC>

          }
          <RippleHOC
            onPress={() =>{ 
                LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
                props.setList(true)}}
            style={styles.gridContainer}
          >
            <Image
              source={icons.list}
              style={[styles.gridIcon, props.list && styles.gridFocusIcon]}
            />
            <EuclidCircularARegular
              style={[styles.listText, props.list && styles.listFocusText]}
            >
              List
            </EuclidCircularARegular>
          </RippleHOC>
          <RippleHOC
            onPress={() => {
                LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
                props.setList(false)}}
            style={styles.gridContainer}
          >
            <Image
              source={icons.grid}
              style={[styles.gridIcon, !props.list && styles.gridFocusIcon]}
            />
            <EuclidCircularARegular
              style={[styles.listText, !props.list && styles.listFocusText]}
            >
              Grid
            </EuclidCircularARegular>
          </RippleHOC>
        </View>
      </View>

    )
}
export default ListGridComponent