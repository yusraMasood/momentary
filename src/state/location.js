const geoBase = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=';
const googleBaseUrl =
  'https://maps.googleapis.com/maps/api/place/autocomplete/json?input=';
const googleApiKey = 'AIzaSyCL2XFs2hqb_aQFKtcUVf9xyhdxLBSFdp0';
const geocodeUrl =
  'http://dev61.onlinetestingserver.com/forward-geo-code?address=';
export const getAddressByLatLong = coordinate => {
    let latlng = coordinate.latitude + ',' + coordinate.longitude;
  
    let url = `${geoBase}${latlng}&sensor=false&key=${googleApiKey}`;
    return async dispatch => {
      // dispatch(showLoader());
  
      try {
        const response = await fetch(url);
        const jsonResponse = await response.json();
  
        // dispatch(hideLoader());
  
        return Promise.resolve(jsonResponse);
      } catch (error) {
        // dispatch(hideLoader());
        return Promise.reject(error);
      }
    };
  };
  