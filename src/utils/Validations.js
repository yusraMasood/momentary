import { containNumberReg, emailReg, leadingZeros, lowerReg, nameReg, numberReg, specialCharReg, upperReg } from "./Regex"
import moment from 'moment'
import { minAgeInDays } from "./Constants"
import ReactNativeBiometrics, { BiometryTypes } from 'react-native-biometrics'
import libphonenumber from 'libphonenumber-js'
import Toast from "react-native-toast"

export const validateEmail = email => {
    return emailReg.test(email)
}
export const validateNumber = numberOnly => {
    return numberReg.test(numberOnly)
}
export const validateName = nameOnly => {
    return nameReg.test(nameOnly)
}
export const validateLowerCase = value => {
    return lowerReg.test(value)
}
export const  getBiometricData=async()=>{
    const rnBiometrics = new ReactNativeBiometrics()
    const { biometryType } = await rnBiometrics.isSensorAvailable()
        rnBiometrics.isSensorAvailable()
    .then((resultObject) => {
      const { available, biometryType } = resultObject
  
    //   if (available && biometryType === BiometryTypes.TouchID) {
    //   } 
       if (available && biometryType === BiometryTypes.FaceID) {
      } else if (available && biometryType === BiometryTypes.Biometrics) {
      } else {
      }
    })


    rnBiometrics.simplePrompt({promptMessage: 'Confirm fingerprint'})
    .then((resultObject) => {
      const { success } = resultObject
  
      if (success) {
      } else {
      }
    })
    .catch(() => {
    })
    // rnBiometrics.createSignature({
    //     promptMessage: 'Sign in',
    //     payload: payload
    //   })
    //   .then((resultObject) => {
    //     const { success, signature } = resultObject
    
    //     if (success) {
    //       verifySignatureWithServer(signature, payload)
    //     }
    //   })
//     let epochTimeSeconds = Math.round((new Date()).getTime() / 1000).toString()
// let payload = epochTimeSeconds + 'some message'
    
//     const { biometryType } = await rnBiometrics.isSensorAvailable()


//     rnBiometrics.createKeys()
//   .then((resultObject) => {
//     const { publicKey } = resultObject
//     // sendPublicKeyToServer(publicKey)
//   })
    // rnBiometrics.createSignature({
    //     promptMessage: 'Sign in',
    //     payload: payload
    //   })
    //   .then((resultObject) => {
    //     const { success, signature } = resultObject
    
    //     if (success) {
    //       verifySignatureWithServer(signature, payload)
    //     }
    //   })

  
  }
export const getCountryCode=( input )=> {
    // Set default country code to US if no real country code is specified
    const defaultCountryCode = input.substr( 0, 1 ) !== '+' ? 'US' : null;
    let formatted = new libphonenumber.asYouType( defaultCountryCode ).input( input );
    let countryCode = '';
    let withoutCountryCode = formatted;
    
    if ( defaultCountryCode === 'US' ) {
      countryCode = '+1';
      formatted = '+1 ' + formatted;
    }
    else {
      const parts = formatted.split( ' ' );
      countryCode = parts.length > 1 ? parts.shift() : '';
      withoutCountryCode = parts.join( ' ' );
    }
    
    return {
      formatted,
      withoutCountryCode,
      countryCode,
    }
  }

export const validateUpperCase = value => {
    return upperReg.test(value)
}

export const validateContainNumber = value => {
    return containNumberReg.test(value)
}

export const validateSpecialCharacter = value => {
    return specialCharReg.test(value)
}
export const validateDOB = value => {

    var parsedValue = moment(value)
    var days = moment().diff(parsedValue, 'days')
    if(days < minAgeInDays){
        return false
    }
    return true
}
export const confirmPassword = (password1, password2) => {
    return true
}

export const validateLeadingZeros = value => {
    return leadingZeros.test(value)
}