import { containNumberReg, emailReg, leadingZeros, lowerReg, nameReg, numberReg, specialCharReg, upperReg } from "./Regex"
import moment from 'moment'
import { minAgeInDays } from "./Constants"
import libphonenumber from 'libphonenumber-js'
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
    console.log("pparsed value",parsedValue);
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