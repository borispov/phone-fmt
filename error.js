const errorMsgs = { 
  type: 'Error: use string or number type parameter',
  length: 'Invalid phone number, too many or too few digits',
  symbols:
    'Please insert phone number with regular convetion symbols/hyphens or digits only number',
  general: 'number doesn\'t follow israeli numeric conventions'
}

function PhoneNumberException(message) {
  this.message = (errorMsgs[message] || '' )
  this.name = "Description:"
  this.stack
}
PhoneNumberException.prototype = Error.prototype

module.exports = PhoneNumberException