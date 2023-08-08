import React, {useEffect, useRef, useState} from 'react';
import {View, Image} from 'react-native';
import {generalImages, icons} from '../../../../assets/images';
import SearchInput from '../../../../components/Inputs/SearchInput';
import RobotoRegular from '../../../../components/Texts/RobotoRegular';
import RippleHOC from '../../../../components/wrappers/Ripple';
import ScreenWrapper from '../../../../components/wrappers/ScreenWrapper';
import MapView, {Animated, Callout, Marker} from 'react-native-maps';
import styles from './styles';
import AddressInput from '../../../../components/Inputs/AddressInput';
import {colors, linearColors} from '../../../../utils/appTheme';
import {
  LATITUDE_DELTA,
  LONGITUDE_DELTA,
  distance,
  getBoundingBox,
} from '../../../../utils/HelperFunction';
import {useGetFeedQuery} from '../../../../state/friends';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';
import RenderHtmlComponent from '../../../../components/ReusableComponent/RenderHtmlComponent';
// import "../../../../utils/mapDarkMode.json"

const GlobalNetworkScreen = props => {
  const [location, setLocation] = useState(null);
  const [showDetail, setShowDetail] = useState(false);
  const [postsData, setPostsData] = useState([]);
  const [region, setRegion] = useState(null);
  const [selectedMarkerIndex,setSelectedMarkerIndex] =useState(0)
  // let mapAnimation = new Animated.Value(0)

  const [initialRegion, setInitialRegion] = useState({
    latitude: 24.8607,
    longitude: 67.0011,
    latitudeDelta: 5,
    longitudeDelta: 5,
  });
  const {data, isLoading, originalArgs, isFetching, refetch} = useGetFeedQuery({
    page: 1,
    limit: 30,
    privacy: 'public',
    distance:1000,
    latitude: location?.latitude,
    longitude: location?.longitude
    // latitude: 40.7127837,
    // longitude: -74.0059413,
  });
console.log("user posts with location", data);
  const mapRef = useRef(null);

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
    const locationData = {
      // pinlocation: true,
      latitude: data?.geometry?.location?.lat,
      longitude: data?.geometry?.location?.lng,
      // latitudeDelta: LATITUDE_DELTA,
      // longitudeDelta: LONGITUDE_DELTA,
      address: data?.formatted_address,
    };
    // dispatch(destinationLocation(locationData))
    setLocation(locationData);
    animateToRegion(locationData);
  };
  // console.log("location",location);

  const handleOnRegionChange = async region => {
    console.log("map region",region);
    const boundingBox = getBoundingBox(region);
    console.log(" bouuncing box",boundingBox);
    const radius = distance(
      boundingBox.minLat,
      region.latitude,
      boundingBox.minLng,
      region.longitude,
    );
    console.log(" radius",radius);

    setRegion(radius);
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
        // onRegionChangeComplete={setRegion}
        onRegionChange={handleOnRegionChange}
        loadingEnabled
        loadingIndicatorColor={colors.black}
        initialRegion={{...initialRegion}}
        zoomEnabled
        customMapStyle={require('../../../../utils/mapDarkMode.json')}
      >
        {data?.feeds.map((marker, index) => {
          return (
            <Marker
              key={index}
              coordinate={{
                latitude: marker?.location?.coordinates[1],
                longitude: marker?.location?.coordinates[0],
              }}
              onPress={() => setSelectedMarkerIndex(index)}
            >
              {selectedMarkerIndex==index &&
              <Image
                source={icons.mapPinAnimation}
                style={styles.markerIcon}
              />
            }
                <View style={styles.circleOuter}>
                  <LinearGradient
                    colors={linearColors.yellow}
                    style={styles.circleImg}
                  ></LinearGradient>
                </View>

              <Callout
                tooltip
                // style={{ display: 'none' }}
                onPress={() =>
                  props.navigation.navigate('PostByLocation', {id: marker?._id})
                }
              >
                <View style={styles.locationPopcontainer}>
                  <RobotoRegular style={styles.locationText}>
                    Location: {marker.location?.name}
                  </RobotoRegular>
                  <RobotoRegular style={styles.locationText}>
                    {moment(marker.createdAt).format('MMMM DD, YYYY - HH:MM A')}
                  </RobotoRegular>
                  <RenderHtmlComponent content={marker?.content} />

                  <View style={styles.imgArrayContainer}>
                  {marker.images&&marker.images.map((item, index) => {
                  return (
                    <View key={index} style={styles.printContainer}>
                      <Image source={item?.thumbnail?{uri: item?.thumbnail}: generalImages?.defaultImage} style={styles.printimg} />
                    </View>
                  );
                })} 

                  </View>
                </View>
              </Callout>
            </Marker>
          );
        })}
      </MapView>
    </ScreenWrapper>
  );
};
export default GlobalNetworkScreen;
{
  /* <MarkerDetailCard/>
          
         
          </Marker> */
}

{
  /* {marker.images&&marker.image.map((item, index) => {
                  return (
                    <View key={index} style={styles.printContainer}>
                      <Image source={item?.thumbnail?{uri: item?.thumbnail}: generalImages?.defaultImage} style={styles.printimg} />
                    </View>
                  );
                })} */
}
