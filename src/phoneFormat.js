'use strict'

// var PhoneError = require('./error')
var phoneCheck = require('./phoneCheck')

exports.fmt = function(phoneNumber) {
  phoneCheck.typeCheck(phoneNumber)

  let number = String(phoneNumber).replace(/\D/g, '')
  let divide_number = number.split('')
  let checkInt = phoneCheck.checkInt(divide_number)
  
  checkInt && (divide_number = cvrtIntToZero(divide_number))

  phoneCheck.lengthCheck(divide_number, phoneNumber)
  
  if (phoneCheck.isMobileArea(divide_number)) {
    return mobileParser(divide_number)
  }
}

function cvrtIntToZero(prefix) {
  let converted = prefix
  prefix[0] === '+' ? 
      (converted = prefix.splice(4), converted.splice(0,0, '0')) : 
      (converted = prefix.splice(3), converted.splice(0,0, '0'))
  return converted
}

function mobileParser(num) {
  // prepend the 972 international code for Israel.
  // mobile a1 and mobile a2 are Mobile Area Codes, to determine the mobile service provider
  let prepend = '+972',
      mobile_a1 = num[1],
      mobile_a2 = num[2]
  // the Subscriber Number XXX-XXXX
  let first_nums = num.slice(3, 6).join(''),
      last_nums = num.slice(6).join('')
  let newNumber = `${prepend} ${mobile_a1 + mobile_a2} ${first_nums}-${last_nums}`
  // console.log(newNumber)
  return newNumber
}

