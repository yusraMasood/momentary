export const numberReg = /^\d*$/
export const emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
export const nameReg = /^[ a-zA-Z]+$/
export const lowerReg = /^(?=.*[a-z])/
export const upperReg = /^(?=.*[A-Z])/
export const containNumberReg = /^(?=.*\d)/
export const specialCharReg = /^(?=.*[-+_!@#$%^&*., ?=])/
export const nonNumbersReg = /^\D+/g
export const leadingZeros = /^0+/