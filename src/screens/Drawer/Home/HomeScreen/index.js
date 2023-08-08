import React,{useEffect,useState} from 'react';
import {View, Image, FlatList} from 'react-native';
import {icons} from '../../../../assets/images';
import RobotoBold from '../../../../components/Texts/RobotoBold';
import RobotoRegular from '../../../../components/Texts/RobotoRegular';
import RippleHOC from '../../../../components/wrappers/Ripple';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
import styles from './styles';
import { saveSetting, useGetEntriesQuery, useSetting } from '../../../../state/entry';
import { getAddressByLatLong } from '../../../../state/location';
import { LATITUDE_DELTA, LONGITUDE_DELTA, checkLocationPermissions, getCurrentLocation } from '../../../../utils/HelperFunction';
import { useDispatch } from 'react-redux';
import { Toast } from '../../../../Api/APIHelpers';
import moment from 'moment';
import CustomSkeleton from '../../../../components/Loaders/CustomSkeleton';
import { vh,vw } from '../../../../utils/dimensions';
import { useGetProfileQuery } from '../../../../state/account';
import { setProfile, useToken } from '../../../../state/auth';

const HomeScreen = props => {
  const {data:profile,refetch: profileRefetch} =useGetProfileQuery()
  // const token =useToken()
  const {data, isLoading, refetch, error} = useGetEntriesQuery({
    page:1,
    // limit:1
  },{
    refetchOnFocus: true
  });

  // console.log(" token" ,profile);
  const lastItem = data?.journalEntries[0]?data?.journalEntries[0]: null
  const dispatch =useDispatch()
  const setting =useSetting()
  const getUserLocation = async () => {
    const location = await getCurrentLocation();
    const locationData = {
      latitude: location.latitude,
      longitude: location.longitude,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    };
    try {
      const response = await dispatch(getAddressByLatLong(locationData));
      dispatch(saveSetting({...setting,location:{
        name: response?.results[0]?.formatted_address,
        coordinates: [location.longitude,location.latitude]
      } }))
    } catch (e) {
      Toast.error(e);
    }
  };
  const setupMethods = async () => {
    checkLocationPermissions()
      .then(() => {
        getUserLocation();
      })
      .catch(e => {
        console.log('catch', e);
      });
  };
  useEffect(() => {

    dispatch(setProfile(profile?.user))

    setupMethods();
  }, [profile]);

  useEffect(()=>{
    const unsubscribe = props.navigation.addListener('focus', () => {
      profileRefetch()
      refetch()
    });
    return unsubscribe;

  },[props.navigation])
  
  const getFriendIds=()=>{
    const tempFriendId=[]
    const tempFriend=[]
    lastItem?.selectedPeople.map((value)=>{
      tempFriendId.push(value?._id)
      tempFriend.push(value)
    })
    dispatch(saveSetting({...setting,hashtags: lastItem?.hashtags,
      selectedPeople:tempFriend,
      selectedPeopleId: tempFriendId,
      visiblity:lastItem?.privacy==="public"?"Global Network": lastItem?.privacy==="private"?"Private": "My Network"
      ,comment: lastItem?.comment
    }))
  }
 

  return (
    <ScreenWrapper style={styles.container}>
      {isLoading?
      [1,2].map((item,index)=>{
        return(
          <CustomSkeleton
          key={index}
          height={18}
          width={88}
          marginLeft={vw*2}
          marginTop={vh*3}
          /> 
        )
      })
     :
    <View>
       <RippleHOC
        onPress={() =>{
          getFriendIds()
         
          props.navigation.navigate('NewEntry', {type: 'New Entry',lastItem})
        }
        }
        style={styles.newCardContainer}>
        <RobotoBold style={styles.headingText}>New Entry</RobotoBold>
        <RobotoRegular style={styles.descText}>
          "Sed ut perspiciatis unde omnis iste
        </RobotoRegular>
      </RippleHOC>
      {lastItem &&
      <RippleHOC
      onPress={() =>
        props.navigation.navigate('EditEntry', {type: 'resume',id: lastItem?._id})
      }
      style={styles.newCardContainer}>
      <RobotoBold style={styles.headingText}>Resume Entry</RobotoBold>
      <View style={styles.calendarContainer}>
        <View style={styles.calendarContainer}>
          <Image source={icons.calendar} style={styles.calendarIcon} />
          <RobotoRegular style={styles.entryDescText}>
            {moment(lastItem?.updatedAt).format("DD/MM/YYYY")}{'  '}
          </RobotoRegular>
        </View>
        <View style={styles.calendarContainer}>
          <Image source={icons.clock} style={styles.calendarIcon} />
          <RobotoRegular style={styles.entryDescText}>{moment(lastItem?.updatedAt).format("HH:MM")}</RobotoRegular>
        </View>
      </View>
    </RippleHOC>
      
      
      }
      
    </View>
    
    }
      
     
    </ScreenWrapper>
  );
};
export default HomeScreen;
{/* <View>
<CustomSkeleton
height={18}
width={88}
marginLeft={vw*4}
marginTop={vh*3}
/> 
</View> */}
