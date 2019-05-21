var capitalize = require('../Function/Capitalize')
var expect = require('chai').expect

describe("#capitalize", function(){
it("Capitalizes the letters", function () { 
    expect(capitalize("hello")).to.equal("hELLO")
 })
})