import React,{useEffect} from 'react';
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

const HomeScreen = props => {
  const {data, isLoading, refetch, error} = useGetEntriesQuery({},{
    refetchOnFocus: true
  });
  const lastItem = data?.journalEntries[1]
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
        latitude: location.latitude,
        longitude: location.longitude,
        name: response?.results[0]?.formatted_address,
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
  
     
    setupMethods();
  }, []);
 

  return (
    <ScreenWrapper style={styles.container}>
      <RippleHOC
        onPress={() =>
          props.navigation.navigate('NewEntry', {type: 'New Entry'})
        }
        style={styles.newCardContainer}>
        <RobotoBold style={styles.headingText}>New Entry</RobotoBold>
        <RobotoRegular style={styles.descText}>
          "Sed ut perspiciatis unde omnis iste
        </RobotoRegular>
      </RippleHOC>
      <RippleHOC
        onPress={() =>
          props.navigation.navigate('EditEntry', {type: 'Resume Entry', lastItem})
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
    </ScreenWrapper>
  );
};
export default HomeScreen;
