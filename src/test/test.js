'use strict'

var expect = require('chai').expect
var phoneFormatter = require('../app')

describe('#phoneFormatter', function() {
  it('Add international format to an Israeli number', function() {
    var result = phoneFormatter('0538491534')
    expect(result).to.equal('+972 53 849-1534')
  })
  it('Arrange and format israeli phone with international code', function() {
    var result = phoneFormatter('+972538491534')
    expect(result).to.equal('+972 53 849-1534')
  })
  it('Arrange and format without plus (+) sign', function() {
    var result = phoneFormatter('972538491534')
    expect(result).to.equal('+972 53 849-1534')
  })
  it('throw an error if digits number higher than 10 or lower than 9', function() {
    expect(() => phoneFormatter('053-984-1322903')).to.throw()
  })
})
