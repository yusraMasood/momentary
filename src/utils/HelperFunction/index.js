import Geolocation from 'react-native-geolocation-service';

import moment from 'moment';
import {Dimensions, Platform} from 'react-native';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';
import {check, PERMISSIONS, request, RESULTS} from 'react-native-permissions';
import Geocoder from 'react-native-geocoding';
const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;
export const LATITUDE_DELTA = 0.006339428281933124;
export const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const googleApiKey = 'AIzaSyCL2XFs2hqb_aQFKtcUVf9xyhdxLBSFdp0';

export const checkLocationPermissions = async () => {
  // console.log('check location permission');
  // console.log(
  //   PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
  //   'PERMISSIONS.IOS.LOCATION_WHEN_IN_USE',
  // );

  try {
    if (Platform.OS == 'android') {
      await promptForLocation();
    }

    const permission =
      Platform.OS == 'android'
        ? PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
        : PERMISSIONS.IOS.LOCATION_WHEN_IN_USE;
    await checkPermission(permission);
  } catch (error) {
    // console.log('check location permission', error);
    throw new Error(error);

    // show toast
  }
};

export const getCurrentLocation = popupShow => {
  console.log('get current location');
  Geocoder.init(googleApiKey, {language: 'en'}); // use a valid API key
  // var addressComponent;

  return new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(
      success => {
        console.log(success, 'success');

        // Geocoder.from({
        //   latitude: success.coords.latitude,
        //   longitude: success.coords.longitude,
        // }).then(json => {
        //   addressComponent = json.results[0].address_components[0];
        // })
        //   .catch(error => console.warn(error));
        let Coords = {
          latitude: success.coords.latitude,
          longitude: success.coords.longitude,
          // address:addressComponent
        };
        // console.log("Address of User", Coords);

        return resolve(Coords);
      },
      error => {
        return reject(error);
      },
      Platform.OS == 'ios'
        ? {
            enableHighAccuracy: true,
            timeout: 20000,
            maximumAge: 0,
          }
        : {
            enableHighAccuracy: true,
          },
    );
  });
};

export const checkCameraPickerPermissions = async permission => {
  try {
    await checkPermission(permission);
  } catch (error) {
    // show toast

    if (error == RESULTS.BLOCKED) {
      error = 'Please allow permissions from settings';
    }

    return Promise.reject(error);
  }
};

// Private functions
const promptForLocation = async () => {
  try {
    const success =
      await RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
        interval: 10000,
        fastInterval: 5000,
      });
  } catch (error) {}
};

const checkPermission = async permission => {
  const result = await check(permission);
  console.log('result', result);

  return new Promise(async (resolve, reject) => {
    switch (result) {
      case RESULTS.UNAVAILABLE:
        return reject(RESULTS.UNAVAILABLE);

      case RESULTS.DENIED:
        try {
          const request_result = await getPermission(permission);
          return resolve(request_result);
        } catch (error) {
          return reject(error);
        }

      case RESULTS.GRANTED:
        return resolve(RESULTS.GRANTED);

      case RESULTS.BLOCKED:
        return reject(RESULTS.BLOCKED);
    }
  });
};

const getPermission = async permission => {
  const result = await request(permission);

  return new Promise(async (resolve, reject) => {
    switch (result) {
      case RESULTS.UNAVAILABLE:
        return reject(RESULTS.UNAVAILABLE);

      case RESULTS.DENIED:
        return reject(RESULTS.DENIED);

      case RESULTS.GRANTED:
        return resolve(RESULTS.GRANTED);

      case RESULTS.BLOCKED:
        return reject(RESULTS.BLOCKED);
    }
  });
};
