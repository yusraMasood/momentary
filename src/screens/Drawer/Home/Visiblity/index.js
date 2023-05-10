import React,{useState,useLayoutEffect} from 'react'
import { View,Image } from 'react-native'
import { icons, tabIcons } from '../../../../assets/images'
import RadioButton from '../../../../components/RadioButton'
import RippleHOC from '../../../../components/wrappers/Ripple'
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper'
import styles from './styles'
import { useDispatch } from 'react-redux'
import { saveSetting, useSetting } from '../../../../state/entry'

const Visiblity =(props)=>{
const setting =useSetting()
    const {type,visiblity} =props?.route?.params
    const [itemValue,setItemValue] =useState(visiblity=="public"?"Global Network":visiblity=="private"?"Private":visiblity=="myNetwork"?"My Network":visiblity)
    const dispatch =useDispatch()
    const locationArray=[
        "Global Network","Private","My Network",
    ]
    const onPressBack=()=>{
      props.navigation.goBack()


//         if(type=="add")
// {
//     props.route?.params?.handleRoute(itemValue)
//     // props.navigation.navigate("NewEntry",{privacy: itemValue})
//     props.navigation.goBack()
// }
// else{
//     props.route?.params?.handleRoute(itemValue)
//     props.navigation.goBack()


//     // props.navigation.navigate("EditEntry",{privacy: itemValue})

// }
    }
    useLayoutEffect(() => {
        props.navigation.setOptions({
          headerLeft: () => {
            return (
              <RippleHOC onPress={onPressBack}>
                <Image source={icons.back} style={styles.backIcon} />
              </RippleHOC>
            );
          },
      
        });
      }, [props.navigation]);

    return(
        <ScreenWrapper style={styles.container}>
             {locationArray.map((item,index)=>{
                const focus = item==itemValue
                return(
                    <RippleHOC key={index} onPress={()=> {
                        setItemValue(item)
                        dispatch(saveSetting({...setting,visiblity: item}))

                        }} style={styles.buttonContainer}>
                    <RadioButton title={item} focus={focus} image={item?.img} iconStyle={styles.iconStyle}/>
                    </RippleHOC>
                )
            })}

        </ScreenWrapper>
    )
}
export default Visiblity