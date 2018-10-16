'use strict'

var PhoneError = require('./error')

exports.typeCheck = function(n = null) {
  if (null) {
    console.log('please insert parameter')
  }
  if (typeof n !== 'number' && typeof n !== 'string') {
    throw new PhoneError('type')
  }
}

exports.isMobileArea = function(n) {
  let divide_number = n
  typeof n !== 'object' && typeof n === 'string' && (divide_number = n.split(''))
  if (divide_number[0] === '0' && divide_number[1] === '5') {
    return true
  } else {
    throw new PhoneError('general')
  }
}

exports.lengthCheck = function(n, phoneNumber) {
  let initialNlength = phoneNumber.length
  let l = n.length
  if (l < 9 || l > 11) {
    throw new PhoneError('length')
  }
  else if (initialNlength > 18) {
    throw new PhoneError('symbols')
  }
}

exports.checkInt = function(number) {
  let num = number
  typeof num !== 'object' && (num = String(number).split('') )
  let intCode
  return num[0] === '+' 
      ? 
      (
        intCode =  num.slice(0,4).join(''),
        intCode === '+972' ? true : false
       ): (
          intCode = num.slice(0, 3).join(''),
          intCode === '972' ? true : false
       )
}