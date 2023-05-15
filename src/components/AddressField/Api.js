const googleBaseUrl =
  'https://maps.googleapis.com/maps/api/place/autocomplete/json?input=';
const geoBase = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=';
const googleApiKey = 'AIzaSyCL2XFs2hqb_aQFKtcUVf9xyhdxLBSFdp0';
const geocodeUrl =
  'https://maps.googleapis.com/maps/api/geocode/json?address='; 

export const AddressApi = {
  getAddressByLatlng: (data, callback) => {
    let latlng = data.lat + ',' + data.lng;
    let full_url =
      geoBase +
      latlng +
      '&sensor=false' +
      '&key=' +
      googleApiKey +
      '&sessiontoken=' +
      AddressApi.getSessionToken();
    fetch(full_url).then(d => {
      d.json().then(data => {
        let re = [];
        if (data.status === 'OK') {
          // data.result
          let a = data.results.reverse();
          for (var da of a) {
            // console.log(da)
            if (da.types.indexOf('country') > -1) {
              for (var component of da.address_components) {
                if (component.types.indexOf('country') > -1) {
                  callback(da);
                  break;
                }
              }
              break;
            }
          }
        }
      });
    });
  },
  getAddressPrediction: (word, callback) => {
    let url =
      googleBaseUrl +
      word +
      '&key=' +
      googleApiKey +
      '&sessiontoken=' +
      AddressApi.getSessionToken();
    fetch(url)
      .then(d => {
        d.json()
          .then(data => {
            callback(data);
          })
          .catch(e => {
          });
      })
      .catch(e => {
        // console.log(e)
      });
  },
  getSessionToken: () => {
    let sessionKey = Math.floor(Math.random() * 10).toString();
    return sessionKey;
  },
  getGeoCode: (address, success) => {
    let url = geocodeUrl + address +'&key=' +
    googleApiKey ;
    console.log(url, 'addressHERe')
    fetch(url).then(d => {
      console.log(d, 'ddddd')
      d.json().then(data => {
        success(data.results[0]);
        console.log('add data',data) 
      });
    });
  },
};
export default AddressApi;
