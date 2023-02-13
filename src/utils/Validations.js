import { containNumberReg, emailReg, leadingZeros, lowerReg, nameReg, numberReg, specialCharReg, upperReg } from "./Regex"
import moment from 'moment'
import { minAgeInDays } from "./Constants"
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
    // console.log("osjosjosjosj");

    var parsedValue = moment(value)
    console.log("pparsed value",parsedValue);
    var days = moment().diff(parsedValue, 'days')
    if(days < minAgeInDays){
        // console.log("uoauosuosij");
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