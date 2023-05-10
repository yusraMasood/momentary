import React, { useRef,useState } from 'react';
import {View, Image} from 'react-native';
import {generalImages, icons} from '../../../../assets/images';
import SearchInput from '../../../../components/Inputs/SearchInput';
import RobotoRegular from '../../../../components/Texts/RobotoRegular';
import RippleHOC from '../../../../components/wrappers/Ripple';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
import MapView, {Marker} from 'react-native-maps';
import styles from './styles';
import AddressInput from '../../../../components/Inputs/AddressInput';
import { colors, linearColors } from '../../../../utils/appTheme';
import { LATITUDE_DELTA, LONGITUDE_DELTA } from '../../../../utils/HelperFunction';
import { useGetFeedQuery } from '../../../../state/friends';
import LinearGradient from 'react-native-linear-gradient';
import MarkerDetailCard from '../../../../components/Cards/MarkerDetailCard';
// import "../../../../utils/mapDarkMode.json"

const GlobalNetworkScreen = (props) => {
  const [showDetail,setShowDetail] =useState(false)

  const [initialRegion, setInitialRegion] = useState({
    latitude: 24.8607,
    longitude: 67.0011,
    latitudeDelta: 5,
    longitudeDelta: 5,
  });
    const {data,isLoading,originalArgs, refetch} =useGetFeedQuery({
    page:1,
    limit:10,
    privacy:"public"
  })
  console.log("publicddd",data);
  const [location,setLocation] =useState(null)

  const mapRef =useRef(null)

  const animateToRegion = location => {
    mapRef.current.animateToRegion(
      {
        latitude: location?.latitude,
        longitude: location?.longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      1000,
    );
  };


  const onLocationSearch = async data => {
    const locationData={
      pinlocation: true,
      latitude: data?.geometry?.location?.lat,
      longitude: data?.geometry?.location?.lng,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
      address: data?.formatted_address,
    }
    // dispatch(destinationLocation(locationData))
    setLocation(locationData)
    animateToRegion(locationData)
    

  };

  return (
    <ScreenWrapper style={styles.container}>
 <View style={styles.searchContainer}>
  
      <AddressInput
        location={location}
        setLocation={setLocation}
        // animateRegion={animateToRegion}
        onLocationSearch={onLocationSearch}
        style={styles.addressInput}
      />
 </View>
      <MapView
        style={styles.mapView}
        ref={mapRef}
        loadingEnabled
        loadingIndicatorColor={colors.black}
        initialRegion={{...initialRegion}}
        zoomEnabled
        customMapStyle={require("../../../../utils/mapDarkMode.json")}
     >
      {data?.feeds.map((marker,index)=>{
        return(
          <Marker
            coordinate={{
              latitude: marker?.location?.latitude,
              longitude: marker?.location?.longitude
            }}
            // draggable={true}
            // onDragEnd={onMarkerDragEnd}
          >
              <MarkerDetailCard/>
          
         
          </Marker>

        )
      })}

      {/* {location && (
          <Marker
            coordinate={location}
            draggable={true}
            // onDragEnd={onMarkerDragEnd}
          >
            <Image source={icons.mapLoc} style={styles.markerIcon} />
            <RippleHOC
        style={styles.locationPopcontainer}
        onPress={() => props.navigation.navigate('PostByLocation')}
      >
        <RobotoRegular style={styles.locationText}>
          Location: City, Country
        </RobotoRegular>
        <RobotoRegular style={styles.locationText}>
          January 31, 2022 - 03:00 pm
        </RobotoRegular>
        <RobotoRegular style={styles.locationText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </RobotoRegular>
        <View style={styles.imgArrayContainer}>
          {imagesArray.map((item, index) => {
            return (
              <View key={index} style={styles.printContainer}>
                <Image source={generalImages.print} style={styles.printimg} />
              </View>
            );
          })}
        </View>
      </RippleHOC>
          </Marker>
        )} */}
     </MapView>

     
    </ScreenWrapper>
  );
};
export default GlobalNetworkScreen;
